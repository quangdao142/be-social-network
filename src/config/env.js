const data = {};

const loadEnv = () => {
    data.MongoDBUrl = process.env.MONGODB_URL;
    data.Port = process.env.PORT;
    data.JWTSecret = process.env.JWT_SECRET;
}

module.exports = {
    data,
    loadEnv
};