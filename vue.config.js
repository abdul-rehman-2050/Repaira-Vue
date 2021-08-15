
import { resolve as _resolve } from 'path'
export const configureWebpack = {
  resolve: {
    alias: {
      src: _resolve(__dirname, 'src')
    }
  },
}
export const transpileDependencies = [
  'vuetify'
]