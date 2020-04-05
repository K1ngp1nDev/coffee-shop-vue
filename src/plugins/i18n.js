import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en' : {
    'Все что Вы любите в кофе' 
    : 'Everything You Love About Coffee',
    'Мы делаем каждый день полным энергии и вкуса. Хотите попробовать наши бобы?'
    : 'We make every day full of energy and taste. Want to try our beans?',
    'Подробнее' : 'More',
    'О нас' : 'About Us',
    'Конечность сладости затруднена. В распоряжении хозяина ужасно. Боюсь, что в течение нескольких месяцев делать вещи на в. Ситуация рекомендую возражение сделать так, вопросы. Как удалено призвание приятно улучшить. Последнее, спросите его, холодно чувствую, встретил место, стесняется хотеть Дети мне смеялись, мы с перспективой ответили. На это пошла песня, которая держала лицо помощи.'
    : 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
    'Теперь по месту жительства она клевая. Тень, находясь под его кроватью ее, Много читал как рисовать. Благо для невежественных упражнений любой распакованный сам. Приятный ужасный, но ограниченный день в конце брака. Строгий мебельный гарнитур сохранился далеко, рекомендую. Сделал даже, но ни один не дал надежду. Обеспечить активную жизнь зависит от сына, ремонтировать день дам сейчас.'
    : 'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.',
    'Лучшее' : 'Our best',
    'Дом кофе' : 'Coffee house',
    'Наше кофе' : 'Our coffee',
    'Для вашего удовольствия' : 'For your pleasure',
    'Видео' : 'Video',
    'Галерея' : 'Gallery'
  },
  'ru' : {
    'Everything You Love About Coffee' 
    : 'Все что Вы любите в кофе',
    'We make every day full of energy and taste. Want to try our beans?' 
    : 'Мы делаем каждый день полным энергии и вкуса. Хотите попробовать наши бобы?',
    'More' : 'Подробнее',
    'About Us' : 'О нас',
    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
    : 'Конечность сладости затруднена. В распоряжении хозяина ужасно. Боюсь, что в течение нескольких месяцев делать вещи на в. Ситуация рекомендую возражение сделать так, вопросы. Как удалено призвание приятно улучшить. Последнее, спросите его, холодно чувствую, встретил место, стесняется хотеть Дети мне смеялись, мы с перспективой ответили. На это пошла песня, которая держала лицо помощи.',
    'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.'
    : 'Теперь по месту жительства она клевая. Тень, находясь под его кроватью ее, Много читал как рисовать. Благо для невежественных упражнений любой распакованный сам. Приятный ужасный, но ограниченный день в конце брака. Строгий мебельный гарнитур сохранился далеко, рекомендую. Сделал даже, но ни один не дал надежду. Обеспечить активную жизнь зависит от сына, ремонтировать день дам сейчас.',
    'Our best' : 'Лучшее',
    'Coffee house' : 'Дом кофе',
    'Our coffee' : 'Наше кофе',
    'For your pleasure' : 'Для вашего удовольствия',
    'Video' : 'Видео',
    'Gallery' : 'Галерея'
  }
}

export let i18n = new VueI18n({
  locale: 'en',
  silentTranslationWarn: true,
  messages
})

// export const i18n = new VueI18n({
//     locale: 'en',
//     messages: {
//         en: {
//             mainH1Text: 'Everything You Love About Coffee',
//             mainH2Text: 'We make every day full of energy and taste <br> Want to try our beans?',
//             welcomeMsg: 'Wellcome to Coffee site'
//         },
//         ru: {
//             mainH1Text: 'Все что Вы любите в кофе.',
//             mainH2Text: 'Мы делаем каждый день полным энергии и вкуса. <br> Хотите попробовать наши зерна?',
//             welcomeMsg: 'Добро пожаловать на сайте Кофе'
//         }
//     }
// })
// const messages = {
//   en: {
//     home: {
//         mainH1Text: 'Everything You Love About Coffee',
//         mainH2Text: 'We make every day full of energy and taste <br> Want to try our beans?',
//         welcomeMsg: 'Wellcome to Coffee site'
//     }
//   },
//   ru: {
//     home: {
//         mainH1Text: 'Все что Вы любите в кофе.',
//         mainH2Text: 'Мы делаем каждый день полным энергии и вкуса. <br> Хотите попробовать наши зерна?',
//         welcomeMsg: 'Добро пожаловать на сайте Кофе'
//     }
//   }
// }
