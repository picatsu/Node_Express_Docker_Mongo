// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  PORT: 4000,
  URLTD2: 'https://geo.api.gouv.fr',
  urlMongo: 'db',
  urlApiTd2: 'td2',
  urlApiTd3: 'td3',
  urlLocalhost: 'localhost'
};
