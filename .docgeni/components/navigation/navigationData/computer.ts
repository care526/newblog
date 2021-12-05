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
    // {
    //   text: '视频',
    //   children: [{ text: '', link: '' }],
    // },
  ],
};

export default computer;
