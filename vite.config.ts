import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';
import path from 'path';

// 사용자 정의 플러그인을 생성하는 함수
function copyIndexTo404Plugin(): Plugin {
  return {
    name: 'vite-plugin-copy-index-to-404',
    // 빌드가 완료된 후 실행될 로직
    writeBundle() {
      const root = process.cwd(); // 현재 작업 디렉토리를 가져옴
      const source = path.resolve(root, 'dist', 'index.html');
      const destination = path.resolve(root, 'dist', '404.html');

      // index.html 파일을 404.html로 복사
      fs.copyFileSync(source, destination);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyIndexTo404Plugin()],
})
