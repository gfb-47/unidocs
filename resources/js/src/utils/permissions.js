const module = (function (w) {
  if (!w.Laravel) throw new Error('global Laravel variable was not set in the index.html file')
  const PERMISSIONS = 'permissions'
  const ROLES = 'roles'

  const jsPermissions = {
    permissions: w.Laravel.jsPermissions.permissions,
    roles: w.Laravel.jsPermissions.roles
  }

  const orChecking = (property, value) => {
    for (const item of value.split('|'))
      if (jsPermissions[property].includes(item.trim()))
        return true

    return false
  }

  const andChecking = (property, value) => {
    for (const item of value.split('&'))
      if (!jsPermissions[property].includes(item.trim()))
        return false

    return true
  }

  const can = value => {
    if (!Array.isArray(jsPermissions.permissions))
      return false

    if (value.includes('|')) return orChecking(PERMISSIONS, value)
    else if (value.includes('&')) return andChecking(PERMISSIONS, value)

    return jsPermissions.permissions.includes(value.trim())
  }

  const is = value => {
    if (!Array.isArray(jsPermissions.roles))
      return false

    if (value.includes('|')) return orChecking(ROLES, value)
    else if (value.includes('&')) return andChecking(ROLES, value)

    return jsPermissions.roles.includes(value.trim())
  }

  return { can, is }
})(window)

export const can = module.can
export const is = module.is