/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'

import styles from 'styles/components/form/RangePicker.module.css'
import { DatePicker as AntDatePicker, ConfigProvider } from 'antd'
//import { isObject } from 'lodash'

import 'moment/locale/th'
import moment from 'moment'
import locale from 'antd/lib/locale/th_TH'

moment.locale('th', { week: { dow: 3 }, weekdaysMin: ['พฤ.', 'ศ.', 'ส.', 'อา.', 'จ.', 'อ.', 'พ.'] })
const DateFormat = 'DD/MM/YYYY'

const RangePicker = (props) => {
  const {
    error,
    id,
    name,
    value: initialValue,
    middle,
    onChange,
    disabledDays,
    disabledDate,
    classField = '',
    showTime = true,
    style = {},
    ...propsInput
  } = props;

  const [value, setValue] = React.useState()
  const classText = `${middle ? styles.mid : ''} ${error ? styles.err : ''} ${classField}`.trim()

  const getYearCalendar = document.getElementsByClassName("ant-picker-year-btn");
  React.useEffect(()=>{
    console.log('getYearCalendar :',getYearCalendar)
  },[getYearCalendar])

  const handleDisabledDate = React.useCallback(
    (current) => {
      const checkYear = moment().locale('th').format('YYYY') === moment(current).locale('th').format('YYYY') ? 543 : 0
      const currentTime = new Date(moment(current).add(checkYear, 'year').format('YYYY-MM-DD') + ' 00:00:00').getTime()
      const before = disabledDays?.before
        ? currentTime > new Date(moment(disabledDays?.before).endOf('day').add(543, 'year').format('YYYY-MM-DD') + ' 00:00:00').getTime()
        : true
      const after = disabledDays?.after
        ? currentTime < new Date(moment(disabledDays?.after).endOf('day').add(543, 'year').format('YYYY-MM-DD') + ' 00:00:00').getTime()
        : true

      return before && after
    },
    [disabledDays]
  )

  const onChangeValue = React.useCallback(
    ($value) => {
      typeof onChange === 'function' &&
        onChange(
          !$value
            ? null
            : {
                start: moment($value[0], DateFormat).add(-543, 'year').locale('th'),
                end: moment($value[1], DateFormat).add(-543, 'year').locale('th'),
              }
        )
    },
    [onChange, DateFormat]
  )

  React.useEffect(() => {
    if (initialValue && (initialValue.start || initialValue.end)) {
      setValue([
        moment(new Date(moment(initialValue.start).format('YYYY-MM-DD')), DateFormat)
          .add(543, 'year')
          .locale('th'),
        moment(new Date(moment(initialValue.end).format('YYYY-MM-DD')), DateFormat)
          .add(543, 'year')
          .locale('th'),
      ])
    } else setValue(null)
  }, [initialValue])

  return (
    <div className={props.classnamediv + ' ' + styles.cntrn}>
      {props.label ? (
        <div>
          {props.label}
        </div>
      ) : null}
      <ConfigProvider locale={locale}>
        <AntDatePicker.RangePicker
          style={style}
          className={classText}
          id={id || name}
          name={name}
          //placeholder={['เริ่มต้น', 'สิ้นสุด']}
          onChange={onChangeValue}
          value={value}
          format={DateFormat}
          inputReadOnly
          //disabledDate={disabledDate || handleDisabledDate}
          //disabledDate={disabledDate}
          {...propsInput}
          //suffixIcon={initialValue && isObject(initialValue) ? null : <CalendarIcon className='calendar-rangepicker-icon' />}
        />
      </ConfigProvider>
    </div>
  )
}

// RangePicker.defaultProps = {
//   classField: '',
//   showTime: true,
//   style: {},
// }

export default React.memo(RangePicker)
