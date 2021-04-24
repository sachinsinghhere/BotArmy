import React, { Component } from "react";

import SearchBox from "./components/SearchBox";
import BotBook from "./screens/BotBook";
import { bots } from "./components/bots";
class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: bots,
      searchedValue: "",
    };
  }

  onSearchAction = (event) => {
    this.setState({ searchedValue: event.target.value });
  };
  render() {
    const filteredBots = this.state.bots.filter((bots) => {
      //      console.log(this.state.searchedValue);

      return bots.name
        .toLowerCase()
        .includes(this.state.searchedValue.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="bg-purple tc sanserif pa3 white sw5"> BotArmy </h1>
        <SearchBox searchAction={this.onSearchAction} />
        <BotBook bots={filteredBots} />
      </div>
    );
  }
}
export default App;
