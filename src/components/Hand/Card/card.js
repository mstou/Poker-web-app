import React from 'react';
import {CardSelected} from './cardSelected';
import './styles/cards.css';

const children = ({ rank, suit, onClick }) => (
  <div className={`card rank-${rank.toString().toLowerCase()} ${suit}`} onClick={onClick}>
    <div className="rank">{rank.toString().toUpperCase()}</div>
    <div className="suit" dangerouslySetInnerHTML={{__html:`&${suit};`}}/>
  </div>
);

const Card= ({rank, suit, selected, onClick}) => {
  if(selected) return CardSelected(children({rank, suit, onClick}));
  return children({rank, suit, onClick});
}

export { Card };
