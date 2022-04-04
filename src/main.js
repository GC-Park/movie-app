import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js' // 특정한 폴더에서 index.js 이름의 파일을 가져올 때는 파일의 이름 생략 가능
import store from './store/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')
