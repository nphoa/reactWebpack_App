const plugins = [];

plugins.push(
    require('./htmlPlugin'),
    require('./extractPlugin'),
    require('./providePlugin'),
    require('./dashboardPlugin')
);

module.exports = plugins