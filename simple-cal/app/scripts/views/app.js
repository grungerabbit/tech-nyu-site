define(['jquery', 'underscore', 'moment', 'clndr'], function($, _, moment, clndr) {
  /*var App = Backbone.View.extend({
    initialize: function() {
      console.log( 'Wahoo!' );
    }
  });*/

	$(document).ready(function() {
		var calendars = {}

		  var thisMonth = moment().format('YYYY-MM');

		  var eventArray = [
		    { startDate: thisMonth + '-10', endDate: thisMonth + '-14', title: 'Multi-Day Event' },
		    { startDate: thisMonth + '-21', endDate: thisMonth + '-23', title: 'Another Multi-Day Event' },
		    { date: thisMonth + '-27', title: 'Single Day Event' }
		  ];

		

		calendars.clndr1 = $('.cal1').clndr({
	    events: eventArray,
	    // constraints: {
	    //   startDate: '2013-11-01',
	    //   endDate: '2013-11-15'
	    // },
	    clickEvents: {
	      click: function(target) {
	        console.log(target);
	        // if you turn the `constraints` option on, try this out:
	        // if($(target.element).hasClass('inactive')) {
	        //   console.log('not a valid datepicker date.');
	        // } else {
	        //   console.log('VALID datepicker date.');
	        // }
	      },
	      nextMonth: function() {
	        console.log('next month.');
	      },
	      previousMonth: function() {
	        console.log('previous month.');
	      },
	      onMonthChange: function() {
	        console.log('month changed.');
	      },
	      nextYear: function() {
	        console.log('next year.');
	      },
	      previousYear: function() {
	        console.log('previous year.');
	      },
	      onYearChange: function() {
	        console.log('year changed.');
	      }
	    },
	    multiDayEvents: {
	      startDate: 'startDate',
	      endDate: 'endDate',
	      singleDay: 'date'
	    },
	    showAdjacentMonths: true,
	    adjacentDaysChangeMonth: false
	  });
	});
	

  //return App;
});