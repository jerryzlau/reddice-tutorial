import express from 'express';
import path from 'path';
let app = express();

import webpack from 'webpack';
import webpackMieddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

app.use(webpackMieddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => {
  console.log('Express Server running on localhost:3000');
})