import moment from 'moment'
import 'moment/locale/pt-br'

/* 
moment.locale()         pt
moment().format('LT')   11:07
moment().format('LTS')  11:07:55
moment().format('L')    07/11/2021
moment().format('l')    7/11/2021
moment().format('LL')   7 de novembro de 2021
moment().format('ll')   7 de nov de 2021
moment().format('LLL')  7 de novembro de 2021 11:07
moment().format('lll')  7 de nov de 2021 11:07
moment().format('LLLL') Domingo, 7 de novembro de 2021 11:07
moment().format('llll') Dom, 7 de nov de 2021 11:08
*/

/**
 * Function that receives a toISOString date and formats it to a predetermined pattern.
 * @param {*} date YYYYYY-MM-DDTHH:mm:ss.sssZ
 * @param {*} format 
 * @returns date fomated
 */
export const formatDate = (date, format) => {
    if (!date) return ''
    return moment(date).locale('pt-br').format(format)
}