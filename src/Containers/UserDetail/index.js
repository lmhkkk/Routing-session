import React, { Component } from "react";
import Button from "../../Components/Button";
import UserDetailAPI from "../../Services/UserDetail";
import UserInformation from "../../Components/UserInformation";
import UserRepository from "../../Components/UserRepository";

class UserDetail extends Component {
  state = {
    users: {},
    repos: [],
  };
  async componentDidMount() {
    try {
      const login = this.props.match.params.login;
      const response = await UserDetailAPI.detailUser(login);
      const responseRepos = await UserDetailAPI.reposUser(login);
      this.setState({
        users: response.data,
        repos: responseRepos.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  onBackToHome = () => {
    // this.props.history.push('/');
    this.props.history.goBack();
  };
  render() {
    const { users,repos } = this.state;
    return (
      <>
        <div className="d-flex align-items-center ">
          <Button
            label="Back to Home"
            color="light"
            margin="mt-3"
            additional= {<i className="fa fa-arrow-left"></i>}
            onClick={this.onBackToHome}
          />
          <div>
            <p className="pt-3 px-3 fw-bold">
              Hierable: {users.hireable ? (
                <i className="fa fa-check-circle" style={{ color: "green" }} />
              ) : (
                <i className="fa fa-check-circle" style={{ color: "red" }} />
              )}
            </p>
          </div>
        </div>
        <UserInformation users={users} />
        <p className="fw-bold fs-3 my-4">Repositories</p>
        <UserRepository repos={repos}/>
      </>
    );
  }
}

export default UserDetail;
