import Header from "./header";
import Loading_state from "./loading_state";
import { useLoading } from "../hooks";
import Footer from "./footer";

const Layout = ({ children }) => {
  const loading = useLoading((state) => state.loading);

  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 178px - 66px)" }}>
        <Loading_state loading_state={loading}>{children}</Loading_state>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
