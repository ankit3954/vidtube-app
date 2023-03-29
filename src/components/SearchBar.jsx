import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if(searchTerm)
    navigate(`/search/${searchTerm}`);

    event.preventDefault();
  };
  return (
    <Paper component="form"
           onSubmit={handleSubmit}
           sx={{
            pl:2,
            borderRadius:20,
            border:"1px solid #e3e3e3",
            mr:{sm:5}
           }}>
        <input 
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => {setSearchTerm(event.target.value)}}>
        </input>
        <IconButton type="submit" sx={{p:"10px", color:"red"}}>
           <Search/>    
        </IconButton>
    </Paper>
  )
}

export default SearchBar;