import { Fragment } from 'react';
import Index from './pages/index'
import Labs from './pages/labs'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/darmajr94/" element={<Index />} />
        <Route path="/darmajr94/labs" element={<Labs />} />
      </Routes>
    </Fragment>
  )
}

export default App
