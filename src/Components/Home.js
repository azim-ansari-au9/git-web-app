import React, { Component } from "react";
import User from "./Users/User";
import axios from "axios";
import Search from "./Search";

class Home extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false });
  }

  searchUserHandler = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };
  clearUserHandler = () => {
    this.setState({ users: [], loading: false });
  };
 
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
  
  render() {
    const { users, loading } = this.state;
    // console.log('azim',this.state)
 
    return (
      <>
        <div className="card">
          <Search
            searchUser={this.searchUserHandler}
            clearUser={this.clearUserHandler}
            viewClear={users.lenght > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <br />
          <User loading={loading} users={users}  />
        </div>
      </>
    );
  }
}
export default Home;
