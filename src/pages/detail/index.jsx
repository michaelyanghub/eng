/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/sort-comp */
/* eslint-disable taro/this-props-function */

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './detail.less';
import { getTopicInfo, admireTopic,replyContent } from '../../actions/topiclist';
import TopicInfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';
import ReplyContent from '../../components/topicinfo/ReplyContent';

// const isweapp = process.env.TARO_ENV=='weapp';

@connect(function (store) {
    return {
        // getTopicInfo,
        topicinfo: store.topiclist.topicinfo,
        replies: store.topiclist.replies,
        user: store.user,
        admireState: store.topiclist.admireState //点赞状态
    }
}, function (dispatch) {
    return {
        getTopicInfo(params) {
            dispatch(getTopicInfo(params))
        }
        // ,
        // admire(reply) {
        //     dispatch(admireTopic(reply))
        // }
    }
})
class Detail extends Component {
    config = {
        navigationBarTitleText: '话题详情'
    }
    state = {
        'showReplyContent': false,
    }
    componentWillMount() {
        
        this.getDetail();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.admireState != nextProps.admireState) {
            //发生变化 请求数据
            this.getDetail();
        }
    }
    getDetail() {
        let params = { id: this.$router.params.topicid, mdrender: true, accesstoken: this.props.user.accesstoken }
        this.props.getTopicInfo && this.props.getTopicInfo(params)
    }
    // 点赞-dispatch-redux
    // admire(reply) {
    //     let params = { replyid: reply.id, accesstoken: this.props.user.accesstoken };
    //     this.props.admire && this.props.admire(params)
    // }
    //点赞-直接状态返回
    admire(reply) {
        let params = { replyid: reply.id, accesstoken: this.props.user.accesstoken };
        admireTopic(params)
            .then(result => {
                // if (result.success) {
                this.getDetail();
                // }
            })
    }
    replyContent(content) {
        let { user } = this.props;
        let { currentReply } = this.state;
        let reply_id = currentReply ? currentReply.id : null;
        let preName = currentReply ? '@' + currentReply.author.loginname + '   ' : '';//评论人的昵称
        let params = { reply_id: reply_id, content: preName + content, accesstoken: user.accesstoken, topicid: this.$router.params.topicid }
        replyContent(params).then(result => {
            if (result.success) {
                this.getDetail();
                this.closeReplyContent();
            }
        })
    }
    closeReplyContent() {
        this.setState({ showReplyContent: false });
    }
    Reply() {
        this.setState({ showReplyContent: true });
    }
    replyToReply(reply) {
        this.setState({ currentReply: reply, showReplyContent: true })
    }
    render() {
        let { topicinfo, replies } = this.props;
        let { showReplyContent } = this.state;
        return (<View className='detail'>
            {showReplyContent ? <ReplyContent onOKReplyContent={this.replyContent.bind(this)} onCancelReplyContent={this.closeReplyContent.bind(this)} /> : null}
            <TopicInfo topicinfo={topicinfo} />
            <Replies onReplyToReply={this.replyToReply.bind(this)}
                replies={replies}
                onAdmire={this.admire.bind(this)}
            />
            <Button className='replyBtn' onClick={this.Reply.bind(this)}>回复</Button>
        </View>)
    }
}
export default Detail;  