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
    //console.log("Height is = " + hght);
    wdth = $("#inputWidth").val();
    //console.log("Width is " + wdth);
    for (let r = 0; r < hght; r++) {
        $("table").append("<tr id='row' class='pixels'></tr>");
        //console.log("r = " + r);
        for (let c = 0; c < wdth; c++) {
            $("#row" + r).append('<td></td>');
            //console.log("c = " + c);
            //console.log($("#row" + r))
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