(function (w, d) {

    d.scheme = [[1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1]];

    d.generateField = function () {

        var field = document.getElementsByClassName("field");

        for(var indexRow = 0; indexRow < d.scheme.length; indexRow ++) {

            var rowScheme = d.scheme[indexRow];

            var row = document.createElement("DIV");
            row.className = "row";

            field[0].appendChild(row);

            for(var indexCell = 0; indexCell < rowScheme.length; indexCell++) {

                var cell = document.createElement("DIV");
                cell.className = "cell";

                if(rowScheme[indexCell] === 1) {

                    cell.className += " active";
                }
                else {
                    cell.className += " passive";
                }

                row.appendChild(cell);
            }
        }
    };

    d.generateField();

})(window, document);
