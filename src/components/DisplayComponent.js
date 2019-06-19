import React from 'react'
import WaterCooler from './WaterCooler'

//should take in individual components and decide what to show based on the passed in "place"
//so bring in the individualized places 
    //they can have components they share, but can also be individualized 

class DisplayComponent extends React.Component { 
    constructor(props){ 
        super(props); 
        this.state = {             
            placeComponent: null
        }
    }
    render(){ 
        console.log(this.props); 
        console.log(this.state); 
        return ( 
            <div className={`${this.props.place}`}>
                <img src={`${this.props.place}.jpg`}/>
                <p>{this.props.place}</p>
                {this.props.place === 'water-cooler' ? 
                <WaterCooler setValences={this.props.setValences} increase={this.props.increase}/>
                : null}

            </div>
        )
    }
}

export default DisplayComponent; 


//yoga studio 
    //mediatate
    //practice yoga
    
//water cooler 
    //get water 
    //chat with steve about the game 
    //chat with suzy about the got finale 
    //smile shyly at xena
    //complain about boss 
    //complain about workload 

//park 
    //watch the dogs
    //feed the ducks 
    //sit on a bench 
    //smell the flowers
    //walk around the pond 
    //yell at children 
    //buy a hot dog

//school 
    //go to class 
    //speak to the principal 
    //teach a class
    //visit the library 
    //go to the field 

//business park 
    //go to work at your office 
    //go to work at the sandwich shop 
    //pick up a sandwhich from the sandwich shop 
    //go to work at the clothing store
    //shop at the clothing store 
    //patronize business at an office 

//downtown 
    //go to coffee shop 
    //go to bar 
    //go to the discotech 
    //yell at sinners
