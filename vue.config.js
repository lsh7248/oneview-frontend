const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://localhost:8000",
  },
  outputDir: "dist",
  publicPath: "/",
  assetsDir: "static",
});
