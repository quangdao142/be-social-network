const data = {};

const loadEnv = () => {
    data.MongoDBUrl = process.env.MONGODB_URL;
    data.Port = process.env.PORT;
}

module.exports = {
    data,
    loadEnv
};