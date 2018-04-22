module.exports = {
	mode: 'development',
  context: __dirname,
  devtool: "inline-source-map",
  entry: "./assets/js/main.js",
  output: {
    path: __dirname,
    filename: "main.min.js"
  },
  plugins : []
};