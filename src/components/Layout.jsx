import Sidebar from "./Sidebar";
import Footer from "./footer";

const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen bg-main">
      <div className="flex">
        <Sidebar />
        <main className="w-full pl-10">
          {title && (
            <h1 className="relative text-left text-4xl pt-10 inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4.5px] after:h-[2.5px] after:w-[calc(100%+20px)] after:bg-pollak-green">
              {title}
            </h1>
          )}
          <div className="pt-14">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;