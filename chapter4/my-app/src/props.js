import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class App extends Component {
    render(){
        return(
            <div>
                <Hello />
            </div>
        )
    }
}
    

const Hello = (props) => 
{
    return <div>こんにちは、{props.name}さん</div>;
};

Hello.defaultProps = {
    name: '西郷隆盛'
}
