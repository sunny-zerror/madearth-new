"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

export default function PlanetModel(props) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(
    "/models/PlanetScene.glb"
  );

  const { actions, names } = useAnimations(animations, group);
  const EXCLUDE = [
    "Armature_ButtonAction.002",
    "Armature_ArrowAction.001",
    "Planet_Animations_R",
    "Planet_Animations_L",
  ];
  useEffect(() => {
    if (!actions || !names) return;

    names.forEach((name) => {
      if (EXCLUDE.includes(name)) return;

      actions[name]?.play();
    });
  }, [actions, names]);


  useEffect(() => {
    if (!group.current) return;

    var tl = gsap.timeline({
      delay: 0.7,
    });
    
    tl.to(group.current.position, {
      y: 0,
      duration: 1.5,
      ease: "expo.out",
    });

    tl.to(group.current.rotation, {
      x: 0,
      duration: 1.5,
      ease: "expo.out",
    }, "<");
    
    tl.to(group.current.rotation, {
      y: 0,
      duration: 5,
      ease: "expo.out",
    }, "<");

    tl.to(group.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 2,
      ease: "expo.inOut",
    },"<+=0.5");

  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_Planet_01">
          <skinnedMesh
            geometry={nodes.PlanetSurface_R.geometry}
            material={materials.M_Earth}
            skeleton={nodes.PlanetSurface_R.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Roads_R.geometry}
            material={materials.M_Roads}
            skeleton={nodes.Roads_R.skeleton}
          />
          <skinnedMesh
            geometry={nodes.StaticBuildings_R.geometry}
            material={materials.M_Buildings}
            skeleton={nodes.StaticBuildings_R.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Trees_R.geometry}
            material={materials.M_Trees}
            skeleton={nodes.Trees_R.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>

        <group name="Armature_Planet_02">
          <skinnedMesh
            geometry={nodes.PlanetSurface_L.geometry}
            material={materials.M_Earth}
            skeleton={nodes.PlanetSurface_L.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Roads_L.geometry}
            material={materials.M_Roads}
            skeleton={nodes.Roads_L.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Rocket_Holder_L.geometry}
            material={materials.M_MechanicalArm}
            skeleton={nodes.Rocket_Holder_L.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Rocket_L.geometry}
            material={materials.M_Rocket}
            skeleton={nodes.Rocket_L.skeleton}
          />
          <skinnedMesh
            geometry={nodes.RocketWindows_L.geometry}
            material={materials.M_RocketWindow}
            skeleton={nodes.RocketWindows_L.skeleton}
          />
          <skinnedMesh
            geometry={nodes.StaticBuildings_L.geometry}
            material={materials.M_Buildings}
            skeleton={nodes.StaticBuildings_L.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Trees_L.geometry}
            material={materials.M_Trees}
            skeleton={nodes.Trees_L.skeleton}
          />
          <primitive object={nodes.Root_02} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/PlanetScene.glb");
