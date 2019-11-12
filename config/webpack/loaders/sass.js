const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    test: /\.(s*)css$/,
    use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader' },
        { loader: 'sass-loader', options: { sourceMap: true, importer: globImporter() } },
    ]
};