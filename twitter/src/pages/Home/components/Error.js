import React, { useState } from 'react';


export function Error({as}) {

const checkError=(error)=>{
    switch (error) {
        case "empty-error":
            return "Bu alan boş bırakılamaz"
           
    
        default:
            break;
    }
   }

  
    
    return (
        <div>
            <span className={as}>{checkError(as)}</span>
        </div>
    );
}

