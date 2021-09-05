import React, { Component } from "react";
import Button from "../Button";
import "./SearchUser.css";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onSearchOnchange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  onSubmitSearchUser = (e) => {
    e.preventDefault();
    this.props.onfetchUser(this.state.search);
    this.setState({
      search: "",
    })
  };
  render() {
    const { search } = this.state;
    const {isShowButtonClear,onClearUsers} = this.props;
    return (
      <div className="search">
        <form onSubmit={this.onSubmitSearchUser}>
          <input
            name="search"
            placeholder="Enter username..."
            value={search}
            className="search__input"
            onChange={this.onSearchOnchange}
          />
          <Button  
          label = "Search User"
          type = "submit"
          color= "primary"
          />
          {isShowButtonClear&&(          
          <Button  
          label = "Clear User"
          type = "button"
          color= "secondary"
          onClick={onClearUsers}
          />)}

        </form>
      </div>
    );
  }
}

export default SearchUser;
