import React, {Component} from 'react'


class Beach extends Component { 
    constructor(){ 
        super()
        this.state = { 

        }
        this.swim = this.swim.bind(this); 
        this.tanning = this.tanning.bind(this); 
    }

    swim(){ 
        this.props.setNeeds([-5, -10, -3, 10, -2, 25]); 
    }

    tanning(){ 
        this.props.setNeeds([1, 4, 6, -20, 4, 8]); 
    }

    playvolleyball(){ 

    }


    // swim 
    // tanning
    // playvolleyball

    render(){ 
        return(
            <div>
                <p>I'm at the beach!</p>
                <button onClick={this.swim}>Go swimming</button>
                <button onClick={this.tanning}>Go tanning</button>
            </div>
            
        )
    }

}

export default Beach; 