const i18next = require('i18next');
import * as i18nextXHRBackend from 'i18next-xhr-backend';
import {translations} from './getTranslations'

translations;

export const getCurrentLanguage = ()=>{
    return i18next.language
}

export const changeLanguage = (next: string) => {
    return i18next.changeLanguage(next)
}

export default i18next.use(i18nextXHRBackend).init({
    lng: 'en',
    whitelist: ['en'],
    ns:'common',
    backend:{
        loadPath: 'translations/{{lng}}/{{ns}}.json',
        addPath: 'translations/{{lng}}/{{ns}}.json'
    }
})