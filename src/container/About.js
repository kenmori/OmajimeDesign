import React, { Component } from 'react';
import {connect} from 'react-redux'
import {request} from '../actions/request';

export class About extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <button onClick={this.props.onSomeButtonClicked}>送信</button>
            </div>
        )
    }
}


export default connect(
    state => ({userId: 'morita'}),
    dispatch => ({onSomeButtonClicked: () => dispatch(request(3))})
)(About);