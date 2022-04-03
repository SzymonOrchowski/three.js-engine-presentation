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

        this.resources.on('ready', () =>
        {
            this.engine = new Engine()      
        })
    }

    update()
    {
        
    }
}