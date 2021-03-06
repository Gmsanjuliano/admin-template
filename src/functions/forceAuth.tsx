import Image from "next/image";
import Head from "next/head";
import router from "next/router";
import loading from "../../public/images/loading.gif";
import useAuth from "../data/hook/useAuth";

export default function ForceAuth(jsx) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!docment.cookie?.includes("admin-template-auth")) {
              window.location.href = "/authentication"
              }`,
            }}
          />
        </Head>
        {jsx}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className="flex justify-center items-center">
        <Image src={loading} />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push("/authentication");
    return null;
  }
}
