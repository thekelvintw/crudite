
$(document).ready(function(){
	// console.log('+++line2: fileName:app.js functionName:jquery.ready expected: no error actual : ',$)

	//to pull up all storage values use 
	//localStorage.length as your array length
	//localStorage.key(index) to access by number

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
		 let titleValue = localStorage.getItem('titleValue');
   		 let contentValue = localStorage.getItem('contentValue');

		 $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);

	});
		$('.delete-btn').on('click',function(event){
			// TODO add in a confirm
				// throw up .confirm window
				// capture result
				// trst boolean to delete or not
		 let titleValue = localStorage.removeItem('titleValue');
   		 let contentValue = localStorage.removeItem('contentValue');
   		 $('.debug').html(`<p>Items deleted</p>`);

   		

   		}
	});

});