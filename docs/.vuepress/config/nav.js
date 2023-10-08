module.exports = [
  {text: '首页', link: '/'},
  {
    text: '基础',
    link: '/Basic/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '🔗 浅说区块链', items: [
          {text: '什么是区块链', link: '/pages/b1d6f0/'},
          {text: '区块链运行机制', link: '/pages/f05744/'},
          {text: '共识机制解析', link: '/pages/760309/'},
          {text: '区块链应用类型', link: '/pages/beb460/'},
          {text: '区块链与数字货币', link: '/pages/bcd010/'},
          {text: '体验数字货币', link: '/pages/d1bdd5/'},
          {text: '区块链的误区', link: '/pages/0412fb/'},
          {text: '主流区块链项目', link: '/pages/44771b/'},
        ]},
      {text: '💰 数字货币与资产', items:[
          {text: '比特币专题（一）', link: '/pages/643bf4/'},
          {text: '比特币专题（二）', link: '/pages/d7f562/'},
          {text: '数字货币与资产', link: '/pages/c7b65c/'},
          {text: '数字货币交易平台（一）', link: '/pages/f99733/'},
          {text: '数字货币交易平台（二）', link: '/pages/ce8c1d/'},
        ]},
      {text: '🌐 区块链与互联网', items:[
          {text: '互联网与区块链身份', link: '/pages/f52b5e/'},
          {text: '区块链即服务BaaS', link: '/pages/07265b/'},
          {text: '数字货币钱包服务', link: '/pages/544590/'},
          {text: '区块链与供应链（一）', link: '/pages/a31e00/'},
          {text: '区块链与供应链（二）', link: '/pages/257d79/'},
        ]},
      {text: '🚀 如何从业', items:[
          {text: '区块链从业指南', link: '/pages/b07e3b/'},
          {text: '搭建迷你区块链（设计篇）', link: '/pages/cc294f/'},
        ]}
    ]
  },
  {
    text: '应用',
    link: '/app/',
    items: [
      // {text: '金融与DeFi', link: '/pages/8309a5b876fc95e3/'},
      // {text: 'GameFi', link: '/pages/0a83b083bdf257cb/'},
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '🛠 基础概念', items: [
          {text: '技术基础', link: '/pages/2891ec/'},
          {text: '哈希与加密算法', link: '/pages/1b529e/'},
          {text: 'UTXO与普通账户模型', link: '/pages/e34a22/'},
          {text: '去中心化与区块链交易性能', link: '/pages/c20ffb/'},
        ]},
      {text: '🔗 区块链类型与项目', items:[
          {text: '区块链项目详解：比特股BTS', link: '/pages/f44276/'},
          {text: '引人瞩目的区块链项目：EOS、IOTA、Cardano', link: '/pages/e1efde/'},
          {text: '国内区块链项目技术一览', link: '/pages/3acc46/'},
        ]},
      {text: '🔐 加密与安全', items:[
          {text: 'P2P网络', link: '/pages/2399cd/'},
          {text: '共识算法与分布式一致性算法', link: '/pages/2a9520/'},
          {text: 'PoW共识', link: '/pages/be15fc/'},
          {text: 'PoS', link: '/pages/95c4df/'},
          {text: 'DPos', link: '/pages/df4d93/'},
        ]},
      {text: '💻 开发与实践', items:[
          {text: '智能合约与以太坊', link: '/pages/b6e30f/'},
          {text: '搭建一条属于自己的智能合约', link: '/pages/b6e30f/'},
        ]},
      {text: '🔄 联盟链', items:[
          {text: '联盟链和它的困境', link: '/pages/537e9d/'},
        ]},
    ]
  },
  {
    text: '行业动态',
    link: '/IndustryNews/',
    items: [
      // {text: '面试题库', items: [
      //   {text: 'HTML', link: '/pages/58734d/'},
      //   {text: 'CSS', link: '/pages/26864d/'},
      //   {text: 'jQuery', link: '/pages/ceea45/'},
      //   {text: 'Vue', link: '/pages/4547e6/'},
      //   {text: '零碎', link: '/pages/a134b2/'}
      // ]}
      // ,
      // {text: '面试心得', items: [
      //   {text: '杂言碎语', link: '/pages/331dbf/'},
      // ]}
    ]
  },
  {
    text: '读书派', 
    link: '/bookssent/',
    items: [
      {text: '摘抄收录', items: [
        {text: '☆ 励志鸡汤', link: '/ChickenSoup/'},
        {text: '❀ 人间烟火', link: '/PassionLife/'},
        {text: '☣ 万物沦丧', link: '/ThingsLost/'},
        {text: '✌ 关掉烦恼', link: '/NoTrouble/'},
        {text: '✲ 小酒馆', link: '/Bistro/'}
      ]}, //link: '/pages/wordsof/'}
      {text: '读书笔记', items: [
        {text: '《小狗钱钱》', link: '/note/xgqq/'},
        {text: '《穷爸爸富爸爸》', link: '/note/qbbfbb/'},
        {text: '《聪明人使用方格笔记本》', link: '/note/cmrsyfgbjb/'}
      ]}
    ]
  },
  {
    text: '更多', 
    link: '/more/',
    items: [
      {text: '📚 学习', link: '/pages/f2a556/'},
      {text: '💡 心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '🔗 友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '🌐 网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '📦 资源', link: '/pages/eee83a9211a70f9d/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '📂 分类', link: '/categories/'},
      {text: '🏷 标签', link: '/tags/'},
      {text: '📅 归档', link: '/archives/'},
    ]
  }
]