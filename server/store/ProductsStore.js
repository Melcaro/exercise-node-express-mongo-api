const MongoClient = require('mongodb').MongoClient;
const { auth } = require('../services/auth');

const url = 'mongodb://192.168.99.100:27017';
let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth: auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('products');
};

const addProducts = async products => {
  try {
    const { result } = await db.collection('products').insertMany(products);
    console.log(result);
    return result
  } catch (e) {
    console.log(e);
  }
};

const addOneProduct = async(product)=>{
  try
}

module.exports = { initializeDatabase, addProducts };
