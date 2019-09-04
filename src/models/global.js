export default {
  namespace: 'global',
  state: {
    user: {
      name: 'luo',
    },
  },
  reducers: {
    save(state, { payload }) {},
  },
  effects: {
    *effect({ payload }, { put, call }) {},
  },
};
