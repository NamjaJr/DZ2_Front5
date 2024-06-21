import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts, postsInfo, postsInfoBack} from "../../store/PostsSlice";



const PostPage = () => {

    const postsTitle = useSelector(state => state.postsReducer.postsTitle)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[])

    return (
        <div>
            <h1>{postsTitle}</h1>
            <button onClick={() => dispatch(postsInfo())}>change post title</button>
            <button onClick={() => dispatch(postsInfoBack('geeks'))}>title backend</button>
        </div>
    );
};

export default PostPage;