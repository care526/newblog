import { MenuItem } from './type';

const houduan: MenuItem = {
  text: '后端',
  children: [
    {
      text: 'Go',
      children: [
        { text: 'Go官方文档', link: 'http://docscn.studygolang.com/', logo: 'http://docscn.studygolang.com/favicon.ico' },
        { text: 'Go语言简介', link: 'http://c.biancheng.net/view/1.html', logo: 'http://c.biancheng.net/favicon.ico' },
        {
          text: 'Gin文档',
          link: 'https://learnku.com/docs/gin-gonic/2018/gin-readme/3819',
          logo: 'https://cdn.learnku.com/uploads/images/201807/14/1/K1ijsbTBcU.png',
        },
        { text: 'Go语言圣经', link: 'https://yar999.gitbook.io/gopl-zh/', logo: 'https://app.gitbook.com/public/images/icon-512.png' },
        { text: 'Go语言101', link: 'https://gfw.go101.org/article/101.html', logo: 'https://gfw.go101.org/static/go101/images/101-v1.ico' },
      ],
    },
    {
      text: 'Rust',
      children: [
        {
          text: 'Rust高级编程',
          link: 'https://learnku.com/docs/nomicon/2018',
          logo: 'https://cdn.learnku.com//uploads/communities/Qj48vezkYfZM1ZM5Y75X.png',
        },
      ],
    },
    {
      text: '数据库',
      children: [
        {
          text: 'Mysql官方文档',
          link: 'https://dev.mysql.com/doc/refman/8.0/en/entering-queries.html',
          logo: 'https://labs.mysql.com/common/themes/sakila/favicon.ico',
        },
        {
          text: 'TypeORM 中文文档 - find',
          link: 'https://typeorm.biunav.com/zh/find-options.html',
          logo: 'https://typeorm.biunav.com/images/favicon.ico',
        },
      ],
    },
    {
      text: 'Nginx',
      children: [{ text: 'Nginx官方文档', link: 'https://www.nginx.cn/doc/index.html', logo: 'http://nginx.org/favicon.ico' }],
    },
  ],
};

export default houduan;
