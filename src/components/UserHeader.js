import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {}
  render() {
    const user = this.props.user;
    if (!user) {
      return null;
    }
    return <div className="header"> {user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //es mejor practica si queires hacer cierta logica hacerla dentro del mapstate en lugar directo del component
  return {
    user: state.users.find(user_temp => user_temp.id === ownProps.userId)
  };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
