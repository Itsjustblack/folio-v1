// // components/Scene.tsx
// "use client";

// import { CameraControls, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { useControls } from "leva"; // 1. Import Leva

// export function Model(props) {
// 	const { nodes, materials } = useGLTF(
// 		"/shelf.gltf/steel_frame_shelves_01_1k.gltf",
// 	);

// 	return (
// 		<group
// 			{...props}
// 			dispose={null}
// 		>
// 			<mesh
// 				geometry={nodes.steel_frame_shelves_01.geometry}
// 				material={materials.steel_frame_shelves_01}
// 			/>
// 		</group>
// 	);
// }

// useGLTF.preload("/shelf.gltf/steel_frame_shelves_01_1k.gltf");

// export default function Scene() {
// 	// 2. Define your Leva controls
// 	// You can adjust the min, max, and step values to fit your needs
// 	const {
// 		cameraX,
// 		cameraY,
// 		cameraZ,
// 		fov,
// 		lightX,
// 		lightY,
// 		lightZ,
// 		ambientIntensity,
// 	} = useControls({
// 		cameraX: { value: 0, min: -10, max: 10, step: 0.1 },
// 		cameraY: { value: 1, min: -10, max: 10, step: 0.1 },
// 		cameraZ: { value: 4, min: 0, max: 20, step: 0.1 },
// 		fov: { value: 50, min: 10, max: 120, step: 1 },
// 		lightX: { value: 3, min: -10, max: 10, step: 0.1 },
// 		lightY: { value: 3, min: -10, max: 10, step: 0.1 },
// 		lightZ: { value: 3, min: -10, max: 10, step: 0.1 },
// 		ambientIntensity: { value: 0.5, min: 0, max: 2, step: 0.1 },
// 	});

// 	return (
// 		<div className="h-150 w-md mx-auto">
// 			{/* 3. Plug the Leva variables into your Canvas and lights */}
// 			<Canvas camera={{ position: [cameraX, cameraY, cameraZ], fov: fov }}>
// 				<ambientLight intensity={ambientIntensity} />
// 				<directionalLight position={[lightX, lightY, lightZ]} />

// 				{/* Suspense is required for useGLTF! */}
// 				<Suspense fallback={null}>
// 					<Model />
// 				</Suspense>

// 				{/* Note: Since CameraControls takes over the camera logic,
// 				  if the sliders feel "sticky" when fighting your mouse movements,
// 				  use your mouse to find the angle, copy the coordinates,
// 				  and then hardcode them!
// 				*/}
// 				<CameraControls makeDefault />
// 			</Canvas>
// 		</div>
// 	);
// }
