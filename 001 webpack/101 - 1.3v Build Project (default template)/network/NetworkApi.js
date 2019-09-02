import axios from "axios";
import {backendServiceHost} from 'config';
//import store from '../store/configureStore'
import {notification} from 'antd';


//Readme
//для запросов использовать обертку axios
//используем перменная backendServiceHost
//для чтения/записи redux используем store.getState() / store.dispatch({type: DICT_LOAD_DATA});
//для вывода ошибок используем import { notification } from 'antd';

//01 - реализована обертка tryCatch в которую передаем функцию в случаи ошибки выведит ошибку через (antd notification)
//     по возможности использовать ее - см. ниже метод exampleReturnRequest




export const NerworkApi = {
  //пример который возвращает ответ
  exampleReturnRequest: async () =>{
    //обертка для try/catch
    return await tryCatch(async () => {
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
    notification.open({message: 'Ошибка', description: e, type: 'error'});
  }
}



