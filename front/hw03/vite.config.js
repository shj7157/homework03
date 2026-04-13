import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 모든 곳에서 같은 React 인스턴스를 사용하도록 강제합니다.
      react: path.resolve(__dirname, 'node_modules/react'),
    },
  },
});
