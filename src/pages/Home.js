import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercises from '../components/Exercises'
import HeroBaner from '../components/HeroBaner'
import SearchExercises from '../components/SearchExercises'

function Home() {
  return (
  <Box>
    <HeroBaner />
    <SearchExercises/>
    <Exercises/>
  </Box>
  )
}

export default Home