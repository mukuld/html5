// Select color input
let color, hght, wdth;
color = $("#colorPicker").val()
// Select size input
//let hght, wdth;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").on("submit", function(e){
	e.preventDefault();
	makeGrid(); 
	});

function makeGrid() {
	hght = $("#inputHeight").val();
	console.log("Height is = " + hght);
	wdth = $("#inputWidth").val();
	console.log("Width is " + wdth);
	for (let r = 0; r < hght; r++) {
		$("table").append("<tr id = row" + r + "></tr>");
		console.log("r = " + r);
		for (let c = 0; c < wdth; c++) {
			$("#row" + r).append('<td></td>');
			console.log("c = " + c);
		};
	};
};

/*function addColor() {
	$(this).on("click", "td", function() {
		$(this).css("background-color", color);
}*/

//cell in row ' + r + ', column ' + c + '