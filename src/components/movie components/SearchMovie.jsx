import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import './SearchMovie.css'
// import { FaSearch } from 'react-icons/fa';

const SearchMovie = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    if (!inputValue) {
      return { options: [] };
    }

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d46a33fcafb20ba29d5ff621ff96ac5d&query=${inputValue}`);
    const data = await response.json();

    return {
      options: data.results.map((movie) => ({
        value: movie.id,
        label: movie.title,
      })),
    };
    
  };

  const handleChange = (selectedOption) => {
    setSearch(selectedOption);
    onSearchChange(selectedOption);
  };
  

  return (
    <div className='movie-search'>
      <AsyncPaginate
        value={search}
        loadOptions={loadOptions}
        onChange={handleChange}
        debounceTimeout={600}
        placeholder="Search for a movie..."
        classNamePrefix="react-select" 
      />
      {/* {console.log('hi')}
      {console.log(search)} */}
    </div>
  );
};

export default SearchMovie;
