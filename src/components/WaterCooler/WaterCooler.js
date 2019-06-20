import React from 'react'

class WaterCooler extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = {
            lastAction: ''
        }
        this.getWater = this.getWater.bind(this); 
        this.emote = this.emote.bind(this); 
    }

    getWater(){ 
        this.setState({lastAction: 'you got some water. mmm! hydration is great for your health'}); 
        this.props.increase('thirst', 20); 

    }
    chatWith(name, topic){ 
        //stretch goal 1 --> change relationship (initally just +)
            //stretch goal 2 --> change relationship as a % increase of existing relationship 
                //stretch goal 3 --> change relationship based on similarity of interests and current relationship scores
        
        this.setState({lastAction: `You chatted with ${name} about ${topic}`})
        this.props.increaseRelationship(name, 5); 
        this.props.setNeeds([-4, -2, -2, +10, -1, 0])

    }
    complain(topic){ 

    }
    emote(emoteArr, expression, target='', adverb=''){
        this.setState({lastAction: `You ${expression}ed ${adverb ? `${adverb}`: ''} ${ target ? `at ${target}` : ''}`})
        this.props.setNeeds(emoteArr)
       
    }

    render(){ 
        console.log(this.state); 
        return (
            <div>
                <button onClick={() => this.emote([0, -2, -5, 10, -5, -5], 'smile', 'Xena', 'shyly' )}>smile shyly at xena</button>
                <button onClick={this.getWater}>get water</button>
                <button onClick={() => this.chatWith('Steve', 'Big Game')}>chat with steve about the big game</button>
                <button onClick={() => this.chatWith('Suzy', 'GOT Finale')}>chat with suzy about the GOT finale</button>
                <p>{this.state.lastAction}</p>
            </div>
        )
    }
}

export default WaterCooler; 