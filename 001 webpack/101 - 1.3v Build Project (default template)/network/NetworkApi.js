import axios from 'axios';
/* eslint import/no-unresolved: [2, { ignore: ['config'] }] */
import { backendServiceHost } from 'config';
// import store from '../redux/store'


//Readme
//для запросов использовать обертку axios
//используем перменная backendServiceHost
//для чтения/записи redux используем store.getState() / store.dispatch({type: DICT_LOAD_DATA});
//для вывода ошибок используем import { notification } from 'antd';

//01 - реализована обертка tryCatch в которую передаем функцию в случаи ошибки проект не скрашиться

//url в axios   url: `${backendServiceHost}api/currency/list`,
//делает запрос на  '/api/': 'http://172.30.71.195:9080/SBOL-Business/', см. Webpack config (proxy)




export const NetworkApi = {
  //пример который возвращает ответ
  exampleReturnRequest: async () =>{
    //обертка для try/catch
    return await tryCatch(async () => {
      return await axios({
        url: `${backendServiceHost}api/currency/list`,
        method: 'post'
      }).then(response => {
        if (response && response.data && response.data.error === "0") {
          return response.data.list;
        }
        else{
          //используя обертку tryCatch можно самому выкинуть ошибку
          throw(response && response.data && response.data.error || 'Error');
        }
      });
    });
  },
  //пример который ничего не возвращает
  exampleRequest:  () =>{
    //обертка для try/catch
    tryCatch(async () => {
      return await axios({
        url: `${backendServiceHost}api/currency/list`,
        method: 'post'
      }).then(response => {
        //обработка запроса
        if (response.error === "0") {
          return response.data.list;
        }
        else{
          //используя обертку tryCatch можно самому выкинуть ошибку
          throw(response.error || 'Error');
        }
      });
    });
  },



};


//обертка try catch
async function tryCatch(func) {
  try {
    return await func();
  } catch (e) {
    console.error('---ОШИБКА', e);
    
  }
}



