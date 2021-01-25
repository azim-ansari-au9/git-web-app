import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';


class UserRepos extends Component {
    
  state = {
    user: [],
    repos:[],
    loading: true
  }
  //geting user repos
  getUserRepos = async (username) => {

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data,html_url: res.data});
  };
  componentDidMount() {
    this.getUserRepos(this.props.login)
  }
  static propTypes = {
    getUser:PropTypes.func.isRequired,
    getUserRepos:PropTypes.func.isRequired
  }

    render() {
        console.log(this.state,'azim')
        
        return (
            <div className='new col-md-5'><h2 style={{color: 'white'}}><span>User Repos</span></h2>
                {
                  this.state.repos.map(repo => <h5><badge className='badge badge-secondary'>{repo.name}</badge></h5>)
                }
            </div>
        )
    }
}

export default UserRepos;
