import React, { Component} from 'react';
import axios from 'axios'

class TaggedGames extends Component {
    state = {
        games: [],
    };
math.floor(math.random(0,games.length) * math)
    componentDidMount(props) {
        props.taggedGames.map(id => (
            axios.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid='+ id).then(response => 
                console.log(response.data)
        )))
    }

    render() {
        const games = this.state.games
        .map(game => (
            <div className = 'card' key={game.id}>
                <h3>{game.name}</h3>
                <button type='button'>Remove</button>
            </div>
            ));

        return (
            <div>
                <h2>Favorites!</h2>

                {games}
            </div>
        );
    }
}

export default TaggedGames;


// http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json