import React from "react";
import HeroComponent from "../components/HeroComponent";
import HeroPic from "../img/HeroPic.png";
import NewArrivalComponent from "../components/NewArrivalComponent";

export default function HomePage() {
  return (
    <>
      <HeroComponent
        imgUrl={HeroPic}
        content="Where Every Box Holds Value"
        description="Unlock rare collectibles and limited-edition blind boxes."
      />
      <NewArrivalComponent />
    </>
  );
}
