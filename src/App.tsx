import Layout from './Layout/Routes'
import { Route, Routes } from 'react-router-dom'

//Test Code used for JEST !!! DO NOT DELETE !!!
export function timesThree(numberToMultiply: number) {
  return numberToMultiply * 3
}

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
  )
}

export default App
