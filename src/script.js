import './style.css'
import Presentation from './Presentation/Presentation'

const presentation = new Presentation(document.querySelector('canvas.webgl'))

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()
// const bgColor = new THREE.Color('ffffff')
// scene.background = bgColor

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// /**
//  * Lights
//  */
//  const mainLight = new THREE.AmbientLight('#ffffff', 0.4)
//  scene.add(mainLight)
//  const directionalLight = new THREE.DirectionalLight('#ffffff', 0.6)
//  directionalLight.position.set(-1, 6, 4)
//  scene.add(directionalLight)

 
// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(3, 4, 11)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     antialias: true
// })
// renderer.setSize(sizes.width, sizes.height)

// const barChart = new THREE.Group()

// const barGeometry = new THREE.BoxGeometry(1,1,1)
// const barMaterial = new THREE.MeshLambertMaterial({color: 'green'})

// const barMesh1 = new THREE.Mesh(barGeometry, barMaterial)
// const barMesh2 = new THREE.Mesh(barGeometry, barMaterial)
// const barMesh3 = new THREE.Mesh(barGeometry, barMaterial)
// const barMesh4 = new THREE.Mesh(barGeometry, barMaterial)
// const barMesh5 = new THREE.Mesh(barGeometry, barMaterial)
// const barMesh6 = new THREE.Mesh(barGeometry, barMaterial)
// barChart.add(barMesh1)
// barChart.add(barMesh2)
// barChart.add(barMesh3)
// barChart.add(barMesh4)
// barChart.add(barMesh5)
// barChart.add(barMesh6)

// barMesh2.position.x = 1.5
// barMesh3.position.x = 3
// barMesh4.position.x = 4.5
// barMesh5.position.x = 6
// barMesh6.position.x = 7.5

// barMesh1.scale.y = 0.001
// barMesh2.scale.y = 0.001
// barMesh3.scale.y = 0.001
// barMesh4.scale.y = 0.001
// barMesh5.scale.y = 0.001
// barMesh6.scale.y = 0.001

// scene.add(barChart)
// barChart.position.x = -3.9
// barChart.position.y = -3


// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// const tick = () =>
// {
//     if (barMesh1.scale.y < 6) {
//         barMesh1.scale.y += 0.01 * 6
//         barMesh1.position.y +=0.005 * 6
//     }
//     if (barMesh2.scale.y < 5) {
//         barMesh2.scale.y += 0.01 * 5
//         barMesh2.position.y +=0.005 * 5
//     }
//     if (barMesh3.scale.y < 4) {
//         barMesh3.scale.y += 0.01 * 4
//         barMesh3.position.y += 0.005 * 4
//     }
//     if (barMesh4.scale.y < 3) {
//         barMesh4.scale.y += 0.01 * 3
//         barMesh4.position.y +=0.005 * 3
//     }
//     if (barMesh5.scale.y < 2) {
//         barMesh5.scale.y += 0.01 * 2
//         barMesh5.position.y +=0.005 * 2
//     }
//     if (barMesh6.scale.y < 1) {
//         barMesh6.scale.y += 0.01 * 1
//         barMesh6.position.y +=0.005 * 1
//     }
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime

//     controls.update()

//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

// tick()
