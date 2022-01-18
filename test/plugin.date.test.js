import dayjs from 'dayjs'
import jalali from '../src'

dayjs.extend(jalali)

it('Should set correct date', () => {
  const d1 = dayjs('1398-08-09', { jalali: true })
  const d2 = dayjs('1398-08-10', { jalali: true }).toCalendar('jalali').date(9)

  console.log('d1, d2 :>> ', d1, d2);
  expect(d1.isSame(d2)).toBeTruthy()
})
