import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, getUserPosts } from "../actions";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  async onHandleClick(id) {
    await getUserPosts(id);
    this.props.history.push("/user-posts");
  }
  renderList() {
    return this.props.users.map(user => {
      return (
        <div className="item" key="user.id">
          <img className="avatar" alt=""></img>
          <div className="content">
            <div className="description">
              <h3>{user.name}</h3>
              <Link to={`/${user.id}`}>Posts</Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">{this.renderList()}</ul>
      </div>
      //<div className="">PostList</div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers, getUserPosts })(
  UsersList
);
