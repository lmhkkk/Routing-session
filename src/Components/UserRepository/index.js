import React from "react";
import "./Repository.css";

const UserRepository = (props) => {
  const { repos } = props;

  return (
    
    <div className="row" >
      {repos.map((item, index) => {
        const { name, fork, forks_url, description } = item;

        return (
          <div className="display__item  col-12 col-md-6 p-2" key={index}>
            <p className="text-primary  fw-bold">{name}</p>
            {fork ? (
              <div>
                <span className="text-secondary">Fork from <a href={forks_url}>{forks_url}</a></span>
                <p>{description}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default UserRepository;
