import React, { Component, Fragment } from 'react';
import {defaultProps, compose, withProps, flattenProp, renameProp } from 'recompose';
import {TopickPageComponent} from '../component/TopickPageComponent';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/TopicsPageAction';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ja';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import {closeModal, openModal} from '../actions/modalAction';

console.log(closeModal, "closemodal")

const events =[{
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  }]
const customStyle = {
    content: {
        top : '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform : 'translate(-50%, -50%)'
    }
};

BigCalendar.momentLocalizer(moment);
let CalendarPage = ({hasTicket,  showModal,openModalDispatch, closeModalDispatch }) => {
       return  <Fragment>
            {
           hasTicket ? <div><BigCalendar
              selectable
              events={events}
              defaultView="week"
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date(2018, 3, 15)}
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={slotInfo => {
                alert(
                  `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}` +
                    `\naction: ${slotInfo.action}`
                )
                }
              }
            />
<button onClick={openModalDispatch}>Open Modal</button>
    <Modal isOpen={showModal} onRequestClose={closeModalDispatch}>
        <div>fafaf</div>
    </Modal></div> : <div>追加してください</div>
}
        </Fragment>
}
const mapStateToProps = (state) => ({
        count: state.topick.count,
        showModal: state.modal.showModal,
    hasTicket: true//state
    })

const mapDispatchToProps = (dispatch) => ({
    closeModalDispatch: () =>{
        dispatch(closeModal({showModal:false})) },
    openModalDispatch: () =>{
        dispatch(openModal({showModal: true})) }

});
export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);


