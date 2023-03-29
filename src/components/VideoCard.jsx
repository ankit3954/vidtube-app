import React from 'react'
import {Link} from "react-router-dom"
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'


const VideoCard = ({videoDetails}) => {

    const {id:{videoId}, snippet} = videoDetails; //destructuring id

  return (
    <Card sx={{width:{ xs:"100%", sm:"358px", md:"250px"}, boxShadow:"none", borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} 
                sx={{width:{xs:"100%",sm:"358px", md:"300px"}, height:170}}
                alt={snippet?.title}    
            />
        </Link>

        <CardContent sx={{backgroundColor:"#1e1e1e", height:"70px"}}>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/video/${snippet.channelId}`: demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{color:"gray", fontSize:12, ml:"5px"}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard