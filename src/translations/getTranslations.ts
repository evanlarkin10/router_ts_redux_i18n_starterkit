import authEN from './en/auth'
import commonEN from './en/common'
import dashboardEN from './en/dashboard'
import employeesEN from './en/employees'

const translations = {
    "en":{
        ...authEN,
        ...commonEN,
        ...employeesEN,
        ...dashboardEN
    }
}
export default translations;