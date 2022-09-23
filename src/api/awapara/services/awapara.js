'use strict';

/**
 * awapara service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::awapara.awapara');
