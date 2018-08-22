import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
let app = express();

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webackHotMiddleware from 'webpack-hot-middleware';
import users from './routes/users';

app.use(bodyParser.json());
app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => {
  console.log('Express Server running on localhost:3000');
});