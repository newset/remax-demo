module.exports = (cli) => {
    return {
        output: `dist/${cli.target}`,
        alias: {
            'remax': `node_modules/remax/wechat`
        }
    }
}