import FetchMock from 'fetch-mock';

FetchMock.mock('/login', (url,opts) => {
  console.log(opts);
  let bodyData = opts.body;
  if (bodyData.account === '1') {
    if (bodyData.password === '1') {
      return {
        code: 200,
        message: 'success'
      }
    } else {
      return {
        code: 401,
        message: '密码错误'
      }
    }
  } else {
    return {
      code: 400,
      message: '用户名不存在'
    }
  }
});

FetchMock.mock('/forget', {
  code: 200,
  message: 'success'
});