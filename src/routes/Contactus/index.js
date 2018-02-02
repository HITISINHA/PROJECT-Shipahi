import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'contactus',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Contactus = require('./containers/ContactusContainer').default
      const reducer = require('./modules/contactus').default

      /*  Add the reducer to the store on key 'contactus'  */
      injectReducer(store, { key: 'contactus', reducer })

      /*  Return getComponent   */
      cb(null, Contactus)

    /* Webpack named bundle   */
    }, 'contactus')
  }
})
