'use strict'

/*
 * Fetch the data from the server side
 * @param { Func } dispatch
 */
export function fetchComponentData(dispatch, component, params, query) {
  const promises = component.map(current => {
    const component = current.WrappedComponent ? current.WrappedComponent : current
    return component.fetchData
      ? component.fetchData(dispatch, params, query)
      : null
  })
  return Promise.all(promises)
}