import Mock from 'mockjs';
const LoginUsers =[
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i<50; i++){
  //返回的数据是{[{},{}],}
  Users.push(Mock.mock({
    id:'@increment',
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    province:Mock.Random.province(),
    ID:Mock.Random.id(),
    city:Mock.Random.city(),
    email:Mock.Random.email(),
    tel:/^1[385][1-9]\d{8}/,
    store:['雪花秀'],
    //'age|18-60':1,
    display_time: '@datetime',
    creatTime:Mock.Random.date('yyyy-MM-dd'),
    display_total:Mock.Random.natural(100, 400 ),
    title:Mock.Random.ctitle(5, 10),
    birth:Mock.Random.date(),
    sex :Mock.Random.integer(0, 1),
    pic:Mock.Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
    state:Mock.Random.integer(0,1),
    type:['会员升降级'],
    //储值卡列表
    Cardid:['432352554'],
    balance:['455'],
    cardType:['磁条储值卡'],
    cardIssuer:['深圳'],
    receiveCardStore:['深圳和平店'],
    ExpireTime:['2017-4-4'],
    CashContent:['1'],
    StoredValueState:['挂失']

  }));
}

export {LoginUsers, Users };
