import React from 'react';

const Buttons = ({winner,Ready,ChangeCards}) => (
  <div className="Buttons" >
    {(!winner) ? <button className="ReadyButton" onClick={Ready}>Ready</button> : undefined }
    <p>{(winner) ? winner + " is the Winner!" : undefined }</p>
    {/*(!winner) ? <button onClick={ChangeCards}> Change Cards!</button> : undefined */}
  </div>
);

export default Buttons;
