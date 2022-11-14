import dayjs from 'dayjs'
// import 'dayjs/locale/en-gb.js'
import minMax from 'dayjs/plugin/minMax.js'
dayjs.extend(minMax)
dayjs.locale('en-gb') // en-gb starts week on monday, en does not
const yyyymmdd = 'YYYY-MM-DD' // useful for simple .format(yyyymmdd)

const timeHelper = (startDate, endDate) => {
	const startOfYear = dayjs(startDate).startOf('year').format(yyyymmdd)
	const endOfYear = dayjs(endDate).endOf('year').format(yyyymmdd)
	const startOfMonth = dayjs(startDate).startOf('month').format(yyyymmdd)
	const endOfMonth = dayjs(endDate).endOf('month').format(yyyymmdd)
	console.log('start ', dayjs(startDate).format(yyyymmdd), startOfYear)
	console.log('end ', dayjs(endDate).format(yyyymmdd), endOfYear)
	try{
		if(dayjs(startDate).format(yyyymmdd) === startOfYear && dayjs(endDate).format(yyyymmdd) === endOfYear){
			return dayjs(startDate).format('YYYY')
		}
		if(dayjs(startDate).format(yyyymmdd) === startOfMonth && dayjs(endDate).format(yyyymmdd) === endOfMonth){
			return dayjs(startDate).format('MMMM')
		}
		throw 'No valid period'
	}catch(err){
		return err
	}
}

// console.log(timeHelper('2021-01-01', '2021-12-28'))

export default timeHelper;