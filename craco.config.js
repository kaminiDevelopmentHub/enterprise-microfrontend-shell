const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    webpack: {
        configure: (config) => {
            config.plugins.push(
                new ModuleFederationPlugin({
                    name: "shell",
                    remotes: {
                        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
                        orders: "orders@http://localhost:3002/remoteEntry.js",
                    },
                    shared: {
                        // react: {
                        //     singleton: true,
                        //     requiredVersion: false,
                        // },
                        // "react-dom": {
                        //     singleton: true,
                        //     requiredVersion: false,
                        // },
                    },
                })
            );
            return config;
        },
    },
};