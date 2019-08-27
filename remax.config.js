const path = require("path");

module.exports = (cli) => {
    return {
        output: `dist/${cli.target}`,
        alias: {
            // "remax": require.resolve("remax/" + cli.target )
        }
    }
}