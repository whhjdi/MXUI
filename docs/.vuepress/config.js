module.exports = {
  title: '沐雪UI',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'wanghandi.top' },
    ],
    sidebar: [
      '/',
      {
        title: '开发指南',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button.md'
        ]
      },
    ]
  }
}
