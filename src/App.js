import React, { Component } from 'react';
import CardList from "./CardList"
import SearchBox from "./SearchBox"
// import { robots } from './Robos.js'
import Scroll from './Scroll.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    SearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const searchFilter = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc bg-light-blue">
	    				<h1 style={{display: 'inline-block'}}>RobosFriends</h1>
	    				<SearchBox onSearchChange={this.SearchChange}/>
                        <Scroll>
	        			<CardList robots={searchFilter}/>
                        </Scroll>
        			</div>
            );

        }


    };

}

export default App;