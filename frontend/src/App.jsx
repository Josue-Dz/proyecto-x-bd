
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Authentication from './authentication/Authentication'

function App() {

  return (
    <div>
     <Routes>
        <Route path="/" element={true?<HomePage/>:<Authentication/>}>

        </Route>
     </Routes>
    </div>
  )
}

export default App
