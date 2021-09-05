import React, { Component } from 'react';
import UserDetailAPI from '../../Services/UserDetail';


class UserDetail extends Component {
  state = {
    users : {},
    repos: [],
  }
  async componentDidMount(){
    const login = this.props.match.params.login;
    try{
      const response = await UserDetailAPI.detailUser(login);
      const responseRepos = await UserDetailAPI.reposUser(login);
      this.setState({
        users: response.data,
        repos : responseRepos.data,
      })
    }catch(err){
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        UserDetail
      </div>
    );
  }
}

export default UserDetail;