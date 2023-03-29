import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography} from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
// import { borderRight } from '@mui/system'


const SearchFeed = () => {

    const [videos3, setVideos3] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos3(data.items));
    }, [searchTerm]);

   return ( 
    <Box p={2} sx={{
        height:"83vh",
        overflowY:"auto",
        flex:2
      }}>
      <Typography variant='h5' mb={2} fontWeight="bold" sx={{color:"white", ml:{sm:"100px"}}}>
        Search Results for <span style={{color:"red"}}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" flex>
        <Box sx={{mr:{sm:"100px"}}}/>
        <Videos videos={videos3}/>
      </Box>
    </Box>
  )
    }

export default SearchFeed