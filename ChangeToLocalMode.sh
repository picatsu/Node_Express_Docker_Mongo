cd td2/config
echo "module.exports = {
  PORT: 3000,
  URLTD2: 'https://geo.api.gouv.fr',
  urlMongo: 'localhost',
  urlApiTd2: 'localhost',
  urlApiTd3: 'localhost',
  urlLocalhost: 'localhost'
};" > variables.js 
cd ../..
cd td3/server/config
echo "module.exports = {
  PORT: 3000,
  URLTD2: 'https://geo.api.gouv.fr',
  urlMongo: 'localhost',
  urlApiTd2: 'localhost',
  urlApiTd3: 'localhost',
  urlLocalhost: 'localhost'
};" > variables.js 
