import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'


/**
 * Base
 */

// Debug
const gui = new dat.GUI()


// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene()


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0x4f4fe4, 0.5)
scene.add(directionalLight)

const pointLightBottom = new THREE.PointLight(0x740091, 1)
pointLightBottom.position.set(0, -2, -1)
scene.add(pointLightBottom)

const pointLightTop = new THREE.PointLight(0xff9000, 1)
pointLightTop.position.set(0, 2, 0)
scene.add(pointLightTop)

const pointLightFront = new THREE.PointLight(0x00a419, 0.7)
pointLightFront.position.set(0, 0, 2)
scene.add(pointLightFront)

const pointLightRight = new THREE.PointLight(0x910000, 1)
pointLightRight.position.set(5, 0, 0.8)
scene.add(pointLightRight)

const pointLightLeft = new THREE.PointLight(0x910000, 1)
pointLightLeft.position.set(-5, 0, 0.8)
scene.add(pointLightLeft)


/**
 * Textures and Materials
 */
const materialText = new THREE.MeshStandardMaterial()
const textureLoader = new THREE.TextureLoader()

const matcapTexture8 = textureLoader.load('/textures/matcaps/8.png')
const material8 = new THREE.MeshMatcapMaterial()
material8.matcap = matcapTexture8
const matcapTexture5 = textureLoader.load('/textures/matcaps/5.png')
const material5 = new THREE.MeshMatcapMaterial()
material5.matcap = matcapTexture5
const matcapTexture4 = textureLoader.load('/textures/matcaps/4.png')
const material4 = new THREE.MeshMatcapMaterial()
material4.matcap = matcapTexture4
const matcapTexture3 = textureLoader.load('/textures/matcaps/3.png')
const material3 = new THREE.MeshMatcapMaterial()
material3.matcap = matcapTexture3


/**
 * Fonts
 */
const fontLoader = new THREE.FontLoader()
fontLoader.load(
  '/fonts/helvetiker_regular.typeface.json',
  (font) => {
    const textGeometry = new THREE.TextBufferGeometry(
      'Priyanshu Ranjan',
      {
        font: font,
        size: 0.9,
        height: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 4
      }
    )

    // Centering the Text
    textGeometry.center()

    // Text
    const text = new THREE.Mesh(textGeometry, materialText)
    scene.add(text)


  }
)


/**
 * Donuts, Knots and Dodecahedrons
 */
const donut = []
const knot = []
const dodecahedron = []

// Geometries
const donutGeometry = new THREE.TorusBufferGeometry(0.3, 0.2, 20, 45)
const knotGeometry = new THREE.TorusKnotGeometry(1, 0.4, 64, 8)
const dodecahedronGeometry = new THREE.DodecahedronBufferGeometry(10, 0)

for (let i = 0; i < 300; i++) {

  // Donut
  donut.push(new THREE.Mesh(donutGeometry, material8))

  // Position
  donut[i].position.x = (Math.random() - 0.5) * 50
  donut[i].position.y = (Math.random() - 0.5) * 50
  donut[i].position.z = (Math.random() - 0.5) * 50

  // Rotation
  donut[i].rotation.x = Math.random() * Math.PI
  donut[i].rotation.y = Math.random() * Math.PI

  // Scale
  const scaleDonut = Math.random() * 1.5
  donut[i].scale.set(scaleDonut, scaleDonut, scaleDonut)


  // Knot
  knot.push(new THREE.Mesh(knotGeometry, material5))

  // Position
  knot[i].position.x = (Math.random() - 0.5) * 50
  knot[i].position.y = (Math.random() - 0.5) * 50
  knot[i].position.z = (Math.random() - 0.5) * 50

  // Rotation
  knot[i].rotation.x = Math.random() * Math.PI
  knot[i].rotation.y = Math.random() * Math.PI

  // Scale
  const scaleKnot = Math.random() / 2
  knot[i].scale.set(scaleKnot, scaleKnot, scaleKnot)


  // Dodecahedron
  dodecahedron.push(new THREE.Mesh(dodecahedronGeometry, material8))

  // Position
  dodecahedron[i].position.x = (Math.random() - 0.5) * 50
  dodecahedron[i].position.y = (Math.random() - 0.5) * 50
  dodecahedron[i].position.z = (Math.random() - 0.5) * 50

  // Rotation
  dodecahedron[i].rotation.x = Math.random() * Math.PI
  dodecahedron[i].rotation.y = Math.random() * Math.PI

  // Scale
  const scaleDodecahedron = Math.random() / 14
  dodecahedron[i].scale.set(scaleDodecahedron, scaleDodecahedron, scaleDodecahedron)



  // Adding it to the Scene
  // if (
  //   ((donut[i].position.x > 5) || (donut[i].position.x < -5)) && ((donut[i].position.y > 0.5) || (donut[i].position.y < -0.5)) && ((donut[i].position.z > 0.5) || (donut[i].position.z < -0.5)) &&
  //   ((knot[i].position.x > 5) || (knot[i].position.x < -5)) && ((knot[i].position.y > 0.5) || (knot[i].position.y < -0.5)) && ((knot[i].position.z > 0.5) || (knot[i].position.z < -0.5)) &&
  //   ((dodecahedron[i].position.x > 5) || (dodecahedron[i].position.x < -5)) && ((dodecahedron[i].position.y > 0.5) || (dodecahedron[i].position.y < -0.5)) && ((dodecahedron[i].position.z > 0.5) || (dodecahedron[i].position.z < -0.5))) {

  //   scene.add(donut[i], knot[i], dodecahedron[i])
  // }
  scene.add(donut[i], knot[i], dodecahedron[i])
}


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = (clock.getElapsedTime()) / 4

  // Update controls
  controls.update()

  // Update Objects
  for (let i = 0; i < 300; i++) {
    if (i % 4 === 0) {
      donut[i].rotation.set(elapsedTime, elapsedTime, 0)
      knot[i].rotation.set(elapsedTime, elapsedTime, 0)
      dodecahedron[i].rotation.set(elapsedTime, elapsedTime, 0)
    }
    else if (i % 4 === 1) {
      donut[i].rotation.set(elapsedTime, 0, elapsedTime)
      knot[i].rotation.set(elapsedTime, 0, elapsedTime)
      dodecahedron[i].rotation.set(elapsedTime, 0, elapsedTime)
    }
    else if (i % 4 === 2) {
      donut[i].rotation.set(0, elapsedTime, elapsedTime)
      knot[i].rotation.set(0, elapsedTime, elapsedTime)
      dodecahedron[i].rotation.set(0, elapsedTime, elapsedTime)
    }

  }

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()