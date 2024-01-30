import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function Layout() {
  return (
    <div className="dark:text-lime-500">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}
