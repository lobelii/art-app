(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//API Key: 0Y78hIUp

var art = {};

// Init function
art.init = function () {
	console.log('hiii');
	// create global variables: API Key
	art.key = "0Y78hIUp";

	// Getting the moneky art as defualt
	art.getArt("Moneky");
	// Listen to the animal selector
	$('#animal').on('change', function () {
		//here we don't use a arrow funciton, 
		// because when using "This" an arrow function will reference the entire page.
		// console.log('changed');
		// Get the value of the user selected
		// console.log(this);
		var animal = $(this).val();
		// console.log(animal);
		art.getArt(animal); //call getArt again to get the user-selected animal arts
	});
};

// document ready
$(function () {
	// Call the init function inside the doucment ready.
	art.init();
	art.getArt();
});

// Writing pseodo code.
// Get Art from API.
// Only Get Art with Monkeys 	
// Display Art on page.

// Creat a new function for getting art
art.getArt = function () {
	var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Monkey';
	// use "Monkey" as the default query.
	// use ajax to get art
	$.ajax({
		url: 'https://www.rijksmuseum.nl/api/en/collection',
		method: 'GET',
		dataType: 'jsonp',
		data: {
			key: art.key,
			format: 'jsonp',
			imgonly: true,
			q: searchTerm
		}
	}).then(function (res) {
		// chaining along .then
		// console.log(res);
		var artObjects = res.artObjects;
		// console.log(artObjects)

		art.displayArt(artObjects);
	});
};

// Create a function to display art
art.displayArt = function (allArt) {

	// console.log(allArt)
	// console.log(allArt[0].links.web)
	// Use foreach array method to get all arrays

	$('#artwork').empty(); //when you change into  "Dragon", you want to clear up the monkey, and only pull dragon.

	allArt.filter(function (artPiece) {
		return artPiece.webImage.url.length > 0;
	}) //make sure that the url is not null

	.forEach(function (artPiece) {
		// chain along the for each
		console.log(artPiece);

		// Creating some html elements
		var $title = $('<h2>').text(artPiece.title); //Best practice is to create a jQuery variable using $ at the beginning
		var $artist = $('<p>').addClass('artist').text(artPiece.principalOrFirstMaker);
		var $img = $('<img>').attr('src', artPiece.webImage.url);
		// Getting these art on the html page.
		// Adding the htmls element into the html
		$('#artwork').append($title, $artist, $img);
	});
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUVBLElBQU0sTUFBTSxFQUFaOztBQUVBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsWUFBTTtBQUNoQixTQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDQSxLQUFJLEdBQUosR0FBVSxVQUFWOztBQUVBO0FBQ0EsS0FBSSxNQUFKLENBQVcsUUFBWDtBQUNBO0FBQ0MsR0FBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQUc7QUFDOUI7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsRUFBRSxJQUFGLEVBQVEsR0FBUixFQUFmO0FBQ0E7QUFDQSxNQUFJLE1BQUosQ0FBVyxNQUFYLEVBUG9DLENBT2hCO0FBQ3BCLEVBUkE7QUFXRCxDQW5CRDs7QUFxQkE7QUFDQSxFQUFFLFlBQVc7QUFDYjtBQUNDLEtBQUksSUFBSjtBQUNBLEtBQUksTUFBSjtBQUNDLENBSkY7O0FBT0E7QUFDQztBQUNDO0FBQ0Q7O0FBRUQ7QUFDQSxJQUFJLE1BQUosR0FBYSxZQUEyQjtBQUFBLEtBQTFCLFVBQTBCLHVFQUFiLFFBQWE7QUFBRztBQUMxQztBQUNBLEdBQUUsSUFBRixDQUFPO0FBQ04sT0FBSSw4Q0FERTtBQUVOLFVBQVEsS0FGRjtBQUdOLFlBQVUsT0FISjtBQUlOLFFBQUs7QUFDSixRQUFJLElBQUksR0FESjtBQUVKLFdBQU8sT0FGSDtBQUdKLFlBQVMsSUFITDtBQUlKLE1BQUc7QUFKQztBQUpDLEVBQVAsRUFVRyxJQVZILENBVVEsVUFBQyxHQUFELEVBQU87QUFBSTtBQUNsQjtBQUNBLE1BQU0sYUFBYSxJQUFJLFVBQXZCO0FBQ0E7O0FBRUEsTUFBSSxVQUFKLENBQWUsVUFBZjtBQUNBLEVBaEJEO0FBaUJBLENBbkJEOztBQXFCQTtBQUNBLElBQUksVUFBSixHQUFpQixVQUFDLE1BQUQsRUFBWTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBLEdBQUUsVUFBRixFQUFjLEtBQWQsR0FONEIsQ0FNSjs7QUFFeEIsUUFBTyxNQUFQLENBQWMsVUFBQyxRQUFELEVBQVk7QUFDekIsU0FBTyxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsQ0FBc0IsTUFBdEIsR0FBOEIsQ0FBckM7QUFBeUMsRUFEMUMsRUFDNkM7O0FBRDdDLEVBR0MsT0FIRCxDQUdTLFVBQUMsUUFBRCxFQUFZO0FBQVE7QUFDNUIsVUFBUSxHQUFSLENBQVksUUFBWjs7QUFFQTtBQUNBLE1BQU0sU0FBUyxFQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsU0FBUyxLQUF4QixDQUFmLENBSm9CLENBSTRCO0FBQ2hELE1BQU0sVUFBVSxFQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLFFBQWxCLEVBQTRCLElBQTVCLENBQWlDLFNBQVMscUJBQTFDLENBQWhCO0FBQ0EsTUFBTSxPQUFPLEVBQUUsT0FBRixFQUFXLElBQVgsQ0FBZ0IsS0FBaEIsRUFBc0IsU0FBUyxRQUFULENBQWtCLEdBQXhDLENBQWI7QUFDRjtBQUNFO0FBQ0EsSUFBRSxVQUFGLEVBQWMsTUFBZCxDQUFxQixNQUFyQixFQUE2QixPQUE3QixFQUFzQyxJQUF0QztBQUdBLEVBZkQ7QUFrQkEsQ0ExQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuLy9BUEkgS2V5OiAwWTc4aElVcFxyXG5cclxuY29uc3QgYXJ0ID0ge307XHJcblxyXG4vLyBJbml0IGZ1bmN0aW9uXHJcbmFydC5pbml0ID0gKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdoaWlpJyk7XHJcblx0Ly8gY3JlYXRlIGdsb2JhbCB2YXJpYWJsZXM6IEFQSSBLZXlcclxuXHRhcnQua2V5ID0gXCIwWTc4aElVcFwiO1xyXG5cclxuXHQvLyBHZXR0aW5nIHRoZSBtb25la3kgYXJ0IGFzIGRlZnVhbHRcclxuXHRhcnQuZ2V0QXJ0KFwiTW9uZWt5XCIpXHJcblx0Ly8gTGlzdGVuIHRvIHRoZSBhbmltYWwgc2VsZWN0b3JcclxuXHQgJCgnI2FuaW1hbCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpeyAgLy9oZXJlIHdlIGRvbid0IHVzZSBhIGFycm93IGZ1bmNpdG9uLCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gYmVjYXVzZSB3aGVuIHVzaW5nIFwiVGhpc1wiIGFuIGFycm93IGZ1bmN0aW9uIHdpbGwgcmVmZXJlbmNlIHRoZSBlbnRpcmUgcGFnZS5cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VkJyk7XHJcblx0XHQvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSB1c2VyIHNlbGVjdGVkXHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHRcdGNvbnN0IGFuaW1hbCA9ICQodGhpcykudmFsKCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhhbmltYWwpO1xyXG5cdFx0YXJ0LmdldEFydChhbmltYWwpICAvL2NhbGwgZ2V0QXJ0IGFnYWluIHRvIGdldCB0aGUgdXNlci1zZWxlY3RlZCBhbmltYWwgYXJ0c1xyXG5cdH0pXHJcblxyXG5cclxufVxyXG5cclxuLy8gZG9jdW1lbnQgcmVhZHlcclxuJChmdW5jdGlvbigpIHtcclxuLy8gQ2FsbCB0aGUgaW5pdCBmdW5jdGlvbiBpbnNpZGUgdGhlIGRvdWNtZW50IHJlYWR5LlxyXG5cdGFydC5pbml0KCk7XHJcblx0YXJ0LmdldEFydCgpO1xyXG5cdH0pO1xyXG5cclxuXHJcbi8vIFdyaXRpbmcgcHNlb2RvIGNvZGUuXHJcblx0Ly8gR2V0IEFydCBmcm9tIEFQSS5cclxuXHRcdC8vIE9ubHkgR2V0IEFydCB3aXRoIE1vbmtleXMgXHRcclxuXHQvLyBEaXNwbGF5IEFydCBvbiBwYWdlLlxyXG5cclxuLy8gQ3JlYXQgYSBuZXcgZnVuY3Rpb24gZm9yIGdldHRpbmcgYXJ0XHJcbmFydC5nZXRBcnQgPSAoc2VhcmNoVGVybSA9ICdNb25rZXknKSA9PiB7ICAvLyB1c2UgXCJNb25rZXlcIiBhcyB0aGUgZGVmYXVsdCBxdWVyeS5cclxuXHQvLyB1c2UgYWpheCB0byBnZXQgYXJ0XHJcblx0JC5hamF4KHtcclxuXHRcdHVybDonaHR0cHM6Ly93d3cucmlqa3NtdXNldW0ubmwvYXBpL2VuL2NvbGxlY3Rpb24nLFxyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGRhdGFUeXBlOiAnanNvbnAnLFxyXG5cdFx0ZGF0YTp7XHJcblx0XHRcdGtleTphcnQua2V5LFxyXG5cdFx0XHRmb3JtYXQ6J2pzb25wJyxcclxuXHRcdFx0aW1nb25seTogdHJ1ZSxcclxuXHRcdFx0cTogc2VhcmNoVGVybVxyXG5cdFx0fVxyXG5cdH0pLnRoZW4oKHJlcyk9PnsgICAvLyBjaGFpbmluZyBhbG9uZyAudGhlblxyXG5cdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdGNvbnN0IGFydE9iamVjdHMgPSByZXMuYXJ0T2JqZWN0cztcclxuXHRcdC8vIGNvbnNvbGUubG9nKGFydE9iamVjdHMpXHJcblxyXG5cdFx0YXJ0LmRpc3BsYXlBcnQoYXJ0T2JqZWN0cylcclxuXHR9KTsgIFxyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiB0byBkaXNwbGF5IGFydFxyXG5hcnQuZGlzcGxheUFydCA9IChhbGxBcnQpID0+IHtcclxuXHJcblx0Ly8gY29uc29sZS5sb2coYWxsQXJ0KVxyXG5cdC8vIGNvbnNvbGUubG9nKGFsbEFydFswXS5saW5rcy53ZWIpXHJcblx0Ly8gVXNlIGZvcmVhY2ggYXJyYXkgbWV0aG9kIHRvIGdldCBhbGwgYXJyYXlzXHJcblx0XHJcblx0JCgnI2FydHdvcmsnKS5lbXB0eSgpOyAgLy93aGVuIHlvdSBjaGFuZ2UgaW50byAgXCJEcmFnb25cIiwgeW91IHdhbnQgdG8gY2xlYXIgdXAgdGhlIG1vbmtleSwgYW5kIG9ubHkgcHVsbCBkcmFnb24uXHJcblx0XHJcblx0YWxsQXJ0LmZpbHRlcigoYXJ0UGllY2UpPT57XHJcblx0XHRyZXR1cm4gYXJ0UGllY2Uud2ViSW1hZ2UudXJsLmxlbmd0aCA+MDtcdH0pICAvL21ha2Ugc3VyZSB0aGF0IHRoZSB1cmwgaXMgbm90IG51bGxcclxuXHRcclxuXHQuZm9yRWFjaCgoYXJ0UGllY2UpPT57XHRcdFx0XHRcdFx0XHQvLyBjaGFpbiBhbG9uZyB0aGUgZm9yIGVhY2hcclxuXHRcdGNvbnNvbGUubG9nKGFydFBpZWNlKTtcclxuXHJcblx0XHQvLyBDcmVhdGluZyBzb21lIGh0bWwgZWxlbWVudHNcclxuXHRcdGNvbnN0ICR0aXRsZSA9ICQoJzxoMj4nKS50ZXh0KGFydFBpZWNlLnRpdGxlKTsgIC8vQmVzdCBwcmFjdGljZSBpcyB0byBjcmVhdGUgYSBqUXVlcnkgdmFyaWFibGUgdXNpbmcgJCBhdCB0aGUgYmVnaW5uaW5nXHJcblx0XHRjb25zdCAkYXJ0aXN0ID0gJCgnPHA+JykuYWRkQ2xhc3MoJ2FydGlzdCcpLnRleHQoYXJ0UGllY2UucHJpbmNpcGFsT3JGaXJzdE1ha2VyKTtcclxuXHRcdGNvbnN0ICRpbWcgPSAkKCc8aW1nPicpLmF0dHIoJ3NyYycsYXJ0UGllY2Uud2ViSW1hZ2UudXJsKTtcclxuLy8gR2V0dGluZyB0aGVzZSBhcnQgb24gdGhlIGh0bWwgcGFnZS5cclxuXHRcdC8vIEFkZGluZyB0aGUgaHRtbHMgZWxlbWVudCBpbnRvIHRoZSBodG1sXHJcblx0XHQkKCcjYXJ0d29yaycpLmFwcGVuZCgkdGl0bGUsICRhcnRpc3QsICRpbWcpO1xyXG5cclxuXHJcblx0fSk7XHJcblxyXG5cclxufVxyXG4iXX0=
