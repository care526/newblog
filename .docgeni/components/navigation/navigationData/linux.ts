import { MenuItem } from './type';

const linux: MenuItem = {
  text: 'Linux',
  children: [
    {
      text: 'Linux',
      children: [
        { text: 'Linux中国', link: 'https://linux.cn/' },
        { text: '实验楼', link: 'https://www.lanqiao.cn/courses/' },
        { text: 'Linux公社', link: 'https://www.linuxidc.com/' },
      ],
    },
  ],
};

export default linux;
