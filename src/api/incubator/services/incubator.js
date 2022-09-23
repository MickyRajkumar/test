'use strict';

/**
 * incubator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::incubator.incubator');
