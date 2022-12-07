import React, { useState } from 'react'
import Circle from './components/organisms/Circle'
import Square from './components/organisms/Square'
import Triangle from './components/organisms/Triangle'

function App() {
  const [triangleSize, setTriangleSize] = useState(100)
  const [triangleColor, setTriangleColor] = useState('#000000')
  const [circleColor, setCircleColor] = useState('#000000')
  const [circleSize, setCircleSize] = useState(100)
  const [squareColor, setSquareColor] = useState('#000000')
  const [squareSize, setSquareSize] = useState(100)

  return (
    <div className="App">
      <Triangle
        triangleSize={triangleSize}
        triangleColor={triangleColor}
        setTriangleColor={setTriangleColor}
        setTriangleSize={setTriangleSize}
      />
      <Circle
        circleColor={circleColor}
        circleSize={circleSize}
        setCircleColor={setCircleColor}
        setCircleSize={setCircleSize}
      />
      <Square
        squareColor={squareColor}
        squareSize={squareSize}
        setSquareColor={setSquareColor}
        setSquareSize={setSquareSize}
      />
    </div>
  )
}

export default App
