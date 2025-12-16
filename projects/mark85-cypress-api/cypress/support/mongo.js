const { MongoClient } = require('mongodb')

mongoUri = 'mongodb+srv://augustoarandiba_db_mark85:udemypapito@mark85-cluster.y4mubid.mongodb.net/mark85-cluster?appName=mark85-cluster'

const client = new MongoClient(mongoUri)

async function connect() {
    await client.connect()

    return client.db('mark85-cluster')
}

async function disconnect() {
    await client.disconnect()
}

module.exports = {
    connect,
    disconnect
}