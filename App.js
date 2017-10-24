/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import{createStore} from 'redux';
import Main from './components/Main';
import {Provider} from 'react-redux';



const appState ={

  arrWord : [{ id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
  { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
  { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
  { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
  { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
  { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
  { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
  { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
  { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
  { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
  { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
  { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
  { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
  { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
],
filterStatus:'SHOW_ALL',
isAdding:false

}



 const myreduser = (state = appState, action) => {
switch(action.type){
case 'SHOW_ALL' : return{...state,filterStatus:'SHOW_ALL'}

case 'DA_NHO' : return{...state,filterStatus:'DA_NHO'}

case 'CHUA_NHO' : return{...state,filterStatus:'CHUA_NHO'}

default:
break;

}

  
      return state;
  }


const store=createStore(myreduser);





export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <Main/>

      </Provider>
    
    );
  }
}


