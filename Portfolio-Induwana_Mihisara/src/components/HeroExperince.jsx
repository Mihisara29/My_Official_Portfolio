import { Canvas } from '@react-three/fiber'
import React from 'react'

const HeroExperince = () => {
  return (
    <Canvas>
       <ambientLight />
       <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ff28d5"}/>
       <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"}/>

    </Canvas>
  )
}

export default HeroExperince