import '../App.css';
import io from 'socket.io-client'
import { useState } from 'react';
const socket = io.connect("http://localhost:3001")

function Card() {
    const [cards, setCards] = useState([])

    socket.on('message', function (data) {
        // console.log(data.card)

        let datainfo = [{
            id: data.stuff.id,
            name: data.stuff.name,
            state: data.stuff.state,
            type: data.stuff.type,
            details: data.stuff.details,

            svg: data.card,
            basecard: data.baseimg
        }]

        setCards(datainfo)
    
    })

    
    const sendUser = () => {
        const userid = document.getElementById('user-id').value
        // console.log(userid)
        socket.emit('user', { userid: userid })
    }

    const sendSvg = () => {
        // eslint-disable-next-line
        cards.map((card) => {
            // console.log(card.svg)
            socket.emit('svg', { svg: card.svg })
        })
    }


    return (
        <div className="App">
            <div className="main">
                <input type="text" id='user-id' placeholder="Enter your user id" defaultValue="784141856426033233" />
                <button onClick={sendUser}>Send User</button>
                <button onClick={sendSvg}>Send SVG</button>

                {cards.map((card, index) => {
                    return (
                        <div key={index} className="card">
                            <h2>{card.name}</h2>
                            <p>{card.details}</p>
                            <p>{card.state}</p>
                            <p>{card.id}</p>
                            <p className='type'>{card.type}</p>
                            <img src={`data:image/svg+xml;base64,${card.basecard}`} alt="" />
                            <img id='svg-input' src={`data:image/svg+xml;svg+sml,${card.svg}`} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Card;