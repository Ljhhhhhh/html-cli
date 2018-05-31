import './common/polyfill.js';
import $ from 'jquery';
$(function () {
  let btn = document.getElementById('submit_btn');
  btn.onclick = async (e) => {
    e.preventDefault();
    let opts = {};
    opts.account = $('#account').val();
    opts.password = $('#password').val();
    console.log(opts);
    let data = await submitFun(opts);
    console.log('data:', data);
  }
  const submitFun = (opts) => {
    return fetch('/login', {
      method: 'POST',
      mode: 'cors',
      header: {
        "Content-Type": "application/x-www-form-urlencode"
      },
      credentials: 'include',
      body: opts
      // body: new URLSearchParams(opts).toString()
    }).then(res => {
      return res.json();
    })
  }
})