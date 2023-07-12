import React, {useState} from 'react';
import { extend } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import * as THREE from 'three';
import daruma from '../public/DarumadropOne_Regular.json'

extend({ TextGeometry });

export default function Name(props) {
    const [active, setActive] = useState(false);
    const font = new FontLoader().parse(daruma);
    const { scale } = useSpring({ scale: active ? 1.2 : 1 });

    return (
        <animated.mesh scale={scale} position={[-1, 1, 0.02]} 
              rotation={[Math.PI/6,0,0]} 
              >
            <textGeometry args={['philena', {font, size: .5, height: 0.2}]}/>
            <meshPhysicalMaterial attach='material' roughness={0} clearcoat={1} color={new THREE.Color("#e7c6ff")}/>
        </animated.mesh>
    )
}