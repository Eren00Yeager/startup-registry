import React, { useState} from 'react';
import Card from "../components/Card";
import Pagination from "../components/Pagination";

  
export default function AllCards({comp,setSinglecomp}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [compsPerPage] = useState(6);

  
  // Get current posts
  const indexOfLastComp = currentPage * compsPerPage;
  const indexOfFirstComp = indexOfLastComp - compsPerPage;
  const currentComps = comp.slice(indexOfFirstComp, indexOfLastComp);
  const lastPage = Math.ceil(comp.length / compsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
       <div> 

          <Card companies={currentComps} setSinglecomp={setSinglecomp}/>
          

            <Pagination 
            lastPage={lastPage}
            currPage={currentPage}
            paginate={paginate}
          /> 
         
       </div>
  
  );
}

