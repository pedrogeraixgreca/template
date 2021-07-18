
import React from 'react';
import Information from "./main/Information";
import Contact from "./main/Info2";
import Logo from "./main/Logo";
import Info3 from './main/Info3';
import Info4 from './main/Info4';
import Info5 from './main/Info5';
import Info6 from './main/Info6';
import Info7 from './main/Info7';
import Info8 from './main/Info8';
import Info2 from './main/Info2';
import Info9 from './main/Info9';
export default class Main extends React.Component {

    render(){
        return(
            <div className="main">
                <Logo/>
                <Information/>
                <Info2/>
                <Info3/>
                <Info4/>
                <Info5/>
                <Info6/>
                <Info7/>
                <Info8/>
                <Info9/>
            </div>
        );
    }
}