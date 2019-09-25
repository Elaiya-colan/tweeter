import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTweet, getTweet } from '../../services/tweet/action';

class TweetsPage extends Component {
    state = {
        content: " "
    }
    componentWillMount() {
        this.props.getTweet();
    }
    onTweet = (e) => {
        const { content } = this.state;
        e.preventDefault()
        this.props.postTweet({ content })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        console.log(this.props)
        return (
            <section className="loginSection">
                <div className="loginBg">
                    <div className="loginInner">
                        <form>
                            <h4 className="loginTitle">Tweeter</h4>
                            <div className="form-group">
                                <textarea onChange={(e) => this.handleChange(e)} type="text" name="content" className="form-control" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn" onClick={(e) => this.onTweet(e)}>Tweet</button>
                            </div>

                            <ul>
                                  {this.props.listTweetsData.map((data)=> <li>{data.content}</li>)}
                            </ul>   
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => {
    const listTweetsData = (state.tweetReducer.listTweeterData && state.tweetReducer.listTweeterData.data) || []
    return {
        listTweetsData
    }
}
const mapDispatchToProps = { postTweet, getTweet }

export default connect(mapStateToProps, mapDispatchToProps)(TweetsPage);