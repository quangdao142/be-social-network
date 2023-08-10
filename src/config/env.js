const data = {};

const loadEnv = () => {
    data.MongoDBUrl = process.env.MONGODB_URL;
}

module.exports = {
    data,
    loadEnv
};