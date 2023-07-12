"use client"; // This is a client component

import React from 'react'
import { Suspense } from "react";
import Keyboard from './Keyboard';
export default function Background() {
  return (
    <>
        <ambientLight intensity={0.9} />
        <pointLight intensity={0.9} position={[0,0, 0]} castShadow />
        <Suspense fallback={null}>
            <Keyboard/>
        </Suspense>
    </>
  );
}