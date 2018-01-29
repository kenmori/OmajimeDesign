import React, { Component, Fragment } from 'react';
import {defaultProps, compose, withProps, flattenProp, renameProp } from 'recompose';
import {TopickPageComponent} from '../component/TopickPageComponent';
import {connect} from 'react-redux';
import {increment} from '../actions/TopicsPageAction';
const enhance = compose(
    withProps({
        object: {a: 'a', b: 'b'},
        c: 'c'
    }),
    flattenProp('object')
)

const TopicsPage = ({ c, count, increment }) => {
    return (
        <Fragment>
            <TopickPageComponent topick={count} increment={increment} />
            <button></button>
        </Fragment>
    )
}
;
const mapStateToProps = (state) => ({
        count: state.topick.count
    })

const mapDispatchToProps = (dispatch) => ({
    increment(){ dispatch(increment()) }
});
export const Topics = connect(mapStateToProps, mapDispatchToProps)(enhance(TopicsPage));


