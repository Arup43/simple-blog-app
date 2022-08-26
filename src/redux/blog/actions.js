import {FILTER_BY_TAG, FILTER_BY_SEARCH, FILTER_BY_AUTHOR} from './actionTypes'

export const filterByTag = (tag) => {
    return {
        type: FILTER_BY_TAG,
        payload: tag
    }
}

export const filterBySearch = (searchKeyword) => {
    return {
        type: FILTER_BY_SEARCH,
        payload: searchKeyword.toLowerCase()
    }
}

export const filterByAuthor = (author) => {
    return {
        type: FILTER_BY_AUTHOR,
        payload: author
    }
}