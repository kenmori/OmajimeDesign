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
import {onSelectedSlot, requrestPostInterviewFrame,setSelectEvent, moveInterViewFrame,requestInit} from '../actions/interviewFrameAction';
import {reduxForm, Field} from 'redux-form'
import * as moment from 'moment'
//import {createTime} from '../utils'


//modalでpostしたらカレンダーがわ際の再描画
//postしたらmodalが閉じる?
//何も予定ない場合のerror
//編集ができる
//更新ができる
//modal内がrenderされてが更新される
//プレビューが見れる
//選択したslotの時間を変更反映させる
//
//const RemoteButton = ({dispatch}) => {
//    return (
//    <button onClick={() => dispatch(requrestPostInterviewFrame())}>確定する</button>
//)}
//
const renderField = ({starttime,start, input, type, meta: { touched, error } }) => (
    <input {...input} type={type} value={starttime} />
);

const normalize = (value) => {
    console.log(value)
}


const wrapHandleSubmit = (values, dispatch, formProps, moment) => {
    //const start = formProps.createTime(values.start);
    //const end = formProps.createTime(values.end);
    // new date(2018, 3, 15),
  let obj = {
    title: 'Long Eventfafa',
    start:  new Date(values.start),
      end: new Date(values.end),
    isCreate: false
  };
    return dispatch(requrestPostInterviewFrame(obj));
};
let CreateForm = ({selectedObjet,dispatch, handleSubmit, pristine, reset, submitting}) => {
    let start = selectedObjet.start.toString();
    let end =  selectedObjet.end.toString();
    return  (
        <div>
        <h3>Create</h3>
    <form onSubmit={handleSubmit(wrapHandleSubmit)}>
        <div>
            <Field type="hidden" component="input" name="title" value="花見"/ >
            start:

          <Field name="start" component="select">
              {/*todo*/}
            <option value={start}>{start}</option>
          </Field>
          <br />
              end:
          <Field name="end" component="select">
              {/*todo*/}
            <option value={end}>{end}</option>
          </Field>
        </div>
            <Field name="mensestukan" placeholder="面談官を選択してください" component="select">
                <option />
                <option value="面接官1">面接官1</option>
                <option value="面接官2">面接官2</option>
                <option value="面接官3">面接官3</option>
                <option value="面接官4">面接官4</option>
            </Field>
            <br/>
            <Field name="mensestukijou" placeholder="面談会場を選択してください" component="select">
                <option />
                <option value="会場1">会場1</option>
                <option value="会場2">会場2</option>
                <option value="会場3">会場3</option>
                <option value="会場4">会場4</option>
            </Field>
            <br/>
            {/*<RemoteButton dispatch={dispatch} />*/}
            <button type="submit" disabled={pristine || submitting}>
                確定する
            </button>
            <hr/>
            <div>
                preview
            </div>
        </form>
    </div>
)}



let EditForm = ({handleSubmit, pristine, reset, submitting}) => {
    return (
        <div>
        <h3>Edit</h3>
        <form onSubmit={handleSubmit}>
            <Field name="" component="input" type='text' />
        </form>
    </div>
    )
};

const createMaptoprops = (state, ownprops) => {
    let start =  state.selectedObjet.start.toString();
    let end =  state.selectedObjet.end.toString();
    return {
        starttime: start
    }
}

CreateForm = reduxForm({
    form : 'createForm',
    onSubmit: wrapHandleSubmit,
    moment
})(CreateForm)

 EditForm = reduxForm({
    form : 'editForm'
})(EditForm)

const DragAndDropCalendar = withDragAndDrop(BigCalendar);
class Dnd extends React.Component {
    constructor(props){
        super(props)
    }
 componentDidMount(){
        this.props.dispatch(requestInit());
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
            this.props.openModalDispatch(event);
        }}
        onSelectSlot={slotInfo => {
             this.props.openModalDispatch(slotInfo)
            }
          }
        resizable
        onEventResize={this.props.resizeEvent}
        defaultView="week"
        defaultDate={new Date(2018, 3, 15)}
      />
      <Modal {...this.props}
          isOpen={this.props.showModal}
          onRequestClose={this.props.closeModalDispatch}
          onAfterOpen={this.props.handleAfterOpenFunc}
      >
        {this.props.selectedObjet.id ? <div><EditForm {...this.props} /></div>: <div><CreateForm {...this.props} />not Comp</div>}
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
        openModalDispatch(slot){
            dispatch(onSelectedSlot({selectedObjet: slot, isSelected: true}))
            dispatch(openModal({showModal: true}))
        },
        handleAfterOpenFunc(){
            console.log("open")
        },
        dispatch
    }
}

const convertEventDate = (state) => {
   const eled =  state.interviewFrame.events.map((el, i)=>{
        el.start = new Date(el.start)
        el.end = new Date(el.end);
       return el;
    })
    return eled;
}
const mapStateToProps = (state, props) => {
    console.log(state, "mapToProps")
    return  {
        showModal: state.modal.showModal,
        isCreate: state.interviewFrame.events ? state.interviewFrame.events[0].isCreate: false,
        events: convertEventDate(state),
        selectedObjet: state.interviewFrame.selectedObjet
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
            //dispatch(moveInterViewFrame({events: nextEvents}));
            //APIの構造に合わせて渡す更新型を変更する
            //check
            dispatch(moveInterViewFrame({events: nextEvents, id: updatedEvent.id}));
        },
         resizeEvent(resizeType, { event, start, end }){
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

