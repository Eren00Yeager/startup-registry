import {useRouter} from 'next/router';
import { useState } from "react";
import searchStyles from "../styles/searchbar.module.css";

const SearchBar = ({ comp }) => {
    const router = useRouter();
  const [companyToSearch, setCompanySearch] = useState("");
  const changedSearch = (event) => {
    setCompanySearch(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setCompanySearch(searchTerm);
    // our api to fetch the search result
    console.log(searchTerm);
    router.push(`/${searchTerm}`);
  };

  function isValid(nameinDb,enteredName){
    enteredName =enteredName.toLowerCase();
    nameinDb =  nameinDb.toLowerCase();
    let m = enteredName.length
    let n = nameinDb.length;

    let allGood=0;
    let j=0;
    let i=0;
    if(enteredName[i]!=nameinDb[j]){
      if(m>2 && nameinDb.includes(enteredName) ){
        return 1;
      }
        return 0;   
    }
    j++;
    for(i=1;i<m;++i){
        if(allGood>=3){
            return 0;
        }
        if(enteredName[i]==nameinDb[j]){
            allGood=0;
            j++;
        }
        else{
            allGood++;
        }
    }
   
    return 1;
  }

  return (
    <div className={searchStyles.App}>
      <h1>Search</h1>

      <div className={searchStyles.searchcontainer}>
        <div className={searchStyles.searchInner}>
          <input type="text" value={companyToSearch} maxLength="15" onChange={changedSearch} />
          <button onClick={() => onSearch(companyToSearch)}> Search </button>
        </div>
        {/* implementing scroll view for this div required */}
        <div className={searchStyles.dropdown}>
          {comp
            .filter((item) => {
              const searchTerm = companyToSearch.toLowerCase();
              const fullName = item.Name.toLowerCase();

              return (
                searchTerm &&
                (fullName.startsWith(searchTerm)  ||
                isValid(fullName,searchTerm)) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.Name)}
                className={searchStyles.dropdownRow}
                key={item.Name}
              >
                {item.Name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
