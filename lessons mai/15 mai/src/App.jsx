import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
      <Header/>
      <main>
        <section className='about'>About</section>
        <section className='shop'>Shop</section>
      </main>
      <Footer/>
    </>
  )
}

export default App