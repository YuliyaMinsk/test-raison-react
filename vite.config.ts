import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:4040',
                rewrite: (path) => path.replace('/api', ''),
            },
        },
    },
    build: {
        outDir: 'build',
    },
})
