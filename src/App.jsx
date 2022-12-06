import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ErrorPage from '../public/pages/ErrorPage'
import Home from '../public/pages/Home'
import Users from '../public/pages/Users'
import SingleUser from '../public/pages/SingleUser'
import MainLayout from '../public/pages/MainLayout'
function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:uid' element={<SingleUser/>}/>
          <Route path='*' element={<ErrorPage/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
