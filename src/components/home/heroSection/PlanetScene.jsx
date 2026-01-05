"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import PlanetModel from "../../../../public/models/PlanetModel";
import SpaceRocketModel from "../../../../public/models/SpaceRocketModel";

export default function PlanetScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 50], fov: 45 }}
            gl={{
                antialias: true,
                outputColorSpace: THREE.SRGBColorSpace,
            }}
        >
            <PlanetModel position={[0, -30, 0]} scale={.4} rotation={[-3, -3, 4.7]} />
            <ambientLight intensity={1} />
            <SpaceRocketModel position={[0, -50, 50]} />
            <pointLight position={[0, 0, 0]} />

            <OrbitControls
                // enableDamping
                enableZoom={false}
                autoRotate={true}
            />

            <Environment preset="night" environmentIntensity={0.5} />
        </Canvas>
    );
}
