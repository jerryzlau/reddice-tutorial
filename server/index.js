import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
let app = express();

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webackHotMiddleware from 'webpack-hot-middleware';

app.use(bodyParser.json());

/**
 * Webpack configs
 */
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

// import routes
import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';
import authMiddleware from './middleware/auth';

app.use('/api/users', users);
app.use('/api/auth', auth);

/** 
 * Auth Middleware
 */
app.use(authMiddleware);

/**
 * API ROUTES
 */
app.use('/api/events', events);

app.listen(3000, () => {
  console.log('Express Server running on localhost:3000');
});