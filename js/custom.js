



$(document).ready(function(){

// take a user input 

$('form').submit(function(event){
	event.preventDefault();
	var newItem = $(this).find('input').val();
	$(this).find('input').val('');
	console.log(newItem);
	addItem(newItem);
});

	function addItem(newItem){
		var listItem = '<li><input class="done" type="checkbox" />'+newItem+' <span class="delete">x</span></li>';
		$('ul:first-of-type').append(listItem);
		$('ul li:last-of-type span.delete').bind('click',function(){
			$(this).parent().remove();
		})
	}
// item check off as done





$(document).on('change','input[type=checkbox]',function(){
	$(this).parent().toggleClass('checkedOff');
});
// delete an item
$('span.delete').on('click',function(){
	$(this).parent().remove();
})
});



