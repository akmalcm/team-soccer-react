import React from "react";

const FirstElevent = props => {

  const onDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className='first-elevent' onDragOver={onDragOver} onDrop={()=>{props.dropPlayer('firstEleven')}}>
      <h2>First Elevent</h2>
      <div>
        {
          props.firstElevent.length > 0 ? (
            props.firstElevent.map((player, index) => (
              <div key={player.id} className='list'>
                <span className='column no'>{index + 1}.</span>
                <span className='column name' draggable onDrag={() => props.dragPlayer(player,'firstEleven')} >{player.name}</span>
                <span className='column delete' onClick={() => props.deleteFirstElevent(player.id)}
                  style={{ color: 'red', cursor: 'pointer' }}>X</span>
              </div>
            ))
          ) : (
            <div>No players</div>
          )
        }
      </div>
    </div>
  );
}

export default FirstElevent;