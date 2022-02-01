import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { openSide, openModal } = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSide}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
