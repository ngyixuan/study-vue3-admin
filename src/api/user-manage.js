import request from '@/utils/request'

export const getUserManageList = (data) => {
  return request({
    url: '/my/userManage/list',
    method: 'POST',
    data
  })
}
/**
 * 获取所有用户列表数据
 */
export const getUserManageAllList = () => {
  return request({
    url: '/my/userManage/allList',
    method: 'GET'
  })
}

/**
 * 批量导入
 */
export const userBatchImport = (data) => {
  return request({
    url: '/my/userManage/batch/import',
    method: 'POST',
    data
  })
}
/**
 * 删除指定数据
 */
export const deleteUser = (id) => {
  return request({
    url: `/my/user-manage/detele/${id}`
  })
}

/**
 * 获取用户详情
 */
export const userDetail = (data) => {
  return request({
    url: '/my/userManage/detail',
    method: 'POST',
    data
  })
}

/**
 * 分用户分配角色
 */
export const updateRole = (id, roles) => {
  return request({
    url: 'my/userManage/updateRole',
    method: 'POST',
    data: {
      id,
      roles
    }
  })
}
