import { MenuItem } from './type';

const tools: MenuItem = {
  text: '工具',
  children: [
    {
      text: '导航网站',
      children: [
        { text: '艾特网', link: 'https://iiter.cn/', logo: 'https://iiter.cn/favicon.ico' },
        {
          text: '自学之路',
          link: 'https://www.r2coding.com/#/',
          logo: 'https://cdn.jsdelivr.net/gh/justacoder99/r2coding@master/img/r2coding_logo_cover.7hb2s8l3eqk0.png',
        },
      ],
    },
    {
      text: '代码托管平台',
      children: [
        { text: 'github', link: 'https://github.com/', logo: 'https://github.githubassets.com/favicons/favicon.png' },
        { text: 'gitee', link: 'https://gitee.com/', logo: 'https://gitee.com/assets/favicon_message.ico' },
        { text: 'coding', link: 'https://care526.coding.net/user', logo: 'https://assets.codehub.cn/static/favicon.ico' },
        {
          text: 'vercel',
          link: 'https://vercel.com/dashboard',
          logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico',
        },
      ],
    },
    {
      text: '颜色',
      children: [
        { text: '转换', link: 'https://www.sioe.cn/yingyong/yanse-rgb-16/', logo: 'https://www.sioe.cn/favicon.ico' },
        { text: '图片取色', link: 'http://www.jiniannet.com/Page/allcolor', logo: 'http://www.jiniannet.com/favicon.ico' },
      ],
    },
    {
      text: '搜书',
      children: [
        {
          text: '微信读书',
          link: 'https://weread.qq.com',
          logo: 'https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_32h.png',
        },
        { text: 'bookstack', link: 'https://www.bookstack.cn/', logo: 'https://www.bookstack.cn/favicon.ico' },
        { text: '鸠摩', link: 'https://www.jiumodiary.com/', logo: 'https://www.jiumodiary.com/images/favicon.png' },
        { text: '图灵社区', link: 'https://www.ituring.com.cn/book?tab=free', logo: 'https://m.ituring.com.cn/favicon.png' },
        { text: '好读', link: 'http://haodoo.net/', logo: 'http://haodoo.net/image/favicon.ico' },
        { text: '译言图书', link: 'http://book.yeeyan.org/', logo: 'http://cdn.yeeyan.com/images/favicon.ico' },
        { text: '书伴', link: 'https://bookfere.com/', logo: 'https://bookfere.com/favicon.ico' },
        { text: '快搜', link: 'https://ebook.chongbuluo.com/', logo: 'https://search.chongbuluo.com/favicon.ico' },
        {
          text: '免费的编程中文书籍索引',
          link: 'https://github.com/justjavac/free-programming-books-zh_CN',
          logo: 'https://github.githubassets.com/favicons/favicon.png',
        },
        { text: '雅书', link: 'https://yabook.blog/', logo: 'https://yabook.blog/favicon.ico' },
        {
          text: 'awesome',
          link: 'https://github.com/imarvinle/awesome-cs-books',
          logo: 'https://github.githubassets.com/favicons/favicon.png',
        },
      ],
    },
    {
      text: '图片',
      children: [
        { text: '压缩', link: 'https://tinypng.com/', logo: 'https://tinypng.com/images/favicon.ico' },
        { text: '草料二维码', link: 'https://cli.im/', logo: 'https://static.clewm.net/static/images/favicon.ico' },
        { text: '代码图片生成', link: 'https://carbon.now.sh/', logo: 'https://carbon.now.sh/favicon.ico' },
        {
          text: '视频压缩',
          link: 'https://www.flexclip.com/cn/tools/compress-video',
          logo: 'https://www.flexclip.com/templates/site/favicon.ico',
        },
      ],
    },
    {
      text: '文档',
      children: [
        { text: 'processon', link: 'https://www.processon.com/', logo: 'https://www.processon.com/favicon.ico' },
        { text: '石墨文档', link: 'https://shimo.im/dashboard/used', logo: 'https://assets.shimonote.com/from_qbox/favicon.ico' },
        { text: 'smallpdf', link: 'https://smallpdf.com/cn', logo: 'https://smallpdf.com/favicon.png' },
        { text: 'convertio', link: 'https://convertio.co/zh/', logo: 'https://static.convertio.co/favicon.ico' },
        {
          text: 'ALLTOALL在线格式转换',
          link: 'https://www.alltoall.net/html_md-2/',
          logo: 'https://www.alltoall.net/qfy-content/uploads/2016/06/fa70f63e4bbcc259632aae74746ce5d6.png',
        },
        { text: '迅捷PDF转换器', link: 'https://app.xunjiepdf.com/wordfanyi/', logo: 'https://app.xunjiepdf.com/favicon.ico' },
      ],
    },
    {
      text: '云盘',
      children: [
        { text: '百度云盘', link: 'https://pan.baidu.com/', logo: 'https://pan.baidu.com/m-static/base/static/images/favicon.ico' },
        { text: '坚果云', link: 'https://www.jianguoyun.com/d/login', logo: 'https://www.jianguoyun.com/favicon.ico' },
        { text: '腾讯微云', link: 'https://www.weiyun.com/', logo: 'https://img.weiyun.com/vipstyle/nr/box/img/favicon.ico' },
        { text: '奶牛快穿', link: 'https://cowtransfer.com/', logo: 'https://background.c-t.work/apple-icon-57x57.png' },
        { text: '文叔叔', link: 'https://www.wenshushu.cn/', logo: 'https://www.wenshushu.cn/favicon.ico' },
      ],
    },
    {
      text: '翻译',
      children: [
        { text: '有道翻译', link: 'http://fanyi.youdao.com/', logo: 'https://shared.ydstatic.com/images/favicon.ico' },
        { text: '谷歌翻译', link: 'https://translate.google.cn/', logo: 'https://ssl.gstatic.com/translate/favicon.ico' },
        {
          text: '百度翻译',
          link: 'https://fanyi.baidu.com/',
          logo: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/favicon/favicon_d87cd2a.ico',
        },
      ],
    },
    {
      text: '搜索引擎',
      children: [
        { text: '百度', link: 'https://www.baidu.com/', logo: 'https://www.baidu.com/favicon.ico' },
        { text: '必应', link: 'https://cn.bing.com/?mkt=zh-CN', logo: 'https://cn.bing.com/sa/simg/favicon-2x.ico' },
        { text: '谷歌', link: 'https://www.google.com/', logo: 'https://www.google.com/favicon.ico' },
      ],
    },
    {
      text: '壁纸',
      children: [
        { text: 'wallhaven', link: 'https://wallhaven.cc/', logo: 'https://wallhaven.cc/favicon.ico' },
        { text: '美图集', link: 'http://photo.ihansen.org/', logo: 'https://photo.ihansen.org/favicon.ico' },
        { text: 'alphacoders', link: 'https://wall.alphacoders.com/', logo: 'https://static.alphacoders.com/icons/wallpaper/favicon.ico' },
        { text: '彼岸图网', link: 'https://pic.netbian.com/', logo: 'https://pic.netbian.com/favicon.ico' },
        { text: '极简壁纸', link: 'https://bz.zzzmh.cn/index', logo: 'https://bz.zzzmh.cn/favicon.ico' },
        {
          text: '乌云壁纸',
          link: 'http://www.obzhi.com/',
          logo: 'http://www.obzhi.com/wp-content/uploads/2016/09/www.ico.la_512423bc80c1b7f3d5e2f5be43f42407_32X32.ico',
        },
      ],
    },
    {
      text: '邮箱',
      children: [
        {
          text: 'QQ邮箱',
          link: 'https://mail.qq.com/cgi-bin/frame_html?sid=uJb8VObnzZAyWnAv&r=458f70240b878a97fa5c6de41bdec14e',
          logo: 'https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_96h.png',
        },
        {
          text: '临时邮箱',
          link: 'http://24mail.chacuo.net/enus',
          logo: 'http://images.669pic.com/element_pic/81/77/71/79/1dea10aa73639d4bfa30b76ff9fd1ea1.jpg',
        },
        { text: '微信企业邮箱', link: 'https://exmail.qq.com/', logo: 'https://exmail.qq.com/exmail_logo.ico' },
      ],
    },
    {
      text: '内网穿透',
      children: [
        { text: 'ngrok', link: 'https://dashboard.ngrok.com/get-started/setup', logo: 'https://dashboard.ngrok.com/static/favicon.ico' },
      ],
    },
    {
      text: 'VPN',
      children: [{ text: '顺丰资源', link: 'https://sfzy889.blogspot.com/', logo: 'https://sfzy889.blogspot.com/favicon.ico' }],
    },
  ],
};

export default tools;
