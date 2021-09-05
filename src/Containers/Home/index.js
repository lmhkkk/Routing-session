import React, { Component } from "react";
import Users from "../../Components/Users";
import UserAPI from "../../Services/user";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading:false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        isLoading:true,
      })
      const response = await UserAPI.fetchUsers();
      this.setState({
        users: response.data,
        isLoading:false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { users,isLoading } = this.state;
    return (
      <div className="mt-3">
        <Users users={users} isLoading={isLoading}/>
      </div>
    );
  }
}

export default Home;
