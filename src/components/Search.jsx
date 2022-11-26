import { useState } from 'react';
import { Divider, Input } from 'antd';

const Search = ({ filterSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    filterSearch(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>
        Search
        <Input
          placeholder="Search query.."
          value={searchText}
          type="text"
          onChange={handleSearchInput}
        />
      </label>
    </>
  );
};

export default Search;
