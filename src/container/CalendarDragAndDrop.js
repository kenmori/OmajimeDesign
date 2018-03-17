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
import {requrestPostInterviewFrame,setSelectEvent, moveInterViewFrame,requestInit} from '../actions/interviewFrameAction';
import {reduxForm, Field} from 'redux-form'


//pageを開けた際にapiコールして最新のcardが揃う
//
//modalを開いたらcardInfo(時間)が表示される
//
//編集ができる
//更新ができる
//modal内がrenderされてが更新される
//プレビューが見れる
//閉じた時にcardが更新されている

//登録できる
//登録したものを編集できるように出すモーダルを分ける
//編集できる
//
//
//
//選択したslotの時間を反映させる
//
//
const RemoteButton = ({dispatch}) => (
    <button onClick={() => dispatch(requrestPostInterviewFrame())}>確定する</button>
)
const wrapHandleSubmit = (values, dispatch) => {
    //return dispatch(requrestPostInterviewFrame(values));
};
let CreateForm = ({dispatch, handleSubmit, pristine, reset, submitting}) => (
    <div>
        <h3>Create</h3>
    <form onSubmit={handleSubmit(wrapHandleSubmit)}>
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
            <RemoteButton dispatch={dispatch} />
            {/*<button type="submit" disabled={pristine || submitting}>
                確定する
            </button>*/}
            <hr/>
            <div>
                preview
            </div>
        </form>
    </div>

)



let EditForm = ({handleSubmit, pristine, reset, submitting}) => (
    <div>
        <h3>Edit</h3>
        <form onSubmit={handleSubmit}>
            <Field name="" component="input" type='text' />
        </form>
    </div>
)


CreateForm = reduxForm({
    form : 'createForm',
    onSubmit: wrapHandleSubmit
})(CreateForm)

 EditForm = reduxForm({
    form : 'editForm'
})(EditForm)

const DragAndDropCalendar = withDragAndDrop(BigCalendar)
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
            debugger;
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
        {this.props.isComp ? <div><EditForm {...this.props} /></div>: <div><CreateForm {...this.props} />not Comp</div>}
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
    console.log(state, 'mapStateProps');
    return  {
        showModal: state.modal.showModal,
        isComp: state.interviewFrame.events[0] ? state.interviewFrame.events[0].isComp: false,
        events: convertEventDate(state)
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
            debugger;
            dispatch(moveInterViewFrame(nextEvents));
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

