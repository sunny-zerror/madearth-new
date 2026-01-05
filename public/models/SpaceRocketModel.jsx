"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

export default function SpaceRocketModel(props) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF("/models/SpaceRocket.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!group.current) return;

    const mats = [];

    group.current.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        const materialArray = Array.isArray(obj.material)
          ? obj.material
          : [obj.material];

        materialArray.forEach((mat) => {
          mat.transparent = true;
          mat.opacity = 0;
          mats.push(mat);
        });
      }
    });

    gsap.to(mats, {
      opacity: 1,
      duration: 1,
      ease: "expo.out",
      delay:4,
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_Stars" position={[-0.188, -1.088, 0.074]}>
          <skinnedMesh
            name="Stars"
            geometry={nodes.Stars.geometry}
            material={materials.Stars}
            skeleton={nodes.Stars.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>

        <group name="Armature_Rocket" position={[0, 0, 0.393]}>
          <skinnedMesh
            name="Rocket"
            geometry={nodes.Rocket.geometry}
            material={materials.M_Rocket}
            skeleton={nodes.Rocket.skeleton}
          />
          <skinnedMesh
            name="RocketWindows"
            geometry={nodes.RocketWindows.geometry}
            material={materials.M_RocketWindow}
            skeleton={nodes.RocketWindows.skeleton}
          />
          <primitive object={nodes.Root_1} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/SpaceRocket.glb");
