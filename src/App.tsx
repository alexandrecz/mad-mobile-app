
import { Outlet } from 'react-router'
import { AppStyle } from './App.styled'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main.styled'

function App() {

  return (
    <>
      <AppStyle />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default App
