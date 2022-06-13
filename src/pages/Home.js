import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercises from '../components/Exercises'
import HeroBaner from '../components/HeroBaner'
import SearchExercises from '../components/SearchExercises'

function Home() {

  const [exercises, setErcises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
  <Box>
    <HeroBaner />
    <SearchExercises 
        setErcises={setErcises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
    />
    <Exercises 
        setErcises={setErcises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
    />

  </Box>
  )
}

export default Home