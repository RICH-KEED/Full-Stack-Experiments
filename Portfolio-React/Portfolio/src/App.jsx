import './App.css'
import Achievement from './componenets/achievement'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'
import Header from './componenets/Header'
import Projects from './componenets/projects'
import Intro from './componenets/Intro'
import Educationtable from './componenets/education'

function App() {

  return (
    <>
      <Header />
      <Intro />
      <Educationtable />
      <Projects />
      <Achievement />
      <Contact />
      <Footer />
    </>
  )
}

export default App
