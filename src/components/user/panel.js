import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './panel.less';
import { myTimeToLocal } from '../../utils/date';
class Panel extends Component {
    render() {
        let { title, listData } = this.props;
        return (<View className='topic-panel'>
            <View className='topic-panel-title'>{title}</View>
            {listData.map(item => {
                return (<View className='topic-panel-list'>
                    <Image className='topic-panel-list-img' src={item.author.avatar_url} />
                    <Text className='topic-panel-list-title'>{item.title}</Text>
                    <Text className='topic-panel-list-data'>{myTimeToLocal(item.create_at)}</Text>
                </View>)
            })}

        </View>)
    }
}
export default Panel;