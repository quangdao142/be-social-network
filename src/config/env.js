const data = {};

const loadEnv = () => {
    data.MongoDBUrl = process.env.MONGODB_URL;
    data.Port = process.env.PORT;
    data.JwtSecret = process.env.JWT_SECRET;
}

module.exports = {
    data,
    loadEnv
};