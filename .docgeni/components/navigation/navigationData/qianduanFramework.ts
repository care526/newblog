import { MenuItem } from './type';

const qianduanFramework: MenuItem = {
  text: '框架',
  children: [
    {
      text: 'JQuery',
      children: [{ text: 'WinUI', link: 'https://www.win-ui.cn/', logo: 'https://www.win-ui.cn/img/logo.png' }],
    },
    {
      text: 'React',
      children: [
        {
          text: 'CreateReactApp',
          link: 'https://create-react-app.bootcss.com/',
          logo: 'https://create-react-app.dev/img/logo.svg',
        },
        {
          text: 'Ant Design',
          link: 'https://ant.design/components/overview-cn/',
          logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        },
        {
          text: 'Semi Design',
          link: 'https://semi.design/zh-CN/',
          logo: 'https://lf9-static.semi.design/obj/semi-tos/images/favicon.ico',
        },
        {
          text: 'React Suite',
          link: 'https://rsuitejs.com/',
          logo: 'https://user-images.githubusercontent.com/1203827/39177217-3c49254c-47e1-11e8-9380-760c9e25c48e.png',
        },
        { text: 'Remix', link: 'https://remix.run/', logo: 'https://remix.run/favicon-light.1.png' },
        { text: 'ChatUI', link: 'https://chatui.io', logo: 'https://gw.alicdn.com/tfs/TB1ZY1ycUD1gK0jSZFGXXbd3FXa-142-142.png' },
        { text: 'MUI', link: 'https://mui.com/zh/', logo: 'https://mui.com/static/favicon.ico' },
        { text: 'Zarm', link: 'https://zarm.design/#/components/button', logo: 'https://zarm-vue.gitee.io/favicon.ico' },
        { text: 'Recoil', link: 'https://www.recoiljs.cn', logo: 'https://www.recoiljs.cn/img/logo.svg' },
        { text: 'BuildYourWwnReact', link: 'https://pomb.us/build-your-own-react/', logo: 'https://pomb.us/favicon.ico' },
      ],
    },
    {
      text: 'Vue',
      children: [
        { text: 'VueJs', link: 'https://cn.vuejs.org/v2/api/', logo: 'https://cn.vuejs.org/images/logo.svg' },
        { text: 'Vue Router', link: 'https://router.vuejs.org/zh/', logo: 'https://cn.vuejs.org/images/logo.svg' },
        { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/', logo: 'https://cn.vuejs.org/images/logo.svg' },
        {
          text: 'VueUse',
          link: 'https://vueuse.org/',
          logo: 'https://d33wubrfki0l68.cloudfront.net/a5780e53fee68ddd1cd73a00484151d2d052cb4d/b7469/logo-vertical.png',
        },
        { text: 'Pinia', link: 'https://pinia.esm.dev/', logo: 'https://pinia.esm.dev/logo.svg' },
        { text: 'Vue CLI', link: 'https://cli.vuejs.org/zh/', logo: 'https://cn.vuejs.org/images/logo.svg' },
        { text: 'VuePress', link: 'https://www.vuepress.cn/', logo: 'https://vuepress.vuejs.org/hero.png' },
        { text: 'ElementUI', link: 'https://element.eleme.io/#/zh-CN', logo: 'https://avatars.githubusercontent.com/u/12810740?s=200&v=4' },
        {
          text: 'Ant Design Vue',
          link: 'https://www.antdv.com/docs/vue/introduce-cn/',
          logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        },
        { text: 'Vant', link: 'https://youzan.github.io/vant/#/zh-CN/', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
        {
          text: 'iview',
          link: 'http://v1.iviewui.com/docs/introduce',
          logo: 'https://file.iviewui.com/dist/d6fcbeecd3f5ff1b1dd0a0f68bdf6ce7.svg',
        },
        { text: 'NutUI', link: 'https://nutui.jd.com/#/index', logo: 'https://nutui.jd.com/3x/3.1.12/logo-red.png' },
        { text: 'Zarm', link: 'https://zarm-vue.gitee.io/#/documents/quick-start', logo: 'https://zarm-vue.gitee.io/favicon.ico' },
        { text: 'Naive UI', link: 'https://www.naiveui.com/zh-CN/os-theme', logo: 'https://www.naiveui.com/assets/naivelogo.93278402.svg' },
        {
          text: 'Artirly Vue Admin',
          link: 'https://artiely.gitee.io/antd-admin/#/analysis',
          logo: 'https://artiely.gitee.io/antd-admin/static/img/logo.c0bae758.svg',
        },
      ],
    },
    {
      text: 'Angular',
      children: [
        { text: 'Angular', link: 'https://angular.cn/docs', logo: 'https://angular.cn/assets/images/logos/angular/angular.svg' },
        {
          text: 'Material',
          link: 'https://material.angular.cn/components/categories',
          logo: 'https://material.angular.cn/assets/img/angular-material-logo.svg',
        },
        {
          text: 'NG-ZORRO',
          link: 'https://ng.ant.design/components/overview/zh',
          logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        },
        { text: 'NGRX', link: 'https://next.ngrx.io/', logo: 'https://next.ngrx.io/assets/images/badge.svg' },
        { text: 'Docgeni', link: 'https://docgeni.org/', logo: 'https://cdn.pingcode.com/open-sources/docgeni/logo.png' },
        { text: 'ng-nice', link: 'https://www.zhihu.com/column/ng-nice', logo: '' },
      ],
    },
    {
      text: 'uni-app',
      children: [
        {
          text: '文档',
          link: 'https://uniapp.dcloud.io/',
          logo: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg',
        },
        { text: 'uView', link: 'https://www.uviewui.com/components/intro.html', logo: 'https://www.uviewui.com/common/logo.png' },
      ],
    },
    {
      text: 'NestJs',
      children: [
        { text: '文档1', link: 'https://nestjs.bootcss.com', logo: 'https://nestjs.bootcss.com/img/logo.png' },
        { text: '文档2', link: 'https://docs.nestjs.cn/', logo: 'https://nestjs.bootcss.com/img/logo.png' },
        {
          text: '文档3',
          link: 'https://www.bookstack.cn/read/nestjs-7-zh/introduction.md',
          logo: 'https://nestjs.bootcss.com/img/logo.png',
        },
      ],
    },
    {
      text: 'UI设计规范',
      children: [
        {
          text: 'Fluent UI',
          link: 'https://developer.microsoft.com/zh-cn/fluentui#/',
          logo: 'https://developer.microsoft.com/favicon.ico',
        },
        {
          text: 'antd',
          link: 'https://ant.design/docs/spec/introduce-cn',
          logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        },
        {
          text: 'material',
          link: 'https://material.io/',
          logo: 'https://material.io/static/angular/material_logo.1d5336632349ee8653bf.svg',
        },
        {
          text: 'apple',
          link: 'https://developer.apple.com/design/',
          logo: 'https://www.apple.com.cn/v/home/hi/images/overview/holiday-2021/holiday_logo__cin7if5cjxpy_large_2x.png',
        },
      ],
    },
  ],
};

export default qianduanFramework;
