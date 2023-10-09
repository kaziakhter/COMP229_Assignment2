const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||// "mongodb+srv://kakhter:1nGnC4ds24cylTh5@cluster0.bsfarnm.mongodb.net/?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || 'localhost') + ':' +
      (process.env.MONGO_PORT || '27017') +
      '/DressStore' ,
      baseUrl: '/api'
  };
  
  module.exports = config;