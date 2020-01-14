const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
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

const fetchAllProducts = async (
  criteria = '',
  order = 1,
  pageSize = 10,
  page = 0
) => {
  console.log(pageSize);
  try {
    return await db
      .collection('products')
      .find()
      .sort({ [criteria]: order })
      .limit(pageSize)
      .skip(pageSize * page)
      .toArray();
  } catch (e) {
    console.log(e);
  }
};

const addProducts = async products => {
  try {
    const { result } = await db.collection('products').insertMany(products);
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};

const addOneProduct = async product => {
  try {
    const { result } = await db.collection('products').insertOne(product);
    return result;
  } catch (e) {
    console.log(e);
  }
};

const updateAProduct = async (productID, product) => {
  try {
    return await db
      .collection('products')
      .updateOne({ _id: ObjectId(productID) }, { $set: product });
  } catch (e) {
    console.log(e);
  }
};

const removeAllProducts = async () => {
  try {
    return await db.collection('products').deleteMany({});
  } catch (e) {
    console.log(e);
  }
};

const removeAProduct = async productID => {
  try {
    return await db
      .collection('products')
      .deleteOne({ _id: ObjectId(productID) });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  initializeDatabase,
  fetchAllProducts,
  addProducts,
  addOneProduct,
  updateAProduct,
  removeAllProducts,
  removeAProduct,
};
