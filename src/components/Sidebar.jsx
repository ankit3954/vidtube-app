import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({selectedCategory, setSelectedCategory}) =>(
    <Stack 
        direction="row"
        sx={{
            overflowY:"auto",
            flexDirection:{md:"column"},
            height:{sx:"auto", md:"95%"}
        }}>

            {categories.map((category) => (
                <button className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        backgroundColor:category.name === selectedCategory && "red",
                        color:"white"
                    }}
                    key={category.name}
                >
                    <span style={{
                        color:category.name === selectedCategory ? "white" : "red",
                        marginRight:"10px"
                    }}>
                        {category.icon}
                    </span>
                    <span style={{
                        opacity:category.name === selectedCategory? 1 : 0.7
                    }}>
                        {category.name}
                    </span>
                </button>
            ))}

    </Stack>
  )

export default Sidebar