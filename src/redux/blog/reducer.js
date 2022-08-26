import { FILTER_BY_TAG, FILTER_BY_SEARCH, FILTER_BY_AUTHOR } from "./actionTypes";
import initialState from "./initialState";
import allBlogs from "./allBlogs";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_TAG:
            return [
                ...allBlogs.filter(blog => blog.tag === action.payload)
            ]
        case FILTER_BY_SEARCH:
            return [
                ...allBlogs.filter(blog => blog.title.toLowerCase().includes(action.payload))
            ]
        case FILTER_BY_AUTHOR:
            return [
                ...allBlogs.filter(blog => blog.authorName === action.payload)
            ]
        default:
            return state;
    }
}

export default reducer;