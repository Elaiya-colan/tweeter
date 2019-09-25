import axios from '../../config/axios';
import URL from '../../config/configUrl';
import actionType from '../tweet/actiontype';

export const postTweet = (payload) => dispatch => {
    axios.post(URL.HANDLE_TWEET, payload, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        dispatch(getTweet())
        dispatch({
            type: actionType.POST_TWEET_SUCCESS,
            payload: response.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getTweet = (payload) => dispatch => {
        axios.get(URL.HANDLE_TWEET, payload, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            dispatch({
                type: actionType.GET_TWEETS_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}