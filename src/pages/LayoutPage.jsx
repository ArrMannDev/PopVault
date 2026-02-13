import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

export default function LayOutPage() {
  //   const pages = [
  //     { label: "Home", path: "/" },
  //     { label: "Flights", path: "/flights" },
  //   ];
  return (
    <>
      <NavBarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}
