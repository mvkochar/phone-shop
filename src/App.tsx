import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


const App = () => {

  const [totalPrice, setTotalPrice] = React.useState(0)
  
  const handleTotalPrice = (productPrice: number) => {
    setTotalPrice ((prevState) => {
        return (
          prevState + productPrice
        )
    } )
  }

  return (
    <>
    <Header totalPrice={totalPrice}/>
    <Main handleTotalPrice={handleTotalPrice}/>
    <Footer/>
  </>
  )
}

export default App
