import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { enUS, ptBR } from '@mui/material/locale'

import translationEN from './assets/locales/en.json'
import translationPT from './assets/locales/pt.json'

export const LanguageOptions = {
    PT_BR: 'pt-BR',
    EN_US: 'en-US'
}

export const MAP_ENUM_TO_LANGUAGE = {
    [LanguageOptions.PT_BR]: 'pt',
    [LanguageOptions.EN_US]: 'en'
}

export const MAP_STRING_TO_ENUM_LANGUAGE = {
    'pt-BR': LanguageOptions.PT_BR,
    'en-US': LanguageOptions.EN_US
}


export const MAP_LANGUAGE_TO_ENUM = {
    'pt': [LanguageOptions.PT_BR],
    'en': [LanguageOptions.EN_US]
}

export const MAP_ENUM_TO_LOCALE = {
    [LanguageOptions.PT_BR]: ptBR,
    [LanguageOptions.EN_US]: enUS
}

const resources = {
    en: {
        translation: translationEN
    },
    pt: {
        translation: translationPT
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: MAP_ENUM_TO_LANGUAGE[LanguageOptions.PT_BR],
        lng: MAP_ENUM_TO_LANGUAGE[LanguageOptions.PT_BR],
        interpolation: {
            escapeValue: false
        },
        react: {
            bindI18n: 'changeLanguage'
        }
    })

export default i18next