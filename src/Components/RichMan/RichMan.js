import React from 'react';
import './RichMan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDonate} from '@fortawesome/free-solid-svg-icons'



const RichMan = (props) => {
    const {name, age, company, country,salary} = props.man;
    const element = <FontAwesomeIcon icon={faDonate} />
    
    return (
        <div className="total-bilioner">
           
            <div className="bilioner-container">

            <img className="bm" src={props.man.img} alt="" />
           
            <h3>{name}</h3>
            <h5>Age: {age}</h5>
            <h5>Company: {company}</h5>
            <h5>Country: {country}</h5>
            <h5>Bilion: ${salary}</h5>

            <button onClick={()=> props.addToCart(props.man)}
            className="btn"
            >{element} Donate</button>
            </div>
            
        </div>
    );
};

export default RichMan;