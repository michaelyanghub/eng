import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { myTimeToLocal } from '../../utils/date';
import './topic.less';

class Topic extends Component {
   //跳转到详情页
   goToDetail(topic) {
      Taro.navigateTo({ url: '/pages/detail/index?topicid=' + topic.id });
   }
   getLable(item) {
      let labal = '';
      let cName = '';
      if (item.top) {
         labal = '置顶';
         cName = 'topic-up';
      } else if (item.tab == 'share') {
         labal = '分享';
         cName = 'topic-up blue';
      } else if (item.tab == 'ask') {
         labal = '问答';
         cName = 'topic-up blue';
      } else {
         labal = '其他';
         cName = 'topic-up blue';
      }
      return (<Text className={cName}>{labal}</Text>);
   }
   render() {
      let { item } = this.props;

      return (<View className='topiclist-topic' onClick={this.goToDetail.bind(this, item)} >
         <Image className='head-img' src={item.author ? item.author.avatar_url : ''} />
         <View className='right'>
            <View className='topic-title'>
               {this.getLable(item)}
               <Text>{item.title}</Text>
            </View>
            <View className='topic-info'>
               <Text>{item.author ? item.author.loginname : ''}</Text>
               <Text>{item.reply_count + '/' + item.visit_count}</Text>
               <Text>创建时间{myTimeToLocal(item.create_at)}</Text>
            </View>
         </View>
      </View>)
   }
}
export default Topic;