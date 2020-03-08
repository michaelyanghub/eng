/* eslint-disable react/sort-comp */
/* eslint-disable react/react-in-jsx-scope */

import { Component } from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './login.less'
import Head from '../../components/head/head';
import { accessUserToken } from '../../actions/user'

@connect(function (store) {
  return { user: store.user }
}, function (dispatch) {
  return {
    accessUserToken(params) {
      return dispatch(accessUserToken(params))
    }
  }
})
class Login extends Component {

  config = {
    navigationBarTitleText: '用户中心'
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() { }

  componentDidMount() {
  }
  componentDidShow() { }

  componentDidHide() { }

  changeToken(event) {
    if (event && event.target) {
      this.setState({ token: event.target.value })
    }
  }
  //验证token
  loginToken() {
    if (this.state.token) {
      if (this.props.accessUserToken) {
        this.props.accessUserToken({ accesstoken: this.state.token }).then(result => {
          Taro.redirectTo({ url: '/pages/user/user' })
        })
      }
    } else {
      Taro.showToast({ title: '请输入秘钥再进行登录验证!', icon: 'none' })
    }
  }
  render() {
    return (
      <View className='login-body'>
        <Head />
        <View className='form'>
          <Input placeholder='请输入accesstoken' className='access_input' onInput={this.changeToken.bind(this)} />
          <Button className='btn_login' onClick={this.loginToken.bind(this)}>登陆</Button>
        </View>
      </View>
    )
  }
}

export default Login