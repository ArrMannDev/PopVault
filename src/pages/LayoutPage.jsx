import { Outlet } from "react-router-dom";
import NavBarComponent from "../componentens/NavBarComponent";

export default function LayOutPage() {
  //   const pages = [
  //     { label: "Home", path: "/" },
  //     { label: "Flights", path: "/flights" },
  //   ];
  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
}
