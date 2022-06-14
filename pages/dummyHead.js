import { useState } from "react";
import Allcards from "../components/AllCards";
import SearchBar from "../components/SearchBar";
import comp from "../data/all_companies.json";

export async function getStaticProps() {
  return {
    props: { comp,
    },
  };
}

const DummyHead =({comp})=>{
return(
  <>
        <SearchBar comp={comp} />

      <Allcards comp={comp}/>
    
    </>
  );
};

export default DummyHead;
