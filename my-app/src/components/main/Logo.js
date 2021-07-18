import React from 'react';

export default class Logo extends React.Component {

    render(){
        return(
            <div className="logo">
                <div className="log a">
                    <h5>DENTAL CARE</h5>
                </div>
                <div className="logo a">
                    <h1>Changing Lives One Smile At A Time</h1>
                </div>
                <div className="logima">
                <picture>
                    <img src="/img/ima.png" alt="imagem"/>
                </picture>
                </div>
            </div>
                
        );
    }
}