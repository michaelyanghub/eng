/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/sort-comp */

import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import Panel from '../../components/user/panel';
import { getCollectList } from '../../actions/user';

@connect(function (store) {
  return { ...store.user }
}, function (dispatch) {
  return {}
})
class Index extends Component {

  config = {
    navigationBarTitleText: '用户中心'
  }
  state = {
    collect_topics: []
  }

  componentWillReceiveProps() {
  }

  componentWillMount() {
    getCollectList({ loginname: this.props.loginname }).then(result => {
      this.setState({
        collect_topics: result.data
      })
    });
  }
  componentWillUnmount() { }

  componentDidMount() {
    console.log(24, this.props)
  }
  componentDidShow() { }

  componentDidHide() { }

  render() {
    let {loginname,avatar_url} = this.props;
    let {collect_topics}=this.state;
    return (
      <View className='index'>
        <Panel listData={collect_topics} title='收藏的话题列表' />
      </View>
    )
  }
}

export default Index
