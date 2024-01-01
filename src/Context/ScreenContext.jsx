import React, { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'

export const Screen = createContext()
const ScreenContext = ({children}) => {
 const isMobile = useMediaQuery({
    query: '(max-width: 1279px)'
  })
  return (
    <Screen.Provider value={{isMobile}}>
        {children}
    </Screen.Provider>
  )
}

export default ScreenContext