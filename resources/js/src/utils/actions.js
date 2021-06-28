/**
 * Action Constructor, pass the action type and it return a generic action
 * @param {string} actionType the action type, all letters will be uppercase, even if passed lowercase
 * @returns 
 */
 const createAction = function _createAction(actionType) {
  const actionTypeUpperCase = actionType.toUpperCase()

  const action = data => ({
      type: actionTypeUpperCase,
      payload: { data }
  })

  return action
}

export const setLoading = createAction('loading')