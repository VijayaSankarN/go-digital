'use strict';

module.exports = {
  client: {
    lib: {
      css: [
      "public/lib/bootstrap/dist/css/bootstrap.min.css",
      "public/lib/font-awesome/css/font-awesome.min.css"
      ],
      js: [
      "public/lib/jquery/dist/jquery.min.js",
      "public/lib/bootstrap/dist/js/bootstrap.min.js",
      "public/lib/jquery-backstretch-2/jquery.backstretch.min.js"
      ]
    },
    css: [
    "http://fonts.googleapis.com/css?family=Roboto:400,100,300,500",
    "modules/core/client/css/form-elements.css",
    "modules/core/client/css/style.css"
    ],
    js: [
    "modules/core/client/js/scripts.js"
    ]
  },
  server: {
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    config: ['modules/*/server/config/*.js'],
    views: ['modules/*/server/views/*.html']
  }
};
