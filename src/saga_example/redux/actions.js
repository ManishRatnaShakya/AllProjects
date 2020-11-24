export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DATA_REQUESTED = 'DATA_REQUESTED'
export const DATA_FETCHED = 'DATA_FETCHED'
export const FOUND_BAD_WORD = 'FOUND_BAD_WORD'
export const API_ERRORED = 'API_ERRORED'
export const PHOTO_REQUESTED = 'PHOTO_REQUESTED'
export const PHOTO_FETCHED = 'PHOTO_FETCHED'
export const PHOTO_FETCHED_ERROR = 'PHOTO_FETCHED_ERROR'
export function getData() {
    console.log('data requested in get data')
  return { type: DATA_REQUESTED }
}

export function getPhotos(){
    console.log('photos requested')
    return{ type: PHOTO_REQUESTED}
}