import React, {Component} from 'react'

class Library extends Component { 
    constructor(){ 
        super()
        this.state = {
            lastAction: ''
        }
        this.readABook = this.readABook.bind(this); 
    }
    readABook(book){
        this.props.setNeeds([9, 3, 4, 5, 6, 7]); 
        this.setState({lastAction: `You read ${book}` })
    }
    render(){ 
        console.log('props', this.props); 
        console.log('state', this.state); 
        return(
            <div>
                <p>I'm at the library</p>
                <button onClick={()=> this.readABook('Harry Potter')}>Read Harry Potter</button>
                <button onClick={()=> this.readABook('The Shining')}>Read The Shining</button>
            </div>
        )
    }
}

export default Library