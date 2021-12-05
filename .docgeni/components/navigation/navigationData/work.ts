import { MenuItem } from './type';

const work: MenuItem = {
  text: '工作',
  children: [
    {
      text: '文档',
      children: [
        { text: '支付对接', link: 'https://www.lcsw.cn/doc/index.html', logo: 'https://www.lcsw.cn/doc/gitbook/images/favicon.ico' },
        {
          text: '分账对接',
          link: 'https://www.lcsw.cn/doc/internal/fenzhang.html',
          logo: 'https://www.lcsw.cn/doc/gitbook/images/favicon.ico',
        },
      ],
    },
    {
      text: '测试环境',
      children: [
        {
          text: '商户管理后台',
          link: 'http://test.lcsw.cn:8045/lcsw_saobei/lock_screen.jsp',
          logo: 'https://www.lcsw.cn/20170616033613576_easyicon_net_48.ico',
        },
        { text: '接口测试', link: 'http://test.lcsw.cn:8045/demo/', logo: 'https://www.lcsw.cn/20170616033613576_easyicon_net_48.ico' },
        { text: '营销管理后台', link: 'http://192.168.1.61:4200', logo: 'https://oauth.saobei.cn/favicon.ico' },
      ],
    },
    {
      text: '正式环境',
      children: [
        {
          text: '商户管理后台',
          link: 'http://beta.lcsw.cn/lcsw/lock_screen.jsp',
          logo: 'https://www.lcsw.cn/20170616033613576_easyicon_net_48.ico',
        },
        { text: '营销管理后台', link: 'https://mkt.lcsw.cn', logo: 'https://oauth.saobei.cn/favicon.ico' },
      ],
    },
    {
      text: '软件',
      children: [
        { text: 'tapd', link: 'https://www.tapd.cn/company/participant_projects?from=left_tree2', logo: 'https://www.tapd.cn/favicon.ico' },
        {
          text: '文件管理',
          link: 'http://test.lcsw.cn:8196/kod/index.php?user/login',
          logo: 'http://test.lcsw.cn:8196/kod/static/images/common/ico.png',
        },
        {
          text: '蓝湖',
          link: 'https://lanhuapp.com/web/#/item?fid=all&commonly=all',
          logo: 'https://lhcdn.lanhuapp.com/web/static/favicon.ico',
        },
        { text: 'Jenkins', link: 'http://192.168.0.243:8080', logo: 'https://www.jenkins.io/favicon.ico' },
        { text: '微信公众平台', link: 'https://mp.weixin.qq.com', logo: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico' },
        {
          text: '支付宝开放平台',
          link: 'https://open.alipay.com/platform/home.htm',
          logo: 'https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico',
        },
      ],
    },
    // {
    //   text: '近期使用',
    //   children: [
    //     { text: '中台接口文档-25', link: 'http://192.168.1.25:8080/lcsw/swagger-ui.html' },
    //     { text: '中台接口文档-27', link: 'http://192.168.1.27:8081/lcsw/swagger-ui.html' },
    //     {
    //       text: '营销中台原型',
    //       link: 'https://org.modao.cc/app/2c0df809615574d6c4633a963df680fd0e4fd8b3?simulator_type=device&sticky#screen=skghnj1yt7xerrc',
    //     },
    //   ],
    // },
    {
      text: '我的服务器',
      children: [
        {
          text: 'docker管理',
          link: 'http://115.29.243.9:9000/#/home',
          logo: 'http://115.29.243.9:9000/dc4d092847be46242d8c013d1bc7c494.png',
        },
      ],
    },
  ],
};

export default work;
