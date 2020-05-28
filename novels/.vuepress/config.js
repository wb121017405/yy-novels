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
module.exports = {
  // 引入百度统计
  head: [
    ["link", { rel: "icon", href: "/favorite.ico" }],
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
      { text: "更新记录", link: "https://github.com/wb121017405/yy-novels/commits/master" },
      { text: "github", link: "https://github.com/wb121017405/yy-novels/" }
    ],
    sidebar: [["/", "简介"], ...slidebar_entend]
  },
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: '8aW60X6Gmv1Dy8APCuaBf2Ye-gzGzoHsz',
          appKey: 'u1dpOD0936ykPg8JkXE5x76Q'
        }
      }
    ]
  ]
};
