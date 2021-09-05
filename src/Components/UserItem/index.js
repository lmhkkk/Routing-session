import React from "react";
import "./UserItem.css";
import { useHistory } from "react-router";
import Button from "../Button";

const UsersItem = (props) => {
  const { login, avatar_url } = props.users;
  const history = useHistory();
  const onLinktoDetailUser = ()=>{
    history.push(`/users/${login}`)
  }
  return (
    <div className="user col-12 col-md-6 col-lg-4">
      <img src={avatar_url} className="user__avt" alt="img" />
      <p className="user__name">{login}</p>
      <Button className="mt-2" label="MORE" color="secondary" onClick={onLinktoDetailUser}/>

    </div>
  );
};

export default UsersItem;
