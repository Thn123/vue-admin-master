import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';//axios的模拟调试器；
import { LoginUsers, Users } from './data/user';
let _Users=Users;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
    console.log(config);//reply响应的数据;
      let {username, password} = JSON.parse(config.data);

      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          //some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
          let hasUser = LoginUsers.some(u =>{
            if (u.username===username && u.password===password){
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, {code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });
    //axios.post('/login', params).then(res => res.data);

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name} = config.params;
      //filter() 方法将匹配元素集合缩减为匹配指定选择器的元素。
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      //响应数据
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{
            total:total,
            users:mockUsers
          }]);
        },1000);
      });
    });
    //忠诚度管理
    mock.onGet('/user/list2').reply(config => {
      let total = _Users.length;
      //响应数据
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{
            total:total,
            users: _Users
          }]);
        },1000);
      });
    });


    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {page=1,name,limit=20}=config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < limit* page && index >= limit * (page - 1));

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{
            total:total,
            users:mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config =>{
      //reply相当于响应后的数据
      //config.params为 axios的配置信息,对应有url,para,header等，一般路由请求路由不写在config中
      let { id } = config.params;
      _Users = _Users.filter(u => u.id === id);
      return new Promise((resolve, reject) => {
        setTimeout(() =>{
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        },500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params;
      _Users.some(u =>{
        if (u.id === id){
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let {name, addr, province, ID, city,email, tel} = config.params;
      _Users.push({
        name:name,
        addr:addr,
        province:province,
        ID:ID,
        city:city,
        email:email,
        tel:tel
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });
  }
};