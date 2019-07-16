import authEN from './en/auth'
import commonEN from './en/common'
import dashboardEN from './en/dashboard'
import employeesEN from './en/employees'
import posEN from './en/pos'

const translations = {
    "en": {
        ...authEN,
        ...commonEN,
        ...employeesEN,
        ...dashboardEN,
        ...posEN
    }
}
export default translations;