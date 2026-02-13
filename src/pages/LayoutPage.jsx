import { Outlet } from "react-router-dom";
import NavBarComponent from "../componentens/NavBarComponent";
import FooterComponent from "../componentens/FooterComponent";

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
