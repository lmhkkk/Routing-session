import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Loading from "../Loading/Loading";
import UsersItem from "../UserItem";

const Users = (props) => {
  const { users, isLoading } = props;

  return (
    <Fragment>
      <Loading isLoading={isLoading} />
      <div className="row">
        {users.map((userItem, index) => {
          return <UsersItem users={userItem} key={index} />;
        })}
      </div>
    </Fragment>
  );
};

export default Users;
