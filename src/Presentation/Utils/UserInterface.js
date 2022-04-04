import EventEmitter from "./EventEmitter";

export default class UserInterface extends EventEmitter
{
    constructor()
    {
        super()
        
        this.createOptions()
        // this.createGitHubLink()
    }

    createOptions()
    {
        const optionsContainer = document.createElement("div")
        optionsContainer.setAttribute('id', 'options-container')

        const changeAnimationState = document.createElement("BUTTON")
        changeAnimationState.innerHTML = 'Stop the animation.'
        changeAnimationState.setAttribute('id', 'animationState-button')
        changeAnimationState.setAttribute('class', 'options-button')
        changeAnimationState.onclick = () => { this.trigger('changeAnimationState')}
        optionsContainer.appendChild(changeAnimationState)
        
        document.body.appendChild(optionsContainer)
    }

    createGitHubLink()
    {
        const gitHubButton = document.createElement('button')
        gitHubButton.setAttribute('id', 'gitHub-button')
        gitHubButton.onclick = () => {window.open('https://github.com/SzymonOrchowski/three.js-charts-presentation')}
        gitHubButton.innerHTML = '<img src="img/GithubIcon.png" id="gitHub-img"></img>'
        document.body.appendChild(gitHubButton)
    }
}