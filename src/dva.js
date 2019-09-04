import dva from 'dva-core';
// import createLoading from 'dva-loading';
import models from './models';

let dvaApp = dva.create({
  models,
});

dvaApp.start();

export default dvaApp;
