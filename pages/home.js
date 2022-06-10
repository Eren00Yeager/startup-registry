import React, { useState, useEffect } from 'react';
import comp from "../data/all_companies.json";
import Card from "../components/Card";
import Pagination from "../components/Pagination";


export async function getStaticProps() {
    return {
      props: { comp,
      },
    };
  }
  
export default function Home({comp}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [compsPerPage] = useState(12);

  
  // Get current posts
  const indexOfLastComp = currentPage * compsPerPage;
  const indexOfFirstComp = indexOfLastComp - compsPerPage;
  const currentComps = comp.slice(indexOfFirstComp, indexOfLastComp);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
       <div>
         <Card companies={currentComps}/>
         <Pagination 
        compsPerPage={compsPerPage}
        totalComps={comp.length}
        paginate={paginate}
      />
       </div>
  
  );
}

