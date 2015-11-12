module.exports = {
    entry: './main.js',
    output: {
        filename: 'output.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
        ]
    }
};
