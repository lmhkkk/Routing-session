import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import UserAPI from "../../Services/user"
import Users from "../../Components/Users";
import Alert from "../../Layouts/Alert";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isShowButtonClear: false,
      isShowAlert: false,
    };
  }
  
  //fetch User //cách 1
  // fetchUser=(search)=>{
  // axios.get(`https://api.github.com/search/users?q=${search}`
  // ).then((response)=>{
  //   this.setState({
  //     users: response.data.items,
  //   })
  // }).catch((err) =>{
  //   console.log(err);
  // })
  // }

  //fetch User //cách 2
  onfetchUser = async (search) => {
    if(!search){
      this.setState({
        isShowAlert:true,
      });
      setTimeout(() => {
        this.setState({
          isShowAlert: false,
        })
      }, 2000);
      return;
    }
    try{
      this.setState({
        isLoading: true,
        users: [],
      })
      const response = await UserAPI.searchUser(search);
      this.setState({
        users: response.data.items,
        isLoading:false,
        isShowButtonClear: true,
      });
    }catch(err){
      console.log(err);
    }
  };

  onClearUsers = ()=>{
    this.setState({
      users: [],
      isShowButtonClear:false,
    })
  }

  render() {
    const {users, isLoading,isShowButtonClear,isShowAlert} = this.state;
    return (
      <div>
        {isShowAlert &&
        <Alert  msg="Please enter the user name before searching"
        type = "danger"/>
        }
        <SearchUser onfetchUser={this.onfetchUser} 
        isShowButtonClear={isShowButtonClear}
        onClearUsers={this.onClearUsers}/>
        <Users users={users} isLoading={isLoading} />
      </div>
    );
  }
}

export default Search;
