import React, { Component } from "react";

import { getFavoriteShowsByUserId } from "../BAPI";

class ProfileHome extends Component {
  state = {
    data: null
  };

  getData = async () => {
    try {
      const response = await getFavoriteShowsByUserId(this.props.userId);

      this.setState({
        data: response
      });
    } catch (e) {
      // handle error here
      console.log(e);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.props.children({
          ...this.state
        })}
      </div>
    );
  }
}

export default ProfileHome;
