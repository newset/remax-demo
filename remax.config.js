const path = require("path");

module.exports = (cli) => {
    return {
        output: `dist/${cli.target}`,
        alias: {
            // 'remax': path.resolve(__dirname, `./node_modules/remax/wechat.js`)
        }
    }
}