/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfad29c42c186ee07',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '47b0e9362afb30cb9a4d8d151fb0e6d9',
  IS_SHOW_COLOR: true,
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: true,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: true,
    // 古诗古文
    poetry: true,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  PROVINCE: '北京市',
  CITY: '北京市',
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZzpR6ejg766hg66z6GGg9IEkKPU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'hsGRnZfreFR9XhdEh-dw2Yjljoo4tnIG2JphwpphHFw',

      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-13',
      horoscopeDateType: '今日',
      openUrl: 'https://m.niucodata.com/cat/cat.php',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '08-13',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '燕子', year: '1997', date: '09-08',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '05-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-05-30' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'cWoCQF4PY4I93TW3eGA_5OOvTwlNnbXUgPy0XCtuvu0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZzpR6ejg766hg66z6GGg9IEkKPU',
    }
  ],

}

module.exports = USER_CONFIG

