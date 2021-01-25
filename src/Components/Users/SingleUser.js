import React, { Component } from "react";
import axios from "axios";
import Giphy from './Giphy';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import UserRepos from "./UserRepos";


class SingleUser extends Component {
  state = {
    user: [],
    loading: true
  }

   //getting single user :
   getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: true });
  };

  componentDidMount() {
    this.getUser(this.props.match.params.login)
  }

  static propTypes = {
    loading:PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser:PropTypes.func.isRequired
  }
  render() {
    console.log(this.state);
    const {
      name,
      html_url,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      followers,
      following,
      public_repos,
    } = this.state.user;

    const { loading } = this.props;
    if(loading) 
      return <Giphy />

    return <> 
    <div className='card grid' >

    <Link to='/Home' className='btn'>
      Back Home
    </Link>
      <div className='card ' >
        <img src={avatar_url} className='rounded mx-auto d-block' alt='photo' style={{width:'150px', borderRadius:'50px'}} />
        <h1 className='text-center'>{name}</h1>
        <p className='text-center'>Location : {location}</p>
        <div className='new text-center' >
          <div className='badge badge-info' >Public Repos:{public_repos}</div>
          <div className='badge badge-primary' >Followers:{followers}</div>
          <div className='badge badge-success' >Following:{following}</div>
        </div><br/> 
        <div className='row justify-content-start'>
            <div className='col col-6'>
              {bio &&(
                <> 
                <h3>Bio</h3>
                <p>
                  {bio}
                </p>
                </>
              )}
              <ul>
                <li>
                    {login &&(
                      <>
                      <strong>Username:</strong>{login}</>
                    )}
                </li>
                <li>
                    {company &&(
                      <>
                      <strong>Company:</strong>{company}</>
                    )}
                </li>
                <li>
                    {blog &&(
                      <><strong>Website:</strong>
                      <a className='badge badge-info' href= {blog} target='_blank' >
                      {blog}
                      </a>
                      </>
                    )}
                </li>
              </ul>
            </div>
          <div className='col-6'>
            <UserRepos login={this.props.match.params.login}  /></div>
          </div>
        </div>
      </div>
    </>;
  }
}

export default SingleUser;
