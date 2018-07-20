
$(document).ready(function(){
	// console.log('+++line2: fileName:app.js functionName:jquery.ready expected: no error actual : ',$)

	// attach event listener to buttons(input)
	// create function stub for read/write/delte
		// research local storage

	// $().on('click',function(){

	// })
	$('.store-btn').on('click',function(event){
		console.log(event.target);
		localStorage.setItem('hrext','there is the best')
	})

});