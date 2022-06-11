import React, { Component } from 'react'
import axios from 'axios'

export default class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: "getting card"
        }
    }

    handleButtonClick = () => {
        // axios.get('/card').then(response => {
        //     console.log(response.data);
        //     this.setState({
        //         cardname: response.data.name,
        //         cardid: response.data.id,
        //         cardtype: response.data.type,
        //         carddetails: response.data.details,
        //         cardstate: response.data.state,
        //     })
        // })  
        
        axios.get(`/card/${document.getElementById('discordid').value}`).then(response => {
            console.log(response.data);
            this.setState({
                cardname: response.data.name,
                cardid: response.data.id,
                cardtype: response.data.type,
                carddetails: response.data.details,
                cardstate: response.data.state,
                timestamp: response.data.timestamps.start,
            })
        })
    }

    render() {
        return (
            <div>
                <input type="text" id='discordid' placeholder="Enter your discord id" />
                <button onClick={this.handleButtonClick}>Get Card</button>
                <h1>Card info : {this.state.cardname}</h1>
                <h1>Card id : {this.state.cardid}</h1>
                <h1>Card type : {this.state.cardtype}</h1>
                <h1>Card details : {this.state.carddetails}</h1>
                <h1>Card state : {this.state.cardstate}</h1>
                <h1>Timestamp : {this.state.timestamp}</h1>
            </div>
        )
    }
}
