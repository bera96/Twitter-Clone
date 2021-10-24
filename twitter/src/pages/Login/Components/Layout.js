import React from 'react';

function Layout({layout}) {
    
    if(layout===true){
        return(
            <div className="layout"></div>
        )
    
    }
    else{
        return null
    }
}

export default Layout;