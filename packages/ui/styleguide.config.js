const path = require('path');

module.exports = {
    components: 'src/[!lib]**/[A-Z]*.{js,jsx,ts,tsx}',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/lib/styleguide/Wrapper')
    }
};
