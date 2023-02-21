import React, { useState } from "react";
import './modal.css'


const Modal=(props)=>
{ 
    
    
    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={()=> props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e=>e.stopPropagation()}>
                <p>Где будем работать?</p>
                <button className="button select">
					<span className="button__text" >Solana</span>
				</button>	
				<button className="button select">
					<span className="button__text">Hyperledger</span>
				</button>	
                <button className="button back">
					<span className="button__text">Назад</span>
				</button>	

                {props.children}
            </div>
        </div>
    );
};

export default Modal;