cd td2/config
echo "module.exports = {
  PORT: 3000,
  URLTD2: 'https://geo.api.gouv.fr',
  urlMongo: 'db',
  urlApiTd2: 'td2',
  urlApiTd3: 'td3',
  urlLocalhost: 'localhost'
};" > variables.js 
cd ../..
cd td3/server/config
echo "module.exports = {
  PORT: 3000,
  URLTD2: 'https://geo.api.gouv.fr',
  urlMongo: 'db',
  urlApiTd2: 'td2',
  urlApiTd3: 'td3',
  urlLocalhost: 'localhost'
};" > variables.js 
