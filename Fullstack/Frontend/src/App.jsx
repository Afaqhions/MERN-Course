import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Ui from '../Pages/Ui'
import './App.css'
import AddStudent from '../Pages/AddStudent'
import DeleteStudent from '../Pages/DeleteStudent'
import UpdateStudent from '../Pages/UpdateStudent'

function App() {

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Routes>
      {/* Pages */}
      <Route path='/' element=  {<Ui />}></Route>
      <Route path='/add-student' element=  {<AddStudent />}></Route>
      <Route path='/delete-student' element={<DeleteStudent />}></Route>
      <Route path='/edit-student' element={<UpdateStudent />}></Route>
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
