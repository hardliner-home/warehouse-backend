const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

environment.loaders.prepend('sass', require('./loaders/sass'));

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isProductionMode = process.env.NODE_ENV === 'production';

if (isProductionMode) {
    environment.plugins.append('UglifyJs', new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: { output: { comments: false } },
    }));
    environment.plugins.append('OptimizeCSSAssetsPlugin', new OptimizeCSSAssetsPlugin());
}

environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        moment: 'moment',
        Cookies: 'js-cookie',
        jstz: 'jstz',
        _: 'lodash',
    }),
);

environment.config.merge({
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery',
        },
    },
});

module.exports = environment;
