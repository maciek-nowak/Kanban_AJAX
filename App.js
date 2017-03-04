var baseUrl = 'https://kodilla.com/pl/bootcamp-api',
	myHeaders = {
		'X-Client-Id': '1530', //<[X-Client-Id]>
		'X-Auth-Token': '5e642ad134bcfba4ed68f47a94f67816' //<[X-Auth-Token]>
	};

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
};

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);
	})
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});