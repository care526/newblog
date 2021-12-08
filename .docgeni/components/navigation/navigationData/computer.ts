import { MenuItem } from './type';

const computer: MenuItem = {
  text: '计算机基础',
  children: [
    {
      text: '面向对象',
      children: [
        {
          text: '面向对象程序设计——Java语言',
          link: 'https://www.icourse163.org/learn/ZJU-1001542001?tid=1207383215#/learn/content?type=detail&id=1212814841&cid=1216234819',
          logo: 'https://edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png',
        },
      ],
    },
    {
      text: '数据结构',
      children: [
        {
          text: '随笔分类 - 数据结构',
          link: 'https://www.cnblogs.com/xiaozhongfeixiang/category/1544341.html',
          logo: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a6b37c859dd4efcb63cd9965f81f7b6~tplv-k3u1fbpfcp-watermark.image',
        },
        {
          text: 'awesome-coding-js',
          link: 'https://github.com/ConardLi/awesome-coding-js',
          logo: 'https://github.githubassets.com/favicons/favicon.png',
        },
      ],
    },
    {
      text: '视频',
      children: [
        { text: '算法初步', link: 'https://www.bilibili.com/video/BV1XL411M7a6', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'grep、sed、awk', link: 'https://www.bilibili.com/video/BV1244y1e73a', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: '计算机基础', link: 'https://www.bilibili.com/video/BV1mY411s7bh', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'Nginx', link: 'https://www.bilibili.com/video/BV1Nq4y137xK', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'Nginx', link: 'https://www.bilibili.com/video/BV1yU4y1T7E8', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'Redis', link: 'https://www.bilibili.com/video/BV1hb4y1B7Nm', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'Apple design principles', link: 'https://www.bilibili.com/video/BV1BS4y1X7TC', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'AI For Everyone', link: 'https://www.bilibili.com/video/BV1yL411u7q6', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: '计算机组成原理', link: 'https://www.bilibili.com/video/BV1kU4y177x9', logo: 'https://www.bilibili.com/favicon.ico' },
        { text: 'Linux-shell', link: 'https://www.bilibili.com/video/BV1d3411t7Js', logo: 'https://www.bilibili.com/favicon.ico' },
      ],
    },
    {
      text: '演讲',
      children: [
        { text: '马斯克2012年在加州理工学院励志演讲', link: 'https://www.bilibili.com/video/BV1Tv411L7Pz', logo: 'https://www.bilibili.com/favicon.ico' },
      ]
    },
    {
      text: '访谈',
      children: [
        { text: '门罗访谈马斯克完整版', link: 'https://www.bilibili.com/video/BV1734y1Z7ig', logo: 'https://www.bilibili.com/favicon.ico' },
      ]
    }
  ],
};

export default computer;
