import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
       'vue-router',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      //自动引入vue的ref、toRefs、onMounted等，无需在页面中再次引入
      dts:"src/auto-import.d.ts" // 生成在src路径下名为auto-import.d.ts的声明文件
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],

  publicDir: resolve(__dirname, 'public'),
  assetsInclude: resolve(__dirname, 'src/assets'),
  resolve: {
    // alias: {'@': path.resolve('./src',)}
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // envPrefix: ['VITE_', 'MXL_']
})
