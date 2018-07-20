
$(document).ready(function(){
	// console.log('+++line2: fileName:app.js functionName:jquery.ready expected: no error actual : ',$)

	// attach event listener to buttons(input)
	// create function stub for read/write/delte
		// research local storage

	// $().on('click',function(){

	// })
	$('.store-btn').on('click',function(event){
		let titleValue = $('.input-field-title').val();
		let contentValue = $('.input-field-body').val();
		localStorage.setItem('titleValue' ,titleValue);
		localStorage.setItem('contentValue' ,contentValue);
	});

	$('.get-btn').on('click',function(event){
		// console.log(localStorage.getItem('hrext'));
		let titleValue = $('.input-field-title').val();
		let contentValue = $('.input-field-body').val();

		 $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);

	});
		$('.delete-btn').on('click',function(event){
		console.log(localStorage.removeItem('hrext'));
	});

});