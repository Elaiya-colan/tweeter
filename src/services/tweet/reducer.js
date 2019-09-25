import actionType from './actiontype';

const tweetReducer = (state = { listTweeterData: null, postMessageStatus: null }, action) => {
    switch (action.type) {
        case actionType.POST_TWEET_SUCCESS: {
            return {
                ...state,
                postMessageStatus: action.payload
            }
        }
        case actionType.GET_TWEETS_SUCCESS: {
            return {
                ...state,
                listTweeterData: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default tweetReducer;