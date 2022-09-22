import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FPV } from './components/FPV';
import { Ground } from './components/ground';
import { Player } from './components/Player';
import { Cubes } from './components/Cubes';


function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <FPV />
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>
      <div className='absolute cursor centerd'>+</div>
    </>
  );
}

export default App;
