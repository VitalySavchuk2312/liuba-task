import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.user_posts);
  }
  render() {
    return <div>{this.props.posts.body}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state.posts);
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
