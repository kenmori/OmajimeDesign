import React, { Component, Fragment } from 'react';
import {defaultProps, compose, withProps, flattenProp, renameProp } from 'recompose';
import {TopickPageComponent} from '../component/TopickPageComponent';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/TopicsPageAction';

const TopicsPage = ({ c, count, increment, decrement }) => {
    return (
        <Fragment>
            {count}
            <TopickPageComponent increment={increment} />
            <button onClick={()=> decrement(1)}>decrement</button>
        </Fragment>
    )
};
const mapStateToProps = (state) => ({
        count: state.topick.count
    })

const mapDispatchToProps = (dispatch) => ({
    decrement(value){ dispatch(decrement(value)) },
    increment(value){ dispatch(increment(value)) }
});
export const Topics = connect(mapStateToProps, mapDispatchToProps)(TopicsPage);


