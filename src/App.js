import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Box } from '@mui/material'
import ExerciseDetail from './components/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{ width: { x1: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />

    </Box>
  );
}

export default App;
