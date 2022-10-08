import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromReq: any): string => {
  if (isString(commentFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromReq
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return visibilityFromReq
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isString = (string: string | String): boolean => {
  return (typeof string === 'string' || string instanceof String)
}

const toNewDirayEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDirayEntry
