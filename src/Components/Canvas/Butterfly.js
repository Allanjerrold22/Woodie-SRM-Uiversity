import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import tree from '../assets/treebg.jpg'
import srmlogo from '../assets/Srmlogo.png';

const Computers = ({ isMobile }) => {
  
  
  const computer = useGLTF("./Butterflymodel/scene.gltf");
  let mixer

  useEffect(()=>{
    if (computer.animations.length) {
        mixer = new THREE.AnimationMixer(computer.scene);
        computer.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }
  
  
  })

  useFrame((state, delta) => {
    mixer?.update(delta)
})

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-80, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4 : 6
        }
        position={isMobile ? [0, -5, -0.2] : [0, -5, -0.3]}
        rotation={[0, 0, -0.2]}
        
      />
    </mesh>
  );
};


const Butterfly = () => {



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div> 
      <div className={'text-container'} style={{position:'relative'}}>

      <img src={srmlogo} style={{width:42,height:42}}/>
      <p style={{position:'absolute',top:100,fontSize:20,fontFamily:'Helvetica',fontWeight:600,left:"25%",color:'#767676'}}>Biodiversity of SRM</p>
      </div>
    
    <Canvas style={{height:500}}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [26, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default Butterfly;