import React from 'react'
import './App.scss'
import Windows from './components/Windows'
import { DemoContextProvider } from './contexts/DemoContext'
import demoContextDefaultValues from './contexts/DefaultValues'

function App() {
  return (
  	<DemoContextProvider value={demoContextDefaultValues}>
    	<Windows/>
    </DemoContextProvider>
  )
}

export default App
