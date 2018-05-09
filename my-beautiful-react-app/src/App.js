import React, {Component} from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class MyMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from initial state...yes",
            content: "Content from state...(here style applied)",
            name: ['jitu\n', 'achtani\n'],
            height: 6
        }
        this.changingStates = this.changingStates.bind(this);
        this.changingHeight = this.changingHeight.bind(this);
    }

    render() {
        var myStyle = {
            fontSize: 30,
            color: '#FF0000'
            /*
        alert("Hello World");
         */
        }
        var name = this.state.name;
        name =name.map(function (item,index) {
            return(
                <li>{item}</li>
            );
        });

        return (<div>
                <h1> Value Fetched from Props</h1>
                <p>Title : {this.props.title}</p>
                <p> Genre:{this.props.genre}</p>
                <hr/>
                <h1> variable Value Fetched from States</h1>
                <p style={myStyle}> Content:{this.state.content}</p>
                <p> Header:{this.state.header}</p>

                <hr/>
                <h1> array Values fetched vertically from States </h1>
               {/* <p> Name:{this.state.name[0]}</p>
                <p> Name:{this.state.name[1]}</p>*/}
                <ul>
                    {name}
                </ul>
                <hr/>
                <SecondComponent/>
                <hr/>

                <button onClick={this.clicked}>Handle Click</button>
                <button onClick={this.changingStates}>Change State</button>
                <button onClick={this.changingHeight}>Change Height After 3 seconds</button>
                <h4>Header: {this.state.header}</h4>
                <h4>Name Array vertically</h4>
                <ul>
                    {name}
                </ul>
                <h4>Height:{this.state.height}</h4>
                <hr/>
                <h1> Props Validations Check</h1>
                <p> Name: {this.props.name} </p>
                <p>Array: {this.props.propArray}</p>
                <p>Bool: {this.props.propBool ? "True..." : "False..."}</p>
                <p>Func: {this.props.propFunc(3)}</p>
                <p>Number: {this.props.propNumber}</p>
                <p>String: {this.props.propString}</p>
                <hr/>

                <input type="text"
                       onChange={this.changingStates}/>
                <h4>{this.state.name}</h4>
                <hr/>


            </div>
        );
    }

    clicked() {
        alert("Cilck event occured through function")
    }

    changingStates() {
        var item = "Jack(array item) added in name array"
        var myArray = this.state.name.slice();
        myArray.push(item);


        this.setState({
            header: "Header Changed",
            name: myArray

        });
        }

    changingHeight() {
        setTimeout(function () {
            this.setState({
                height: 1

            })
        }.bind(this), 3000);
        }


}

MyMovie.propTypes = {

    name: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,

};
MyMovie.defaultProps = {

    name: 'Tutorialspoint.com',
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) {
        return e
    },
    propNumber: 1,
    propString: "String value..."

}

class SecondComponent extends Component {


    render() {
        return (<div>
                <h1> THis is from Second Component</h1>
            </div>
        );
    }

}

export default MyMovie;
