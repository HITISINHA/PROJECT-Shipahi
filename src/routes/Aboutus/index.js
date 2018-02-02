import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'aboutus',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Aboutus = require('./containers/AboutusContainer').default
      const reducer = require('./modules/aboutus').default

      /*  Add the reducer to the store on key 'aboutus'  */
      injectReducer(store, { key: 'aboutus', reducer })

      /*  Return getComponent   */
      cb(null, Aboutus)

    /* Webpack named bundle   */
    }, 'aboutus')
  }
})
