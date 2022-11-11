import dayjs from 'dayjs'
// import 'dayjs/locale/en-gb.js'
import minMax from 'dayjs/plugin/minMax.js'
dayjs.extend(minMax)
dayjs.locale('en-gb') // en-gb starts week on monday, en does not
const yyyymmdd = 'YYYY-MM-DD' // useful for simple .format(yyyymmdd)

const timeHelper = (startDate, endDate) => {
	const endOfMonth = dayjs(endDate).endOf('month')
	try{
		if(dayjs(startDate).$D > 1 || dayjs(endDate).$D !== endOfMonth.$D){
			throw 'No valid period'
		}
		const startMonthName = dayjs(startDate).format('MMMM')
		const endMonthName = dayjs(endDate).format('MMMM')
		return startMonthName === endMonthName ? startMonthName : 'No valid period'
	}catch(err){
		return err
	}
}

console.log(timeHelper('2021-07-01', '2021-07-31'))