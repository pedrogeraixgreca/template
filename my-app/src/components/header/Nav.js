import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {
    
    constructor()
    {
        super();
        this.state={
            visNav:'none'
        }
    }
    clickMe()
    {
        if(this.state.visNav === 'none'){
            this.setState({
                visNav:'flex'
            });
        }else{
            this.setState({
                visNav:'none'
            });
        }
        document.querySelector(".menu").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="nav">
                <AnchorLink href='#home'>DENTAL CLINIC</AnchorLink>
            
                <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                    <img src="/img/log.png" alt="Botão Mobile"/>
                </div>
          </div>
        );
    }
}

