import React, { useState } from 'react'
import AutoComplete from "../AutoComplete/AutoComplete";

const AddPlayerForm = props => {
	const [players] = useState(props.players);

	const players_name = players.map(val=>val.name)

	const initState = { id: null, name: '' };
	const [player, setPlayer] = useState(initState);

	const onSubmit = (e) =>{
		e.preventDefault();


		props.addPlayer(player);
		setPlayer(initState);
	}

	return (
		<form onSubmit={onSubmit}>
			<label>Player Name: </label>
			<AutoComplete setPlayer={setPlayer} suggestions={players_name} />
			<button>Add new player</button>
		</form>
	)
}

export default AddPlayerForm