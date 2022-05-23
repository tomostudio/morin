const dateParse = (time, lang, forTitle = false) => {
  if (forTitle) {
    const day_en = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]
    const day_id = [
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
      'Minggu',
    ]
    const [year, month, date] = time.split('-')

    const parse = `${
      lang === 'id'
        ? day_id[new Date(time).getDay() - 1]
        : day_en[new Date(time).getDay() - 1]
    }, ${date}-${month}-${year}`

    return parse
  } else {
    const month_en = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month_id = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]
    const [year, month, date] = time.split('-')

    const parse = `${date} ${
      lang === 'id' ? month_id[month - 1] : month_en[month - 1]
    } ${year}`

    return parse
  }
}

export default dateParse
