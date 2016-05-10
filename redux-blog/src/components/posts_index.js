import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; // don't need when passing fetchPosts object to connect
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of Blog Posts
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex); // refactor to below and remove function
export default connect(null, { fetchPosts })(PostsIndex);
