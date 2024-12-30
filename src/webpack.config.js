module.exports = {
    module: {
      rules: [
        {
          test: /\.module\.css$/, // Áp dụng cho các file .module.css
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true, // Kích hoạt CSS Modules
              },
            },
          ],
        },
        {
          test: /\.css$/, // Áp dụng cho các file CSS thông thường
          exclude: /\.module\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  