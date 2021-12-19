/// <reference types="cypress" />

const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = (on) => registerReportPortalPlugin(on);
require('@applitools/eyes-cypress')(module);