import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercises from '../components/Exercises'
import HeroBaner from '../components/HeroBaner'
import SearchExercises from '../components/SearchExercises'

function Home() {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  // console.log(exercises)
  return (
  <Box>
    <HeroBaner />
    <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart} />
    <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises}
    />

  </Box>
  )
}

export default Home