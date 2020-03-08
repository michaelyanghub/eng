import  Taro,{Component} from '@tarojs/taro';
import  {View,Image,Text} from  '@tarojs/components';
import './head.less';

class  Head  extends   Component{
    render(){
        return (<View className='head-view'>
            <Image className='head-view-back' src={require('../../assets/img/loginBack.jpg')} />
            <Image className='head-view-head' src={require('../../assets/img/head.png')} />
            <Text className='login-head-name'>名字</Text>
        </View>)
    }
}
export default  Head;