module.exports = ({ env }) => ({
  url: env('APP_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS')
  },
  transfer: {
    token: {
      salt:  env.array('TRANSFER_TOKEN_SALT'),
    }
  }
});
