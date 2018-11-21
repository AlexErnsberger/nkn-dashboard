import Vue from 'vue'
import VueI18n from 'vue-i18n'
import nbStorage from '@/assets/js/nbStorage'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: nbStorage.getLanguage() || 'en',
  fallbackLocale: 'en',
  messages: {
    'en': require('@/i18n/en'),
    'zh': require('@/i18n/zh')
  }
})

export default i18n
