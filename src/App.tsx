import './App.css'
import './styles/fonts.css'
import './styles/variables.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer'

function App() {
  const handleRedirectToSeashell = () => {
    window.location.href = '/seashell/index.html';
  };

  return (
    <div className="layout">
      <Header />
      <main className="main">
        <SearchBar />
        <button 
          onClick={handleRedirectToSeashell}
          style={{
            margin: '2rem auto',
            padding: '1rem 2rem',
            backgroundColor: '#fca44b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Visit Seashell Holidays
        </button>
      </main>
      <Footer />
    </div>
  )
}

export default App
