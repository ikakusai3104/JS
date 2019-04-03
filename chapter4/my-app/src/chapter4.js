import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
render(){
        return(
            <Profile{...profole}/>
        )
    }
}

const helloElement = <Hello />;

const Hello = (props) => {
    return <div>こんにちは、{props.children}さん</div>;
};

const HelloFragment = () => {
    return(
        <React.Fragment>
            <div>こんにちは</div>
            <div>坂本龍馬さん</div>
        </React.Fragment>
    );
};

const Greeting = (props) =>
{
    return(
        <div>
            <div>ご挨拶</div>
            {props.children}
        </div>
    );
};

const profole={
    name:'坂本龍馬',
    birthDay:'1836/01/03',
};

const Profile = (props) => {
    return (
        <ul>
            <li>名前:{props.name}</li>
            <li>誕生日:{props.birthDay}</li>
        </ul>
    )
};


export default App;
