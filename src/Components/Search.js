import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
    state={
        text:''
    };
    static propTypes = {
        searchUser : PropTypes.func.isRequired,
        clearUser : PropTypes.func.isRequired,
        viewClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    onChangeHandler=(e)=>{
        this.setState({text:e.target.value})
    };
    onSubmitHandler=(e)=>{
        e.preventDefault();
        // prompt('dsbfhds')
        
        if(this.state.text.length===''){
            this.props.setAlert('Please enter something','light')
        }else{
            this.props.searchUser(this.state.text);
            this.setState({text:''})
        }
    }
    render() {
        const {viewClear, clearUser} = this.props;
        return (
            <div className='col-md-12'>
                <form onSubmit={this.onSubmitHandler} className='form col-md-12'>
                    <input required type='text ' name='text' placeholder='Write Github user name..' className='btn col-md-6' value={this.state.text}
                        onChange={this.onChangeHandler}
                    />
                    <input type='submit' value='Search' className='btn btn-light col-md-5 .ml-auto' /><br /><br />
                </form>
                {
                    {viewClear} && ( 
                    <center>
                    <button className="btn btn-light btn-block col-md-4" onClick={clearUser}>Clear</button>
                    </center>
                    )
                }
            </div>
        )
    }
}

export default Search
