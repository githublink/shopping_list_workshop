// user to be able to submit items
var list = $('#listOfItems');
$('form').submit(function(event){
	event.preventDefault();
	var newItem = $(this).find('input').val();
	console.log(newItem);
	list.prepend('<li>'+newItem+' <span>X</span></li>');
});

// user needs to be able to check off items

list.on('dblclick','li',itemClick);

function itemClick(event){
	event.stopPropagation();
	$(this).toggleClass('completed');
}

// delete items
list.on('click','li span',function(){
	$(this).parent().remove();
});
