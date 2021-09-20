import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
// import { robots } from './Robos.js'
import Scroll from '../Components/Scroll';
import './App.css';

import { setSearchField, robotRequest } from '../action';



const mapStateToProps = state => {
    return {
        searchField: state.searchRobot.searchField,
        robots: state.robotRequest.robot,
        isPending: state.robotRequest.isPending,
        error: state.robotRequest.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRobotRequest: () => dispatch(robotRequest())
    }
}


class App extends Component {
    componentDidMount() {
        this.props.onRobotRequest();
    }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const searchFilter = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return isPending ?
            <h1>Loading</h1> :
            (
                <div className="tc bg-light-blue">
                    <div className="stickyHeader">
                       <h1 style={{display: 'inline-block', fontFamily: "cursive"}}>RobosFriends</h1>
                        <SearchBox onSearchChange={onSearchChange}/>
                    </div>
                    <Scroll>
                        <CardList robots={searchFilter}/>
                    </Scroll>
                </div>
            );

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(App);