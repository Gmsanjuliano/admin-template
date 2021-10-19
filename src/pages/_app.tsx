import type { AppProps } from "next/app";
import { AppProvider } from "../data/context/appContext";
import { AuthProvider } from "../data/context/authContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
