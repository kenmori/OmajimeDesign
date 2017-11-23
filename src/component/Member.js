import React, { Component } from 'react';
export const Member = ({name, en, text, src}) => {
    return (
        <li className='member__item'>
        <div className='member__img'>
        <div className={(name === '賢二' || 'fafa') && 'child'}>
<img src={src} />
        </div>
        </div>
        <div className='member__detail'>
        <div className='member__name'>{name}</div>
        <div className='member__nameen'>{en}</div>
        <div className='member__text'>{text}</div>
        </div>
        </li>
);
}