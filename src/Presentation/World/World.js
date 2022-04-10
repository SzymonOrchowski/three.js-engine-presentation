import * as THREE from 'three'
import Presentation from "../Presentation"
import Environment from './Environment'
import Engine from './Engine.js'

export default class World
{
    constructor()
    {
        this.presentation = new Presentation()
        this.scene = this.presentation.scene
        this.resources = this.presentation.resources

        this.environment = new Environment()

        this.animationSpeed = 0.003
        this.alertsArray = this.presentation.parts

        // const axesHelper = new THREE.AxesHelper()
        // this.scene.add(axesHelper)

        this.resources.on('ready', () =>
        {
            this.engine = new Engine()
            this.presentation.outline.selectedObjects.push(this.engine.model)
            this.engine.model.position.x = 0
            this.engine.model.position.y = 2
            this.engine.model.position.z = 0
            this.engine.model.children.forEach(part => {
                part.meterial = new THREE.MeshStandardMaterial()
                part.material.color.r = 0.2
                part.material.color.g = 0.2
                part.material.color.b = 0.3
                part.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0,1,0))
                this.alertsArray.forEach(alertName => {
                    if (part.name === alertName)
                    {
                        part.material.color.r = 0.4
                        part.material.color.g = 0.0
                        part.material.color.b = 0.0
                    }
                })
               
            })
        })

    }

    update()
    {
        if(this.engine)
        {
            this.engine.model.rotation.y += this.animationSpeed
        }
    }
}

// Tee_Joint
// Pipe
// MountRR
// EngineFront
// FrontCompressor
// Elbow_Joint002
// MountRL
// Elbow_Joint003
// Elbow_Joint004
// HeatExtractor
// EngineBack001
// Front_Bar
// BarL
// Engine
// OutputBack
// Elbow_Joint007
// MountFR
// Elbow_Joint005
// CoolerBack
// BarR
// EngineBack
// Elbow_Joint008
// Electronics
// Elbow_Joint006
// Elbow_Joint001
// CoolerFront
// Rear_Bar
// MountFL