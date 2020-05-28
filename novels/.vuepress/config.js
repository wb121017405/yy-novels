const fs = require("fs");
// 选择所有目录名渲染出侧边栏
const novels_lib = fs.readdirSync("./novels").splice(4);
let slidebar_entend = [];
novels_lib.map((item, index) => {
  slidebar_entend[index] = {
    title: item,
    children: fs.readdirSync("./novels/" + item + "").map(item2 => {
      return [item + "/" + item2.split(".md")[0], item2.split(".md")[0]];
    })
  };
});
module.exports = {
  title: "yy小说",
  description: "脆皮鸡们的yy小说",
  themeConfig: {
    nav: [
      { text: "推书格式", link: "/" },
      { text: "YY作者", link: "/YY-Author.md" },
      { text: "模板", link: "/TPL.md" }
    ],
    sidebar: slidebar_entend
  }
};
