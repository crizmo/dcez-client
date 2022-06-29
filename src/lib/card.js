import '../App.css';
import io from 'socket.io-client'
import { useState } from 'react';
const socket = io.connect("http://localhost:3001/") // http://localhost:3001/ // https://api-breeze.herokuapp.com/

function Card() {
    const [cards, setCards] = useState([])
    const [notInGuild, setNotInGuild] = useState([])

    socket.on('message', function (data) {
        // console.log(data.card)

        let user = document.getElementById('user-id').value
        let api = `https://api-breeze.herokuapp.com/api/${user}`
        
        let datainfo = [{
            id: data.stuff.id,
            name: data.stuff.name,
            state: data.stuff.state,
            type: data.stuff.type,
            details: data.stuff.details,
            
            svg: data.card,
            apiimg: api
        }]
        
        let svgdiv = document.getElementById('svg')
        svgdiv.innerHTML = data.card

        setCards(datainfo)
    
    })

    socket.on('not-in-server', function (data) {

        let not_in_guild = [{
            user: data.user_id
        }]

        setNotInGuild(not_in_guild)
        let svgdiv = document.getElementById('svg')
        svgdiv.innerHTML = ``
    })

    socket.on('no-activity', function (data) {
        let svgdiv = document.getElementById('svg')
        svgdiv.innerHTML = data.card
    })

    
    const sendUser = () => {
        let userid = document.getElementById('user-id').value
        const about = document.getElementById('about').value
        const banner = document.getElementById('banner').value

        const large_image = document.getElementById('large-image').value
        const small_image = document.getElementById('small-image').value
        if (!userid) {
            alert('Please enter a user id')
        } else {
            socket.emit('user', { 
                user: userid, 
                about: about,
                banner: banner,
                large_image: large_image,
                small_image: small_image
            })

            console.log("User id : " + userid)
        }
    }

    // const loadapi = () => {
    //     const userid = document.getElementById('user-id').value
    //     const api = `https://api-breeze.herokuapp.com/api/${userid}`
    //     const svgdiv = document.getElementById('api')
    //     svgdiv.innerHTML = `<img src="${api}" alt="">`
    // }

    return (
        <div className="App">
            <div className="main">
                <div className="inputs">
                    <h2 className='site'>Breeze</h2>
                    <input className='inp-id' type="text" id='user-id' placeholder="Enter your user id" />
                    <input className='inp-about' type="text" id='about' placeholder="Enter your about" defaultValue="Itz me !" />
                    <input className='inp-banner' type="text" id='banner' placeholder='Enter your banner image url'/>
                    <input className='large' type="text" id='large-image' placeholder='Enter your large image url' />
                    <input className='small' type="text" id='small-image' placeholder='Enter your small image url' />
                    <button onClick={sendUser} className='sendbtn'>Send User</button>
                </div>
                <div className='card'>
                    {cards.map((card, index) => {
                        return (
                            <div key={index}>
                                    {/* <h2 className='card-name'>{card.name}</h2>
                                    <p className='card-state'>{card.state}</p>
                                    <p className='card-details'>{card.details}</p>
                                    <p className='card-type'>{card.type}</p> */}
                                    {/* <button onClick={loadapi}>Load API</button> */}
                            </div>
                        )
                    })}
                    {notInGuild.map((user, index) => {
                        setTimeout(() => {
                            setNotInGuild([])
                            setCards([])
                        } , 5000)
                        return (
                            <p key={index}>
                                User with id {user.user} is not in the server
                            </p>
                        )
                    })}
                    <div id='svg' className='svgimage'></div>
                    {/* <div id='api' className='apiimage'></div> */}
                </div>
            </div>
        </div>
    );
}

export default Card;