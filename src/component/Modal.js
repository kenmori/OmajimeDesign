import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

const customStyle = {
    content: {
        top: : '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('root');
export default class extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {showModal} = this.props
        return (
            <React.Fragment>
                <Modal
                    isOpen={showModal}
                >
            </React.Fragment>
        )
    }
}



