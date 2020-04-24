import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>App</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
