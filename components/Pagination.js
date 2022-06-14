import React from 'react';

const Pagination = ({ compsPerPage, totalComps, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComps / compsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item' style={{'padding':'1vh'}}>
            <a onClick={() => paginate(number)} className='page-link' style={{'backgroundColor':'#442ccec2','color':'white','borderRadius':'10px'}}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;