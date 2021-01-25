import Mock from 'mockjs'
import { DOMAIN } from './constants'

// 登录
Mock.mock(DOMAIN + '/login', {
    code: 200,
    msg: 'OK',
    data: {
        nickname: '兔子先生',
        accessToken: 'fqh0i-LyINZ-RvK5d-Akj3a-uBYRl',
    }
})

// 提交数据
Mock.mock(DOMAIN + /getData/, 'get', {
    code: 200,
    msg: '数据提交成功',
    data: {}
})