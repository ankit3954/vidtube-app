import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams,Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'


const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState("null");
  const [video4, setVideo4] = useState();

  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]) )

    fetchFromAPI(`search?part=snnipet&relatedtoVideoId=${id}`)
    .then((data) => setVideo4(data.items))
  }, [id])

  if(!videoDetail?.snippet)
    return "Loading...";


  const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;
  return (
    <Box minHeight="90vh">
      <Stack direction={{xs:"column", md:"row"}}>
        <Box flex={1}>
         <Box sx={{position:"sticky", top:"86px", width:"100%"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
           <Typography color="#fff" fontWeight="bold" variant="h5" p={2}>
            {title}
           </Typography>
           <Stack direction="row" color="#fff" justifyContent="space-between" py={1} px={2}>
             <Link to={`/channel/${channelId}`}>
               <Typography variant={{sm:"subtitle1", md:"h6"}} color="#fff">
                 {channelTitle}
                 <CheckCircle sx={{fontSize:'13px', color:'gray', ml:"5px"}}/>
               </Typography>
             </Link>
            <Stack direction="row" gap="20px" alignItems="center">
             <Typography variant='body2' sx={{opacity:"0.7"}}>
                {parseInt(viewCount).toLocaleString()} views
             </Typography>
             <Typography variant='body2' sx={{opacity:"0.7"}}>
                {parseInt(likeCount).toLocaleString()} likes
             </Typography>
            </Stack>
           </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">
          <Videos videos={video4} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail