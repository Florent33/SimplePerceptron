/**
 * Created by FERRAND on 04/02/2015.
 */

var context = $("#myChart").get(0).getContext("2d");
var data = {
    labels : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datas : [
        {
            fillColor : "rgba(220,220,220,0.0)",
            strokeColor : "rgba(220,220,220,0)",
            data : [0,0,0,0,0,0,0,0,0]
        }
    ]
}
var choices = "";
new Chart(context).Bar(data,choices);
