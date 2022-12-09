const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

    const resolvedConfig = webpack.resolveConfig()
    resolvedConfig.resolve.fallback = {
        ...resolvedConfig.resolve.fallback,
        http: false,
        https: false,
        os: false,
        assert: false,
        stream: false,
        net: false,
        fs: false,
        url: false,
        util: false,
        tty: false,
        zlib: false
    };
    return resolvedConfig;
};
