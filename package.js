Package.describe({
  name: 'sharlon:6to5',
  summary: 'Turn ES6+ code into vanilla ES5 so you can use next generation features in Meteor',
  version: '0.0.1',
  git: 'https://github.com/sbalbalosa/meteor-6to5.git'
});

Package.registerBuildPlugin({
  name: 'compile6to5',
  use: [],
  sources: [
    'plugin/compile-6to5.js'
  ],
  npmDependencies: {'6to5':'2.12.5'}
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('sharlon:6to5.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sharlon:6to5');
  api.addFiles('sharlon:6to5-tests.js');
});
