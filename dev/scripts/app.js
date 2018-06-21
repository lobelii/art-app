
//API Key: 0Y78hIUp

const art = {};

// Init function
art.init = () => {
	console.log('hiii');
	// create global variables: API Key
	art.key = "0Y78hIUp";

	// Getting the moneky art as defualt
	art.getArt("Moneky")
	// Listen to the animal selector
	 $('#animal').on('change', function(){  //here we don't use a arrow funciton, 
										 // because when using "This" an arrow function will reference the entire page.
		// console.log('changed');
		// Get the value of the user selected
		// console.log(this);
		const animal = $(this).val();
		// console.log(animal);
		art.getArt(animal)  //call getArt again to get the user-selected animal arts
	})


}

// document ready
$(function() {
// Call the init function inside the doucment ready.
	art.init();
	art.getArt();
	});


// Writing pseodo code.
	// Get Art from API.
		// Only Get Art with Monkeys 	
	// Display Art on page.

// Creat a new function for getting art
art.getArt = (searchTerm = 'Monkey') => {  // use "Monkey" as the default query.
	// use ajax to get art
	$.ajax({
		url:'https://www.rijksmuseum.nl/api/en/collection',
		method: 'GET',
		dataType: 'jsonp',
		data:{
			key:art.key,
			format:'jsonp',
			imgonly: true,
			q: searchTerm
		}
	}).then((res)=>{   // chaining along .then
		// console.log(res);
		const artObjects = res.artObjects;
		// console.log(artObjects)

		art.displayArt(artObjects)
	});  
}

// Create a function to display art
art.displayArt = (allArt) => {

	// console.log(allArt)
	// console.log(allArt[0].links.web)
	// Use foreach array method to get all arrays
	
	$('#artwork').empty();  //when you change into  "Dragon", you want to clear up the monkey, and only pull dragon.
	
	allArt.filter((artPiece)=>{
		return artPiece.webImage.url.length >0;	})  //make sure that the url is not null
	
	.forEach((artPiece)=>{							// chain along the for each
		console.log(artPiece);

		// Creating some html elements
		const $title = $('<h2>').text(artPiece.title);  //Best practice is to create a jQuery variable using $ at the beginning
		const $artist = $('<p>').addClass('artist').text(artPiece.principalOrFirstMaker);
		const $img = $('<img>').attr('src',artPiece.webImage.url);
// Getting these art on the html page.
		// Adding the htmls element into the html
		$('#artwork').append($title, $artist, $img);


	});


}
