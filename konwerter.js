$(document).ready(function() {
    $("#convertButton").click(function() {
        var inputValue = $("#inputValue").val();
        var inputUnit = $("#inputUnit").val();
        var outputUnit = $("#outputUnit").val();

        var conversionFactors = {
            m: 1,
            km: 1000,
            mm: 0.001
        };

        var outputValue = inputValue * conversionFactors[inputUnit] / conversionFactors[outputUnit];

        $("#previousCalculations").append("<li>" + inputValue + " " + inputUnit + " = " + outputValue + " " + outputUnit + "</li>");
    });
});
