'use strict';

/**
 * policy router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter(
  'api::policy.policy',
  ({ strapi }) => ({
    async find(ctx) {
      const { user } = ctx.state;
      const entities = await strapi.db
        .query("api::policy.policy")
        .findMany({
          where: {
            links: user,
          },
          populate: true,
        });
      return entities;
    },
  })
);
