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
        axios.get('/card').then(response => {
            // console.log(response.data);
            this.setState({
                cardname: response.data.name,
                cardid: response.data.id,
                cardtype: response.data.type,
                carddetails: response.data.details,
                cardstate: response.data.state
            })
        })  

        axios.get(`/card/${document.getElementById('discordid').value}`).then(response => {
            // console.log(response.data);
            this.setState({
                cardname: response.data.name,
                cardid: response.data.id,
                cardtype: response.data.type,
                carddetails: response.data.details,
                cardstate: response.data.state,
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get Card</button>
                <input type="text" id="discordid" />
                <p>{this.state.cardname}</p>
                <p>{this.state.cardid}</p>
                <p>{this.state.cardtype}</p>
                <p>{this.state.carddetails}</p>
                <p>{this.state.cardstate}</p>
            </div>
        )
    }
}
