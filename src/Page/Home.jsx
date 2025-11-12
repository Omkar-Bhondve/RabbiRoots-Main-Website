import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Category from "../Components/Category";
import Dairy from "../Components/Dairy";
import Rolling from "../Components/Rolling";
import Hookah from "../Components/Hookah";
import ColdDrinks from "../Components/ColdDrinks";
import ItemsAdd from "../Components/ItemsAdd";
import Loader from "../Components/Loader";
import MouthFreshner from "../Components/MouthFreshner";
import Candies from "../Components/Candies";

function Home({ clone, setClone, toggleClone }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }
    , 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Topbar />
      <Category />
      <Dairy />
      <Hookah />
      <ColdDrinks />
      <MouthFreshner />
      <Candies />
      <Rolling />
      <ItemsAdd clone={clone} setClone={setClone} toggleClone={toggleClone} />
    </>
  );
}

export default Home;
