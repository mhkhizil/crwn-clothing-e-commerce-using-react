import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../../shop-data.js"
import { getCategoriesAndDocuments } from "../../util/firebase/firebase.utils.js";
//actual value u want to access
export const CategoriesContext = createContext({
    categoriesMap:[],
   
});
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap,setCategoriesMap]=useState({});
    const value={categoriesMap};
  useEffect(()=>{
    const getCategoriesMap=async ()=>{
      const getCategories=await getCategoriesAndDocuments();
      console.log(getCategories);
      setCategoriesMap(getCategories)
    };
    getCategoriesMap()
  },[])
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
