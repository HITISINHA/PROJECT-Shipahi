import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'store',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Store = require('./containers/StoreContainer').default
      const reducer = require('./modules/store').default

      /*  Add the reducer to the store on key 'store'  */
      injectReducer(store, { key: 'store', reducer })

      /*  Return getComponent   */
      cb(null, Store)

    /* Webpack named bundle   */
    }, 'store')
  }
})
