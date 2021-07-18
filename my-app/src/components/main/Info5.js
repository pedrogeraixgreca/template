import React from 'react';

export default class Info5 extends React.Component {

    render(){
        return(
           <div  >
                <div  className="w7">
                    <h1 >About us</h1>
                    <h1 className="w8">Giving excellent care to every patient.</h1>
                    <h1 className="w9">We provides a wide variety of dental services and procedures to</h1>
                    <h1 className="w9"> address all of our patients'dental health needs. </h1>
                    <h1 className="w9">By combining quality patient care with up-to-date technology,</h1>
                    <h1 className="w9"> we are able to treat patients of all ages in a comfortable and relaxing setting  </h1>
                </div>
                <div className="imag">
                    <img src="/img/dentista.png" alt="dentista"/>
                </div>
           </div>
        );
    }
}