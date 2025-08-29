import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Ui from './Pages/ui'

function App() {

  return (
    <div>
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}
      <Ui />
      {/* NavBar */}
      <Footer />
    </div>
  )
}

export default App
