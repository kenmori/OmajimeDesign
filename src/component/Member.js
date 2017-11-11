import React, { Component } from 'react';
export const Member = ({name, en, text}) => {
    return (
        <li>
            <div>
                <div><img src='' alt={name} /></div>
                <div>{en}</div>
            </div>
            <div>{text}</div>
        </li>
    );
}