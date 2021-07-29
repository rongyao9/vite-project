import { createStore } from 'vuex'
const path = require('path')
const requireModules = require.context('./modules', true, /index\.(ts|js)$/iu)
const modules = {} as any
requireModules.keys().forEach((filePath: string): void => {
  const modular = requireModules(filePath)
  let name = path.resolve(filePath) 
  name = name.split('.').shift().split('/').pop()
  modules[name] = {
    ...modular.default
  }
})

const store = createStore({
  modules: {
    ...modules
  }
})
export default store