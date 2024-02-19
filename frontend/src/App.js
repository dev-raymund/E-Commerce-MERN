import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'

const App = () => {
  return (
    <div className="main">
      <Header />
      <main className="py-3">
          <Container>
            <Home />
          </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App