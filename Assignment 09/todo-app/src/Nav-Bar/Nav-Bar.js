import React from 'react';
import './Nav-Bar.scss';

//class component to render Heading component displaying the title
class NavBar extends React.Component{
    render(){
        return(
            <nav className="main-header">
                <h1 className="main-heading">
                    TO-DO APP
                </h1>
            </nav>
        );
    }
}

export default NavBar;