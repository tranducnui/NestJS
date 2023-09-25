const path = require('path');

module.exports = {
  entry: './src/index.js', // Đường dẫn tới file nguồn (entry point)
  output: {
    filename: 'bundle.js', // Tên file bundle đầu ra
    path: path.resolve(__dirname, 'dist') // Đường dẫn đến thư mục đầu ra
  }
};