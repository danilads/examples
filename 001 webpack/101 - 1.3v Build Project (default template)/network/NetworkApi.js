import axios from 'axios';
import { backendServiceHost } from 'config';
// import store from '../redux/store'


// Readme
// для запросов использовать обертку axios
// используем перменная backendServiceHost
// для чтения/записи redux используем store.getState() / store.dispatch({type: DICT_LOAD_DATA});
// для вывода ошибок используем import { notification } from 'antd';

// 01 - реализована обертка tryCatch в которую передаем функцию в случаи ошибки проект не скрашиться

// url в axios   url: `${backendServiceHost}api/currency/list`,
// делает запрос на  '/api/': 'http://172.30.71.195:9080/SBOL-Business/', см. Webpack config (proxy)

// обертка try catch
async function tryCatch(func) {
  try {
    return await func();
  } catch (e) {
    console.error('---ОШИБКА', e);
    return '';
  }
}

export const NetworkApi = {
  // пример который возвращает ответ
  exampleReturnRequest: async () => {
    // обертка для try/catch
    return tryCatch(async () => {
      return axios({
        url: `${backendServiceHost}api/currency/list`,
        method: 'post'
      }).then(response => {
        // используя обертку tryCatch можно самому выкинуть ошибку
        if (response && response.data && response.data.errorInfo && response.data.errorInfo.errorCode !== '0') {
          throw ((response && response.data && response.data.errorInfo && response.data.errorInfo.errorCode && response.data.errorInfo.errorDescription) || 'Error');
        }
        return response.data.list;
      });
    });
  },
  // пример который ничего не возвращает
  exampleRequest: () => {
    // обертка для try/catch
    tryCatch(async () => {
      axios({
        url: `${backendServiceHost}api/currency/list`,
        method: 'post'
      }).then(response => {
        // используя обертку tryCatch можно самому выкинуть ошибку
        if (response && response.data && response.data.errorInfo && response.data.errorInfo.errorCode !== '0') {
          throw ((response && response.data && response.data.errorInfo && response.data.errorInfo.errorCode && response.data.errorInfo.errorDescription) || 'Error');
        }
        console.log(response.data.list);
      });
    });
  }
};
