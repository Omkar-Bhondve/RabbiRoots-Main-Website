import React, { useEffect, useState } from "react";
import Topbar from "../components/Common/Topbar";
import Category from "../components/Categories/Category";
import Dairy from "../components/Categories/Dairy";
import Rolling from "../components/Categories/Rolling";
import Hookah from "../components/Categories/Hookah";
import ColdDrinks from "../components/Categories/ColdDrinks";
import ItemsAdd from "../components/UI/ItemsAdd";
import Loader from "../components/UI/Loader";
import MouthFreshner from "../components/Categories/MouthFreshner";
import Candies from "../components/Categories/Candies";

function Home({ clone, setClone, toggleClone }) {
  const initialShown = sessionStorage.getItem("appInitialized") === "true";
  const [loading, setLoading] = useState(() => (initialShown ? false : true));

  useEffect(() => {
    if (initialShown) return;
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("appInitialized", "true");
      } catch (e) {}
    }, 2000);
    return () => clearTimeout(timer);
  }, [initialShown]);

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
