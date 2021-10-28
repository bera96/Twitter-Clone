import React from 'react';
import LeftSide from './LeftSide';
import MiddleSide from './MiddleSide';
import RightSide from './RightSide';

function Home() {
    return (
        <div className="home-page">
            <LeftSide/>
            <MiddleSide/>
            <RightSide/>

        </div>
    );
}

export default Home;