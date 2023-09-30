const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/toDoList.ts', // Ruta del archivo de entrada principal
  output: {
    filename: 'toDoList.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplicar la config a archivos TypeScript
        exclude: /node_modules/, // Excluir la carpeta "node_modules"
        use: {
          loader: 'ts-loader', 
        },
      },
    ],
  },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  target: 'web',
};
