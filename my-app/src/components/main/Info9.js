import React from 'react';

export default class Info9 extends React.Component {

    render(){
        return(
        <div className="back">
            <h1 className="w16">Our Team</h1>
            <h1 className="w17">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</h1>
            <div className="g-t">
              <div className="g-p">
                <img src="/img/dr1.png" alt="dr1"/>
                <h1 className="w18">Dr. Jessica Tailor</h1>
                <h1 className="w19">Dental Implant Surgeon</h1>
              </div>
              <div className="g-p">
                <img src="/img/dr2.png" alt="dr1"/>
                <h1 className="w18">Dr. Brian Adam</h1>
                <h1 className="w19">Restorative Dentist</h1>
              </div>
              <div className="g-p">
                <img src="/img/dr3.png" alt="dr1"/>
                <h1 className="w18">Dr. Linda Feldman</h1>
                <h1 className="w19">Cosmetic Dental Surgeon</h1>
              </div>
            </div>
        </div>
        );
    }
}