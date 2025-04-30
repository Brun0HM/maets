import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acessar de outros dispositivos
    port: 5173, // ou qualquer porta que você queira
  },
});
