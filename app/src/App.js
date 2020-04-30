import React from 'react'
import styled from 'styled-components'

import ResponseComponent from './Components/ResponseComponent'

const MainApp = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`

function App() {
  return (
    <MainApp>
      <ResponseComponent />
    </MainApp>
  )
}

export default App
