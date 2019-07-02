module.exports={
    publicPath:'./',
    assetsDir: './',
    devServer: {
        proxy:{
            '/api':{
                target:'http://localhost:3000',
               // target:'http://192.168.1.2:3000',
                ws: true,
                changeOrigin: true
                }
            }
        }
    }