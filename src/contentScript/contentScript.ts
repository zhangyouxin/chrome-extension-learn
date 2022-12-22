chrome.runtime.sendMessage("/users/create", (response) => {
  console.log(response);
});

// document.body.style.backgroundColor = "orange";

// document.addEventListener("DOMContentLoaded", function () {
//   injectCustomJs();
// });

// injectCustomJs();
// // 向页面注入JS
// function injectCustomJs() {
//   console.log("injectCustomJs");
//   const jsPath = "inject.js";
//   var temp = document.createElement("script");
//   temp.setAttribute("type", "text/javascript");
//   // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
//   const path = chrome.runtime.getURL(jsPath);
//   console.log("runtime js", path);

//   // TODO chrome extension 无法加载本地文件
//   // temp.setAttribute("src", path);
//   document.body.appendChild(temp);
// }

// import {Client} from 'chomex';
 
// const client = new Client(chrome.runtime);
 
// const testClient = async () => {
//     // it sends message to "/users/get" route.
//     const jack = {name: 'jack', age: 30};
//     const response = await client.message('/users/create', {user: jack});
//     console.log("Created!", response.data);
    
//     // const res = await client.message('/users/get', {id: 12345});
//     // console.log("Found:", res.data);
// }
// testClient();