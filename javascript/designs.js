// Select color input
let colorChoice, hght, wdth;
// Select size input
//let hght, wdth;
// When size is submitted by the user, call makeGrid()

function eraseGrid() {
    $("#clearGrid").click(function(e) {
        $("#pixelCanvas").empty();
    });
};

$("#sizePicker").on("submit", function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
    addColor();
});

eraseGrid();

function clearGrid() {
    $("#pixelCanvas").empty();
};

function makeGrid() {
    //eraseGrid();
    hght = $("#inputHeight").val();
    wdth = $("#inputWidth").val();
    for (let r = 0; r < hght; r++) {
        //        $("table").append("<tr id='row" + r + "' class='pixels'></tr>");
        $("table").append("<tr class='pixels'></tr>");
        for (let c = 0; c < wdth; c++) {
            $("tr:last").append("<td></td>");
            //$("#row" + r).append("<td></td>");
        };
    };
};

function addColor() {
    $('td').click(function() {
        colorChoice = $("#colorPicker").val()
            //console.log("colorChoice");
        $(this).css("background-color", colorChoice);
    })
};

//cell in row ' + r + ', column ' + c + '