// const USER_STATE = {
//     // accesstoken: '0c15ee2f-f542-48b2-a9f2-27aec5d9bda2'
// }
import {setCache,getCache} from '../utils/cache';
const cacheKey='cnode-user-key';
const user_cache=getCache(cacheKey)?getCache(cacheKey):{};//读取缓存
const  USER_STATE={...user_cache}
export default function user(prestate = USER_STATE, action) {
    switch (action.type) {
        case 'loginSuccess':
            let sucessState = { ...prestate, ...action };
            setCache(cacheKey, sucessState);
            return sucessState;
        case 'loginFail':
            let failState = { ...prestate, ...action };
            setCache(cacheKey, failState);
            return failState;
        default:
            return { ...prestate };
    }
}