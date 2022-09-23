'use strict';

/**
 * udoctor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::udoctor.udoctor');
