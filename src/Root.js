import React from 'react'
import {NavButton} from './components'
import {DisplayComponent} from './components'

class Root extends React.Component { 
    constructor(props){ 
        super(props); 
        this.state = { 
            place: 'home', 
            places: [
                'home', 
                'school', 
                'watering-hole', 
                'water-cooler', 
                'daycare', 
                'pet store', 
                'beauty parlor', 
                'library', 
                'beach'
            ], 
            needs: {
                thirst: 25,
                hunger: 25, 
                energy: 25, 
                excitement: 25, 
                depression: 25, 
                peace: 25 
            }, 
            friends: { 
                Steve: 15, 
                Suzy: 22
            }
        }
        this.buttonHandler = this.buttonHandler.bind(this); 
        this.increase = this.increase.bind(this); 
        this.setNeeds = this.setNeeds.bind(this); 
        this.increaseRelationship = this.increaseRelationship.bind(this); 
    }
    increaseRelationship(name, num){ 
        let friends = this.state.friends; 
        friends[name]+=num; 
    }
    setNeeds(arr){ 
        let needs = this.state.needs; 
        needs.thirst += arr[0]; 
        needs.hunger += arr[1]; 
        needs.energy += arr[2]; 
        needs.excitement += arr[3]; 
        needs.depression += arr[4]; 
        needs.peace += arr[5]; 
        this.setState({needs})
    }
    increase(need, amount){ 
        let needs = this.state.needs; 
        let newAmount = needs[need] + amount
        needs[need] = newAmount < 50 ? newAmount : 50; 
        this.setState({needs})
    }
    buttonHandler(place){ 
        this.setState({place})
    }
    render(){ 
        return ( 
            <div>
                <div className="nav-holder">
                    {this.state.places.map(place => ( 
                        <NavButton buttonHandler={this.buttonHandler} place={place} flag={this.state.place === place} />
                    ))}
                </div>
                <span>
                    <div>thirst: {this.state.needs.thirst}</div> 
                    <div>hunger: {this.state.needs.hunger}</div> 
                    <div>energy: {this.state.needs.energy}</div> 
                    <div>excitement: {this.state.needs.excitement}</div> 
                    <div>depression: {this.state.needs.depression}</div> 
                    <div>peace: {this.state.needs.peace}</div> 
                </span>
                <span>
                    <div>Steve : {this.state.friends.Steve} </div>
                    <div>Suzy : {this.state.friends.Suzy} </div>
                </span>
        
                <DisplayComponent increaseRelationship={this.increaseRelationship} place={this.state.place} increase={this.increase} setNeeds={this.setNeeds}/>
            </div>
        )
    }
}

export default Root; 
