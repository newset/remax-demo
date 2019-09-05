import { create } from 'dva-core';
// import createLoading from 'dva-loading';
import models from './models';

let dvaApp = create({
  initialState: {},
});

models.forEach(dvaApp.model);
dvaApp.start();

export default dvaApp;
