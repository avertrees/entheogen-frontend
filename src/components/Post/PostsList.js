import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
import Post from './Post'

const PostsList = (props) => {
    const renderCards = props.posts.map(post =>
        <Link key={post.id} to={`/posts/${post.id}`}> <Post key={post.id} postObj={post} handleClick={props.handleClick} /> </Link>
    );
    return (
        <Card.Group>
            {/* {cards} */}
            {renderCards}
        </Card.Group>
    );
};

export default PostsList;