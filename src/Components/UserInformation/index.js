import React from "react";
import Button from "../Button";
import "./UserInformation.css";

const UserInformation = (props) => {
  const { name, location, avatar_url,bio,company,blog,html_url } = props.users;
  return (
    <div className="user-info">
      <div className="text-center">
        <img src={avatar_url} className="user-info__avt" alt="img" />
        <p className="fw-bold text-primary">{name}</p>
        {location?<p><span className="fw-bold">Location: </span>{location}</p>:null}
      </div>
      <div className="user-profile fs-6">
        {bio?<p className="fw-bold ">Bio</p>:null}
        <p >{bio}</p>
        {name?<p><span className="fw-bold ">Username: </span>{name}</p>:null}
        {company?<p><span className="fw-bold ">Company: </span>{company}</p>:null}
        {blog?<p><span className="fw-bold ">Blog: </span><a href={blog} >{blog}</a></p>:null}
        <a href={html_url}><Button label="Visit GitHub Profile" color="dark" margin ="mt-3" /></a>
      </div>
    </div>
  );
};

export default UserInformation;
