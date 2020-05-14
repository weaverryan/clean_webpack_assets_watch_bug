var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('build/')
    .setPublicPath('/build')

    .addEntry('app', './app.js')

    .enableSingleRuntimeChunk()

    // default config - done to add verbose
    .cleanupOutputBeforeBuild(['**/*'], (config) => {
        //config.cleanStaleWebpackAssets = false;
        config.verbose = true;
    })
;

module.exports = Encore.getWebpackConfig();
console.log(module.exports);
