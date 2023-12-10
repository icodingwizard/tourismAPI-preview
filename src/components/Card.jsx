import { useEffect, useRef } from 'react';
import styles from '../styles/Card.module.css'

function Card (props){

    const cardRef = useRef();

    useEffect(()=>{});



    return( 
        <div className = {styles.Card} ref={cardRef}>
            
            {/* <img src={props.image} alt="" />
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p> */}
saddscds
        </div>
    );
}

export default Card;