import axios from 'axios';

const api = 'https://api.chucknorris.io/jokes/';

const getQueryStringFromObject = (props) => {
  let del = '?';
  return Object.keys(props).map((key, i) => {
    if (i > 0) {
      del = '&';
    }
    return `${del}${key}=${props[key]}`;
  }).join('');
};

const getRequest = ({ method = 'get', path, data }) => {
  switch (method) {
    case 'get':
    case 'delete': return {
      method,
      url: api + path + getQueryStringFromObject(data)
    };
    case 'post':
    case 'put': return {
      method,
      url: api + path,
      data
    };
    default: return undefined;
  }
};

const communicate = async (params) => {
  const request = getRequest(params);
  if (request) {
    return axios(request);
  }
};

export default communicate;
