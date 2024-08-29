import React from 'react';
import Header from './header';
import Content from './content';

function Main(){
    return(
        <section className='main-sec'>
            <Header/>
            <Content/>
        </section>
    );
}
export default Main;