const fs = require("fs");
const http = require("./utils/index.js");

async function getRes() {
  const res = await http(
    "https://m-xusong.taihe.com/api/NEWS/getNewsDetail.json?newsId=286"
  );
  fs.writeFile("index.html", res, function (err, res) {
    if (err) throw err;
    console.log("创建成功");
  });
}

getRes();
