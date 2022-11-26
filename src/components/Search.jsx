// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
const Search = ({ filterSearch, searchTerm }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    filterSearch(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchText} type="text" onChange={handleSearchInput} />
    </>
  );
};

export default Search;
