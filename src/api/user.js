import request from '@/utils/request'

export const feature = () => {
  return request({
    url: '/my/userfeature',
    method: 'GET'
  })
}
export const chapter = () => {
  return request({
    url: '/my/userchapter',
    method: 'GET'
  })
}
