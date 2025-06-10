const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateIcons() {
  const inputImage = "./src/assets/SamuelEstrella.jpg";
  const outputDir = "./public";

  // Verificar se o arquivo de entrada existe
  if (!fs.existsSync(inputImage)) {
    console.error("Imagem de entrada não encontrada:", inputImage);
    return;
  }

  // Tamanhos dos ícones PWA
  const sizes = [192, 512];

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}.png`);

    try {
      await sharp(inputImage)
        .resize(size, size, {
          fit: "cover",
          position: "center",
        })
        .png({
          quality: 90,
          compressionLevel: 6,
        })
        .toFile(outputPath);

      console.log(`✅ Ícone ${size}x${size} criado: ${outputPath}`);
    } catch (error) {
      console.error(`❌ Erro ao criar ícone ${size}x${size}:`, error);
    }
  }

  // Criar também um favicon.ico básico usando o ícone de 192px
  try {
    await sharp(inputImage)
      .resize(32, 32, {
        fit: "cover",
        position: "center",
      })
      .png()
      .toFile(path.join(outputDir, "favicon-32x32.png"));

    console.log("✅ Favicon 32x32 criado");
  } catch (error) {
    console.error("❌ Erro ao criar favicon:", error);
  }

  console.log("\n🎉 Todos os ícones PWA foram gerados com sucesso!");
}

generateIcons().catch(console.error);
