import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((itemm) => {
    return <Card key={itemm.id} item={itemm} />
  })

  return (
    <>
      <Navbar />
      <div className="cards">{cards}</div>
      {/* <Hero /> */}
    </>
  )
}

export default App
