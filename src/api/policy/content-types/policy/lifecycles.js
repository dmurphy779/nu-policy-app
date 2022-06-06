module.exports = {

  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
  },

  afterCreate(event) {
    const { result, params } = event;
  },
};
