import './App.css';

import Player from './Player/Player';
import FirstElevent from './FirstElevent/FirstElevent';
import React, { useState, useEffect } from 'react';

import playerData from './SoccerWiki_2022-03-22 - Player Data_1647936510.json';
import AddPlayerForm from './Form/AddPlayer';

const SoccerApp = () => {
  const playerData = [
    { id: 1, name: 'Tania' },
    { id: 2, name: 'Craig' },
    { id: 3, name: 'Ben' }
  ];

  const initState = { id: null, name: '' };

  // state 
  const [players, setPlayers] = useState(playerData);
  const [firstElevent, setFirstElevent] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(initState);
  const [currentMode, setCurrentMode] = useState(null);

  // CRUD operations
  const addPlayer = player => {
    if (!player.name) return;

    if (players.find(x => x.name === player.name) !== undefined) {
      return;
    }

    if (player.id === undefined)
      player.id = players[players.length - 1].id + 1;

    setPlayers([...players, player]);
  }

  const deletePlayer = id => {

    setPlayers(players.filter(player => player.id !== id));
  }

  const updatePlayer = (id, updatedPlayer) => {

    setPlayers(players.map(player => (player.id === id ? updatedPlayer : player)));
  }

  const addFirstElevent = player => {
    if (!player.name) return;

    if (firstElevent.find(x => x.name === player.name) !== undefined) {
      return;
    }
    setFirstElevent([...firstElevent, player])
  }

  const deleteFirstElevent = id => {
    setFirstElevent(firstElevent.filter(player => player.id !== id));
  }

  const dragPlayer = (player, mode) => {
    if (mode === 'player') {
      setCurrentMode('player');
    } else if (mode === 'firstEleven') {
      setCurrentMode('firstEleven');
    } else {
      return;
    }

    setCurrentPlayer({ id: player.id, name: player.name });

    if (players.find(x => x.name === player.name) !== undefined) {
    } else {
    }
  }

  const dropPlayer = (dropPlace) => {

    if(currentMode === dropPlace) return

    if (currentMode === 'player') {
      addFirstElevent(currentPlayer);
      deletePlayer(currentPlayer.id);

    } else if (currentMode === 'firstEleven') {
      addPlayer(currentPlayer);
      deleteFirstElevent(currentPlayer.id);
    }
  }

  const childPlayer = {
    players, currentPlayer, dragPlayer, addPlayer, deletePlayer, dropPlayer
  };

  const childFirstElevent = {
    firstElevent, currentPlayer, dragPlayer, addFirstElevent, deleteFirstElevent, dropPlayer
  };

  return (
    <div>
      <div className='form-player'>
        <h3>Add player to your team</h3>
        <AddPlayerForm players={players} addPlayer={addPlayer} />
      </div>

      <div className='flex'>
        <Player {...childPlayer} />

        <FirstElevent {...childFirstElevent} />
      </div>

      {/*
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <Autocomplete id="new-todo"
          onChange={this.handleChange}
          value={this.state.text} suggestions={this.state.playerData} />
        <button>
          Add #{this.state.players.length + 1}
        </button>
      </form> */}
    </div>
  );


  /*
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
    if (this.state.text.length === 0) {
      return;
    } else if (this.state.players.find(this.state.text)) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: this.state.players.id
    };
    this.setState(state => ({
      players: state.players.concat(newItem),
      text: ''
    }));
  }

  onDelete(item) {
    console.log(item)
    let updatedPlayer = this.state.players.filter(function (val, index) {
      return item !== val;
    });

    this.setState({
      players: updatedPlayer
    });
  }*/
}

export default SoccerApp;