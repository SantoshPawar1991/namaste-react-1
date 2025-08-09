import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "default",
        login: "default",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await data.json();      
     this.setState({
        userinfo: json
    });
  }
  render() {
    const {id , name, location , login} = this.state.userinfo;

     return (
      <div>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increse Counter
        </button> */}
        {/* <h2>Count: {this.state.count}</h2>
        <h2>Count2 : {this.state.count2}</h2> */}

        <h2>Id: {id}</h2>
        <h4>Name: {name}</h4>
        <h4>Location : {location}</h4>
        <h4>Contact : {login}</h4>
      </div>
    );
  }
}

export default UserClass;
