require.config({
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'moment': 'vendor/moment/moment',
    'clndr': 'vendor/clndr/src/clndr',
  }
});

require(['views/app'], function(Calendar) {
  Calendar;
});