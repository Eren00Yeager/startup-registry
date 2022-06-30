import { useState } from "react";
import Allcards from "../components/AllCards";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";

export async function getStaticProps() {
  const res=await fetch('/api/datasheets')
  console.log("Hy")
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
