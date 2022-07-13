import '../doc.css';

function Doc() {

    return (
        <div className="main">
            <header className="header">
                <h3 className="title">Breeze Documentation</h3>
            </header>
            <div className="content">
                <div className="doc">
                    <h2 className="doc-title">Getting Started</h2>
                    <p className="doc-text">
                        Breeze helps you display your discord activity on your website / anywhere you want using the api or the client. <br />
                        <br />
                        To get started, you need to join the <a href="https://discord.gg/Ecy6WpEZsD" target="_blank" rel='noreferrer'>Breeze Discord</a> <br/>
                        Thats all you need to do. A discord bot is used to fetch your activity data.<br />
                        <br />
                        Once you have joined the server, you can use the client or the api to display your activity.
                    </p>
                    <h2 className="doc-title">API</h2>
                    <p className="doc-text">
                        With the help of breeze API you can display your discord activity as a card on your website or anywhere you want.  <br />
                        <br />
                        Endpoints of the api: <br />
                        <br />
                        Cards: <br />
                        <a href="https://api-breeze.herokuapp.com/api/card" target="_blank" rel='noreferrer'>/api/card/:id</a> <br />
                        <a href="https://api-breeze.herokuapp.com/api/compact" target="_blank" rel='noreferrer'>/api/compact/:id</a> <br /> <br />
                        Replace :id with your user id <br />
                    </p>
                    <h2 className="doc-title">Client</h2>
                    <p className="doc-text">
                        Client site of breeze is available on <a href="https://breeze-stats.netlify.app/card" rel='noreferrer'>https://breeze-stats.netlify.app/card</a> <br />
                        <br />
                    </p>
                    <img className="doc-img" src="https://api-breeze.herokuapp.com/api/compact/784141856426033233" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Doc;