import axios from 'axios';
//axios的默认配置值
// axios.defaults.headers.common['Authorization'] = '';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// let base = "http://139.217.206.242";
let base='';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
export const getUserList2 = params => { return axios.get(`${base}/user/list2`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };