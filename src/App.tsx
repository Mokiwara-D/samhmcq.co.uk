import './App.css'
import './styles/fonts.css'
import './styles/variables.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <SearchBar />
      </main>
      <Footer />
    </div>
  )
}

export default App
