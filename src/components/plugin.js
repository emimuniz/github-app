import React, { Component } from 'react'
import { render } from '@testing-library/react'


class Plugin extends Component {
    constructor(){
        super()
        
    }

handleClick(){
    console.log('clicou no botão')
    this.myInput.focus()
}

render(){
    return(
        <div>
            <input type="text" ref={(node) => (this.myInput = node)}/>
            <button onClick={this.handleClick}>Focus</button>
        </div>
    )

}
}