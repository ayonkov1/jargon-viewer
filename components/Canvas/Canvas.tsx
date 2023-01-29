import { useEffect, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import { StyledBox } from './Canvas.styled'

const Canvas = () => {
  useEffect(() => {
    const scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(100))

    const light = new THREE.AmbientLight(0x404040)
    scene.add(light)

    const camera = new THREE.PerspectiveCamera(
      1000,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 250

    const renderer = new THREE.WebGLRenderer()
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setSize(1000, 700)
    document.body.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.25,
      roughness: 0.1,
      opacity: 1.0,
      transparent: false,
      transmission: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.25,
    })

    const loader = new STLLoader()
    loader.load(
      'https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl',
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log(error)
      }
    )

    const stats = Stats()
    document.body.appendChild(stats.dom)

    function animate() {
      requestAnimationFrame(animate)

      controls.update()

      render()

      stats.update()
    }

    function render() {
      renderer.render(scene, camera)
    }

    animate()
  })
  return <StyledBox></StyledBox>
}

export default Canvas
