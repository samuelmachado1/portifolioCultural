// Teste para verificar se os caminhos estão corretos
import { getPublicAssetPath } from "./src/utils/assets.js";

console.log("BASE_URL:", import.meta.env.BASE_URL);
console.log(
  "Flyer path:",
  getPublicAssetPath("assets/curicaca/flyer_curicaca.jpeg")
);
console.log(
  "Video path:",
  getPublicAssetPath("assets/curicaca/videoCuricaca.mp4")
);
