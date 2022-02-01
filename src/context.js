import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSide = () => {
    setIsSideOpen(true)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeSide = () => {
    setIsSideOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSideOpen,
        isModalOpen,
        closeSide,
        closeModal,
        openSide,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
