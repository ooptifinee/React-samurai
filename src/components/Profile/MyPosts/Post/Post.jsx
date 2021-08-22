import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='../../../image/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg' alt=''/>
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;