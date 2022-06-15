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
        
        let svgdiv = document.getElementById('svg')
        svgdiv.innerHTML = data.card

        setCards(datainfo)
    
    })

    
    const sendUser = () => {
        const userid = document.getElementById('user-id').value
        socket.emit('user', { userid: userid })
    }

    return (
        <div className="App">
            <div className="main">
                <input type="text" id='user-id' placeholder="Enter your user id" defaultValue="784141856426033233" />
                <button onClick={sendUser}>Send User</button>
                <div className='card'>
                    {cards.map((card, index) => {
                        return (
                            <div key={index}>
                                <h2>{card.name}</h2>
                                <p>{card.details}</p>
                                <p>{card.state}</p>
                                <p>{card.id}</p>
                                <p className='type'>{card.type}</p>
                                {/* <img src={`data:image/svg+xml;base64,${card.basecard}`} alt="" /> */}
                            </div>
                        )
                    })}
                    <div id='svg' className='svgimage'></div>
                </div>
            </div>
        </div>
    );
}

export default Card;