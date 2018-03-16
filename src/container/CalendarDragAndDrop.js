import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import events from '../events'
import {connect} from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import Modal from 'react-modal'
import {closeModal, openModal} from '../actions/modalAction';
import {moveInterViewFrame} from '../actions/interviewFrameAction';

//pageを開けた際にapiコールして最新のcardが揃う
//
//modalを開いたらcardInfoが表示される
//編集ができる
//更新ができる
//modal内がrenderされてが更新される
//プレビューが見れる
//閉じた時にcardが更新されている

//登録できる
//登録したものを編集できるように出すモーダルを分ける
//編集できる
//

const DragAndDropCalendar = withDragAndDrop(BigCalendar)
class Dnd extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <React.Fragment>
      <DragAndDropCalendar
        selectable
        events={this.props.events}
        onEventDrop={({event, start, end} ) => {
            this.props.moveEvent({event, start, end}, this.props.dispatch)}
        }
        onSelectEvent={event =>{
            this.props.openModalDispatch({showModal: true})
        }}
        onSelectSlot={slotInfo => {
             this.props.openModalDispatch({showModal: true,  slotInfo})
            }
          }
        resizable
        onEventResize={this.props.resizeEvent}
        defaultView="week"
        defaultDate={new Date(2018, 3, 15)}
      />
    <Modal isOpen={this.props.showModal} onRequestClose={this.props.closeModalDispatch}>
        {this.props.isComp ? <div>Comp</div>: <div>not Comp</div>}
    </Modal>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeModalDispatch(){
        },
        closeModalDispatch(){
            dispatch(closeModal({showModal:false}))
        },
        openModalDispatch(){
            dispatch(openModal({showModal: true}))
        },
        dispatch
    }
}

const mapStateToProps = (state, props) => {
    return  {
        showModal: state.modal.showModal,
        isComp: state.interviewFrame.events[0].isComp,
        events: state.interviewFrame.events
    }
}

const margeToProps = (state, dispatch, ownProps) => {
    return {
        ...state,
        ...dispatch,
        moveEvent({ event, start, end }, dispatch){//動かした後にその位置情報が渡ってくる ?
            const { events } = state
            const idx = events.indexOf(event)
            const updatedEvent = { ...event, start, end }
            const nextEvents = [...events]
            nextEvents.splice(idx, 1, updatedEvent)
            //            this.setState({
            // events: nextEvents,
            //})
            dispatch(moveInterViewFrame({events: nextEvents}));
        },
         resizeEvent(resizeType, { event, start, end }){
             debugger;
            const { events } = state
            const nextEvents = events.map(existingEvent => {
              return existingEvent.id == event.id
                ? { ...existingEvent, start, end }
                : existingEvent
            })

             //this.setState({
             //events: nextEvents,
             //})
         }
    }
}

 Dnd= DragDropContext(HTML5Backend)(Dnd)
export default connect(mapStateToProps, mapDispatchToProps, margeToProps)(Dnd)

