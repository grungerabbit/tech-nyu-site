require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'moment': 'vendor/moment/moment',
    'clndr': 'vendor/clndr/clndr',
  }
});

require(['views/app'], function(Calendar) {
  Calendar;
});