const axios = require('axios');

const headers = {
  Cookie: 'JSESSID=2f6ed423c7b2106640ffe7c57b3bb100',
  host: 'm-xusong.taihe.com',
  Origin: 'https://m-xusong.taihe.com',
  Referer: 'https://m-xusong.taihe.com/dynamic/news/286',
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.56',
};

const http = async (url = '') => {
  if (url === '') {
    console.log('输入的url为空，请检查代码重新请求');
    return;
  }
  const res = await axios(url, headers);
  return res.data.result.news.content;
};

module.exports = http;
