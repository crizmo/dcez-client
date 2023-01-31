import React from 'react'
import '../doc.css';

function Doc() {

    return (
        <div className="main">
            <header className="header">
                <h3 className="title">Discord Cards Documentation</h3>
            </header>
            <div className="content">
                <div className="doc">
                    <h2 className="doc-title">Getting Started</h2>
                    <p className="doc-text">
                        Discord Cards helps you display your discord activity on your website / anywhere you want using the api or the client. <br />
                        <br />
                        To get started, you need to join the <a href="https://discord.gg/Ecy6WpEZsD" target="_blank" rel="noopener noreferrer">Discord Cards Discord</a> <br/>
                        Thats all you need to do. A discord bot is used to fetch your activity data.<br />
                        <br />
                        Once you have joined the server, you can use the client or the api to display your activity.
                    </p>
                    <h2 className="doc-title">API</h2>
                    <p className="doc-text">
                        With the help of Discord Cards API you can display your discord activity as a card on your website or anywhere you want.  <br />
                        <br />
                        Endpoints of the api: <br />
                        <br />
                        Cards: <br />
                        <a href="https://discord-cards.kurizu.repl.co/api/card" target="_blank" rel="noopener noreferrer">/api/card/:id</a> <br />
                        <a href="https://discord-cards.kurizu.repl.co/api/compact" target="_blank" rel="noopener noreferrer">/api/compact/:id</a> <br /> <br />
                        Replace :id with your user id <br />
                        <br />
                        More info on Github: <a href="https://github.com/crizmo/DiscordCards" target="_blank" rel="noopener noreferrer">Discord Cards Github</a>
                    </p>
                    <h2 className="doc-title">Client</h2>
                    <p className="doc-text">
                        Client site of Discord Cards is available on <a href="https://discord-cards.netlify.app/card" rel="noopener noreferrer">https://discord-cards.netlify.app/card</a> <br />
                        <br />
                        Use it to get the right customization for your card. <br />
                    </p>
                    <img className="doc-img" src="https://discord-cards.kurizu.repl.co/api/compact/784141856426033233" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Doc;