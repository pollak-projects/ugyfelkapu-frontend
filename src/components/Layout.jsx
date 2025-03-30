import Sidebar from "./Sidebar";
import Footer from "./footer";

const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen bg-main">
      <div className="flex">
        <Sidebar />
        <main className="w-full px-10">
          {title && <h1 className="overflow-underline text-6xl pt-10 pb-4">{title}</h1>}
          <div className="pt-14">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;