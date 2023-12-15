export const languages = {
  en: {
    name: 'English',
    route: '/en/',
    icon: 'en',
  },
  uk: {
    name: 'Українська',
    route: '/uk/',
    icon: 'uk',
  },
  ru: {
    name: 'Русский',
    route: '/ru/',
    icon: 'ru',
  },
}

export const defaultLang = 'uk'

  
export const ui = {
    en: {
      'nav.home': 'Main Page',
      'nav.сontacts': 'My Contacts',
      'nav.twitter': 'Twitter',
    },
    ru: {
      'nav.home': 'Главная страница',
      'nav.contacts': 'Мои Контакты',
    },
    uk: {
      'nav.home': 'Головна сторінка',
      'nav.contacts': 'Мої Контакти',
    },
  } as const;