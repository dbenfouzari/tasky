module.exports = {
    components: 'src/**/[A-Z]*.{js,jsx,ts,tsx}',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
};
