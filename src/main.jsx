import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Box, ChakraProvider } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box className='App'>
        <App />
      </Box>
    </BrowserRouter>
  </ChakraProvider>
)
