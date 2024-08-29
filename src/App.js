import React from 'react';
import Sidenav from './side';
import Main from './main';

function App(){
    return(
        <div className='container'>
            <div className='container-left'>
                <Sidenav/>
            </div>
            <div className='container-right'>
                <Main/>
            </div>
        </div>
        
    );
}
export default App;