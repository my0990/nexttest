import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://my0990:ZqCSvMfjl8Zyy7Ut@cluster0.cc0u5qf.mongodb.net/'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }