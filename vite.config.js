import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:process.env.VITE_BASE_PATH || '/takamatsu-trip/',plugins:[react(),VitePWA({registerType:'prompt',includeAssets:['images/*.svg','icon.svg','icon-*.png'],manifest:{name:'高松・瀨戶內家庭旅行',short_name:'高松旅記',lang:'zh-TW',description:'五天四夜的瀨戶內旅行手冊',theme_color:'#365e58',background_color:'#f7f5ef',display:'standalone',start_url:'.',scope:'.',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'},{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,woff2}'],navigateFallback:'index.html'}})]});

