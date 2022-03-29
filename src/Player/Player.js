import React from 'react'

const PlayerTable = props => {
    const onDragOver = (e) => {
        e.preventDefault();
      }

    return (
        <div className='squad' onDragOver={onDragOver} onDrop={()=>{props.dropPlayer('player')}}>
            <h2>Your Team</h2>
            <div>
                {
                    props.players.length > 0 ? (
                        props.players.map((player, index) => (
                            <div key={player.id} className='list'>
                                <span className='column no'>{index + 1}.</span>
                                <span className='column name' draggable onDrag={() => props.dragPlayer(player,'player')} >{player.name}</span>
                                <span className='column delete' onClick={() => props.deletePlayer(player.id)}
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

export default PlayerTable