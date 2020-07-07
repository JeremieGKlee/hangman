import React, { Component } from 'react'

import { Letter } from './Letter'

const words =
[
    "CHAMPIGNON",
    "FEUILLES",
    "ARBRE",
    "MER",
    "LAC",
    "INSECTE",
    "POISSON",
]

class Word extends Component
{
    state = {
        word: words[(Math.floor(Math.random() * words.length))],
        letters: []
    }
    generateWord = () =>{
        
        const { word, letters} = this.state
        console.log(word)
        for(let i = 0; i < word.length; i++){
            letters.push(
                <Letter key={ i } letter={ word.charAt(i) }/>
            )
        }
        this.setState({
            letters: letters
        })
        return this.state.letters
    }
    componentDidMount(){
        window.addEventListener('keyup', (e)=> {
            console.log(e.key.toUpperCase())
        })
        this.generateWord()
    }
    render(){
        return(
            <div>
                { this.state.letters }
            </div>
        )
    }
}

export default Word