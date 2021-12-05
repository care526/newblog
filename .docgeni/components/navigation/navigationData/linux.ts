import { MenuItem } from './type';

const linux: MenuItem = {
  text: 'Linux',
  children: [
    {
      text: 'Linux',
      children: [
        { text: 'Linux中国', link: 'https://linux.cn/', logo: 'https://img.linux.net.cn/favicon.ico' },
        { text: 'Linux公社', link: 'https://www.linuxidc.com/', logo: 'https://www.linuxidc.com/favicon.ico' },
      ],
    },
  ],
};

export default linux;
