import '../App.css';
import io from 'socket.io-client'
import { useState } from 'react';
const socket = io.connect("https://act-breeze.herokuapp.com/")

function Card() {
    const [cards, setCards] = useState([])
    const [notInGuild, setNotInGuild] = useState([])

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

    socket.on('not-in-server', function (data) {

        let not_in_guild = [{
            user: data.userid
        }]

        setNotInGuild(not_in_guild)
    })

    socket.on('no-activity', function (data) {
        let svgdiv = document.getElementById('svg')
        svgdiv.innerHTML = data.card
    })

    
    const sendUser = () => {
        const userid = document.getElementById('user-id').value
        const about = document.getElementById('about').value
        const banner = document.getElementById('banner').value

        const large_image = document.getElementById('large-image').value
        const small_image = document.getElementById('small-image').value
        if (!userid) {
            alert('Please enter a user id')
        } else {
            socket.emit('user', { 
                userid: userid,
                about: about,
                banner: banner,
                large_image: large_image,
                small_image: small_image
            })
        }
    }

    return (
        <div className="App">
            <div className="main">
                <input className='inp' type="text" id='user-id' placeholder="Enter your user id" />
                <input className='inp' type="text" id='about' placeholder="Enter your about" defaultValue="Itz me !" />
                <input className='inp' type="text" id='banner' placeholder='Enter your banner image url' defaultValue="https://wallpapercave.com/wp/wp4771870.jpg" />
                <input className='large' type="text" id='large-image' placeholder='Enter your large image url' defaultValue="https://cdn.discordapp.com/attachments/952764969638834228/979995425874513960/Criz.png" />
                <input className='small' type="text" id='small-image' placeholder='Enter your small image url' defaultValue="https://cdn.discordapp.com/attachments/952764969638834228/979994810012295208/Criz.png" />
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
                    {notInGuild.map((user, index) => {
                        return (
                            <p key={index}>
                                User with {user.user} is not in the server
                            </p>
                        )
                    })}
                    <div id='svg' className='svgimage'></div>
                </div>
            </div>
        </div>
    );
}

export default Card;