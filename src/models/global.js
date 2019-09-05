export default {
  namespace: 'global',
  state: {
    user: {
      name: 'luo',
    },
    todos: [
      { id: 1, text: 'Learning Javascript', completed: true },
      { id: 2, text: 'Learning ES2016', completed: true },
      { id: 3, text: 'Learning Remax', completed: false },
    ],
  },
  reducers: {
    save(state, { payload }) {},
  },
  effects: {
    *effect({ payload }, { put, call }) {},
  },
};
