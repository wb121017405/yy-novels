const fs = require("fs");
// 选择所有目录名渲染出侧边栏
const novels_lib = fs.readdirSync("./novels").splice(5);
let slidebar_entend = [];
novels_lib.map((item, index) => {
  slidebar_entend[index] = {
    title: item,
    children: fs.readdirSync("./novels/" + item + "").map(item2 => {
      return [item + "/" + item2.split(".md")[0], item2.split(".md")[0]];
    })
  };
});
function getTime(){
  let date=new Date();
  let now_time = date.getFullYear()+'-'+parseInt(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  return now_time;
}
module.exports = {
  // 引入百度统计
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3a3169e5d886751cf060391e574f1ce0";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  title: "yy小说",
  base: "/yy-novels/",
  description: "脆皮鸡们的yy小说",
  themeConfig: {
    nav: [
      { text: "推书格式", link: "/" },
      { text: "必看", link: "/must.md" },
      { text: "YY作者", link: "/YY-Author.md" },
      {
        text:"最近更新时间："+ getTime(),
        link: "https://github.com/wb121017405/yy-novels/commits/master"
      },
      { text: "github", link: "https://github.com/wb121017405/yy-novels/" }
    ],
    sidebar: [["/", "简介"], ...slidebar_entend]
  },
  plugins: [
    [
      // 评论插件
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        options: {
          el: "#valine-vuepress-comment",
          appId: "8aW60X6Gmv1Dy8APCuaBf2Ye-gzGzoHsz",
          appKey: "u1dpOD0936ykPg8JkXE5x76Q",
          meta:['nick','mail'],
          path:'<%- frontmatter.to.path %>',
          placeholder: "来喷我呀笨蛋！"
        }
      }
    ]
  ]
};
