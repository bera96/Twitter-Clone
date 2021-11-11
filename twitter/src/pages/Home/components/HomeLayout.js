import React from 'react';

export function HomeLayout({setClickedTweet}) {

    const onClickHandler=()=>{
            setClickedTweet(false)
    }
    return (
        <div onClick={onClickHandler} className="layout">
            
        </div>
    );
}
