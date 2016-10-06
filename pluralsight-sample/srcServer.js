import express from 'express';
import path from 'path';
import config, {PATHS, options} from './test.webpack.config';
import webpack from 'webpack';
import open from 'open';

/* eslint-disable no-console */

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler));

app.listen(options.port, (err) => {
  if(err) {
    console.log(err);
  }else {
    open(`http://${options.host}:${options.port}`);
  }
});