import request from '@/utils/request'
/**
 * 获取所有角色
 */
export const roleList = () => {
  return request({
    url: 'my/role/list'
  })
}

/**
 * 获取当前员工角色
 */
export const userRole = (data) => {
  return request({
    url: 'my/userManage/role',
    data,
    method: 'POST'
  })
}
/**
 * 获取指定角色的权限
 */
export const rolePermission = (data) => {
  return request({
    url: 'my/role/permission',
    data,
    method: 'POST'
  })
}
