import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/user";
import route from "next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  user?: User;
  googleLogin?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uId: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

function cookies(loged: boolean) {
  if (loged) {
    Cookies.set("admin-template-auth", loged, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  async function sessionConfig(userFirebase) {
    if (userFirebase?.email) {
      const user = await normalUser(userFirebase);
      setUser(user);
      cookies(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      cookies(false);
      setLoading(false);
      return false;
    }
  }

  async function googleLogin() {
    try {
      setLoading(true);
      const res = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      sessionConfig(res.user);
      route.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await sessionConfig(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(sessionConfig);
      return () => cancel();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
