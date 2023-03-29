import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {fetchFromAPI} from "../utils/fetchFromAPI"
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {

  const [channelDetails2, setChannelDetails2] = useState(null);
  const [videos2, setVideos2] = useState();

  const {id} = useParams();
  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetails2(data.items[0]));
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos2(data?.items));
  }, [id])
  
  return (
    <Box minHeight="88vh">
      <Box >
        <div
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex:10,
            height:"170px"
        }}
        />
        <ChannelCard channelDetails={channelDetails2} marginTop="-75px" marginBottom="50px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px"}}}/>
        <Videos videos={videos2}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail