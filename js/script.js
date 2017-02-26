var itemsByTagName = document.getElementsByTagName('li');

var add = document.getElementById('addElem'),
	list = document.getElementById('list');

add.addEventListener('click', function() {
	list.innerHTML += '<li>item' + " " + itemsByTagName.length + '</li>';
});