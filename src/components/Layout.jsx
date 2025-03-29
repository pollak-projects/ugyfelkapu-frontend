import Sidebar from "./Sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-main">
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;