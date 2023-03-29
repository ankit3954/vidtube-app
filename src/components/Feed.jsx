import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
// import { borderRight } from '@mui/system'


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
    }, [selectedCategory]);

   return ( 
   <Stack sx={{
      flexDirection:{sx:"column", md:"row"}
    }}>
      <Box sx={{
        height:{sx:"auto", md:"83vh"},
        borderRight:"1px solid #3d3d3d",
        px:{sx:0, md:2}
    }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography className='copyright' 
        variant='body2' 
        sx={{color:"#fff", mt:1.5}}
      >
        Copyright@Ankit_Karn
      </Typography>
      </Box>

      <Box p={2} sx={{
        height:"83vh",
        overflowY:"auto",
        flex:2
      }}>
        <Typography variant='h5' mb={2} fontWeight="bold" sx={{color:"white"}}>
          {selectedCategory} <span style={{color:"red"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
    }

export default Feed