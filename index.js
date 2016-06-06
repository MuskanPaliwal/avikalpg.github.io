$(document).ready(function(){

	// Start Google Analytics
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-XXXXX-Y', 'auto');
	ga('send', 'pageview');
	// End Google Analytics

	$("div.wrapper div#main div#index").show();
	$("div.wrapper div#main div#acads").hide();
	$("div.wrapper div#main div#projects").hide();
	$("div.wrapper div#main div#extra").hide();

	$("div.wrapper div#main div#menu a.index").click(function(){
		$("div.wrapper div#main div#index").show();
		$("div.wrapper div#main div#acads").hide();
		$("div.wrapper div#main div#projects").hide();
		$("div.wrapper div#main div#extra").hide();
	});
	$("div.wrapper div#main div#menu a.acads").click(function(){
		$("div.wrapper div#main div#index").hide();
		$("div.wrapper div#main div#acads").show();
		$("div.wrapper div#main div#projects").hide();
		$("div.wrapper div#main div#extra").hide();
	});
	$("div.wrapper div#main div#menu a.acads").click(function(){
		$("div.wrapper div#main div#index").hide();
		$("div.wrapper div#main div#acads").hide();
		$("div.wrapper div#main div#projects").show();
		$("div.wrapper div#main div#extra").hide();
	});
	$("div.wrapper div#main div#menu a.extra").click(function(){
		$("div.wrapper div#main div#index").hide();
		$("div.wrapper div#main div#acads").hide();
		$("div.wrapper div#main div#projects").hide();
		$("div.wrapper div#main div#extra").show();
	});

});
