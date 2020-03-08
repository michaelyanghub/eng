const TOPIC_STATE = {
    page: 1,
    limit: 20,
    list: [],
    topicinfo: {},
    replies: [],
    admireState: false //点赞状态
}
export default function topiclist(prestate = TOPIC_STATE, action) {
    switch (action.type) {
        case 'admireSucess':
            // debugger
            return { ...prestate, admireState:!prestate.admireState }
        case 'getTopicList':
            return { ...prestate, list: action.list } 
        case 'getTopicInfo':
            return { ...prestate, replies: action.infoData.replies, topicinfo: { ...action.infoData, replies: null } }
        case 'appendTopicList':
            return { ...prestate, list: prestate.list.concat(action.list), page: action.page }
        default:
            return { ...prestate }
    }
}