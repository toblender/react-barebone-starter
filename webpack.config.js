module.exports = {
    entry: './main.js', //Entry point for our javascript code
    output:{
        path:__dirname + './',
        filename:'index.js' //This is in our index.html
    },
    devServer:{
        inline :true, //Hot reloading
        port:1111
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //The loader will be babel so it can transpile
                /*
                // we can set babel configs here, but we will do it in .babelrc
                query:{
                    presets:['es2015','react']
                }
                */
            }
        ]
    }
}
