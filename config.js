module.exports = {
    port: process.env.PORT || 3000, /** Se declara el puerto **/
    db: process.env.MONGODB || 'mongodb://root:root123@ds253871.mlab.com:53871/pruebamongo'
}