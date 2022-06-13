import React,{useEffect,useState} from 'react'
import { Box,Stack,Typography,Button,TextField} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'



const SearchExercises = () => {
const [search, setSearch] = useState('')
const [exercises, setexErcises] = useState([])


const url ='https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
const handleSearch =async()=>{
      if(search){
        const exercisesData=await fetchData(url,exerciseOptions);
      
        const SearchExercises =exercisesData.filter(
          (exercises)=>exercises.name.toLowerCase().includes(search)
          || exercises.target.toLowerCase().includes(search)
          || exercises.equipment.toLowerCase().includes(search)
          || exercises.bodyPart.toLowerCase().includes(search)
        );

        setSearch('')
        setexErcises(SearchExercises)
      }
}

  return (
  <Stack 
      alignItems={'center'}
      justifyContent={'center'}
      mt="37px"
      p="20px"
     >
      <Typography 
          fontWeight={700}
          sx={{
            fontSize:{lg:"44px",xs:'30px'}
          }}
          mb='50px'
          textAlign={'center'}
      
      >
        Awsome Exercises You <br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
          sx={{
            input:
            {
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
            },
            width:{lg:'800px',xs:'350px'},
            backgroundColor:'white',
            borderRadius:'40px'
          }}

          hidden='76px'
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder ="Search Exercises"
          type="text"
        />

        <Button 
        className='search-btn'
        sx={{
        bgcolor:'#ff2625',
         color:'#fff',
         textTransform:'none',
         width:{lg:'175px',xs:'80px'},
         fontSize:{lg:'20px',xs:'14px'},
         height:"56px",
         position:'absolute',
         right:'0px'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

   </Stack>
  )
}

export default SearchExercises