import React from 'react'
import { Typography, CardMedia, CardContent, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({channelDetails, marginTop, marginBottom}) => {

  return (
    <Box sx={{
        boxShadow:"none",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{xs:"286px" , md:"250px"},
        height:"250px",
        margin:"auto",
        marginTop:marginTop,
        marginBottom:marginBottom
    }}>
        <Link to={`/channel/${channelDetails?.id?.channelId}`}>
            <CardContent sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                textAlign:"center",
                color:"#fff"
            }}>
                <CardMedia 
                    image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                    alt={channelDetails?.snippet?.title}
                    sx={{
                        borderRadius:"50%",
                        mb:2,
                        border:"1px solid #e3e3e3",
                        height:"180px",
                        width:"180px"
                    }}   
                />
                <Typography variant='h6'>
                    {channelDetails?.snippet?.title}
                    <CheckCircle sx={{color:"gray", fontSize:14, ml:"5px"}}/>
                </Typography>
                {channelDetails?.statistics?.subscriberCount && (
                     <Typography>
                        {parseInt(channelDetails.statistics.subscriberCount).toLocaleString()} Subscribers
                     </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard