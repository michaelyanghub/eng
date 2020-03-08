/* eslint-disable react/sort-comp */
/* eslint-disable react/react-in-jsx-scope */

import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import Menu from '../../components/menu/menu';
import TopicList from '../../components/topiclist/topiclist';
import { getCache } from '../../utils/cache';
const cacheKey = 'cnode-user-key';

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() { }

  componentDidMount() {
  }
  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Menu />
        <TopicList />
      </View>
    )
  }
}

export default Index
