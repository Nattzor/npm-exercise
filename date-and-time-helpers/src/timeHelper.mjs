import dayjs from 'dayjs'
// import 'dayjs/locale/en-gb.js'
import minMax from 'dayjs/plugin/minMax.js'
dayjs.extend(minMax)
dayjs.locale('en-gb') // en-gb starts week on monday, en does not
const yyyymmdd = 'YYYY-MM-DD' // useful for simple .format(yyyymmdd)

const timeHelper = (startDate, endDate) => {
	// console.log('startDate ', 'dayjs(startDate))
	const startOfYear = dayjs(startDate).startOf('year')
	const endOfYear = dayjs(endDate).endOf('year')
	console.log('start and end of year ', startOfYear, endOfYear)
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


console.log(timeHelper('2021-01-01', '2021-12-31'))