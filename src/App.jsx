import './App.css'
import MainContainer from './components/MainContainer';
import Container from '@mui/material/Container';

function App() {

  return (
    <div style={{with:"100vw",justifyContent:"center",display:"flex" }}>
      <Container maxWidth="xl"  >
      <MainContainer/>
      </Container>
    </div>
  )
}

export default App
