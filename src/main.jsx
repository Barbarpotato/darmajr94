import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <div className='App'>
        <App />
      </div>
    </BrowserRouter>
  </ChakraProvider>
)
