module.export={
    devServer: {
        proxy:{
            '/api/**':{
                target:'http://192.168.2.254',
                changeOrigin: true,
                pathRewrite: {
                '^/api': '/'
                }
            }
        }
    }
}