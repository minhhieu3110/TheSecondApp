import axios from 'axios';
import {handleExpiredToken, throttle} from './helper';

import store from '@redux/store'; // Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.
// axios.defaults.baseURL = 'http://san.baoan.app24h.net:81/api/';
axios.defaults.baseURL = 'https://san.thietkewebsite.info.vn/api/';
const getDataBody = config => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

//TODO: REQUEST
axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__ && config.url) {
      console.log(
        `%c [REQUEST] ${config?.url}`,
        'color: #458B00; font-weight: bold',
        config,
      );
      console.log('url:', config.url);
      console.log('method:', config.method);
      console.log('data:', config.data);
      console.log('params:', config.params);
    }

    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);

//TODO: RESPONSE
axios.interceptors.response.use(
  response => {
    if (__DEV__ && response.config.url) {
      console.log(
        `%c [RESPONSE] ${response.config.url}`,
        'color: #CD950C; font-weight: bold',
        response,
      );
      console.log('status:', response.status);
      console.log('data:', response.data);
    }

    return response;
  },
  error => {
    if (__DEV__) {
      console.log(
        `%c [RESPONSE ERROR] ${error.config.url}`,
        'color: #EE3B3B; font-weight: bold',
        {dataHeader: error.config.data},
        {paramsHeader: error.config.params},
        JSON.stringify(error.response.data, null, 2),
        error,
      );
    }
    handleExpiredToken(error);
    return Promise.reject(error.response.data);
  },
);
axios.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = state.user.token;
    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

export default class HttpService {
  static generateHeader(headers) {
    const token = store.getState()?.appToken?.data;

    let options = {
      'Content-Type': headers,
      Accept: 'application/json',
    };
    if (token) {
      options.Authorization = `Bearer ${token}`;
      // options = {
      //   ...options,
      //   Authorization: `Bearer ${token}`,
      // };
    }

    return options;
  }

  //TODO: GET
  static async get(url, params = {}) {
    try {
      return await axios
        .get(url, {
          headers: {
            get: this.generateHeader(),
          },
          params: {...params},
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: POST
  static async post(url, body, params = {}) {
    try {
      return await axios
        .post(url, body, {
          headers: {
            post: this.generateHeader('application/json'),
          },
          params: {...params},
        })

        .then(response => response.data);
    } catch (error) {
      throw error.message;
    }
  }
  //TODO: FORM_DATA
  static async postFormData(url, formData, params = {}) {
    //
    try {
      return await axios
        .post(url, formData, {
          headers: {
            post: this.generateHeader('multipart/form-data'),
          },
          params: {...params},
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: PUT
  static async put(url, body, params = {}) {
    try {
      return await axios
        .put(url, body, {
          headers: HttpService.generateHeader(),
          params: {...params},
        })
        .then(response => response.body);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: PATCH
  static async patch(url, body, params = {}) {
    try {
      return await axios
        .patch(url, body, {
          headers: this.generateHeader('application/json'),
          params: {...params},
        })
        .then(response => response.body);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: DELETE
  static async delete(url, params = {}) {
    try {
      return await axios
        .delete(url, {
          headers: this.generateHeader(),
          params: {...params},
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }
}
