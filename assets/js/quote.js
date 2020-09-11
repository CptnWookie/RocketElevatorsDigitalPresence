

var button = document.getElementById("calculate");
var quote = document.getElementById("quote");
	

    var buildingType = document.getElementById("buildingType");
    terminate.addEventListener('change', function(){
      var termite = {
        name: "termite",
        price: "150",
        total: function (){
        var area = document.getElementById("area").value;
        var total = area * termite.price;
        quote.setAttribute('value',total);
        }
    };
        var rat = {
        name: "rat",
        price: "550",
        total: function (){
        var area = document.getElementById("area").value;
        var total = area * rat.price;
        quote.setAttribute('value',total);          
        }
    };
        button.addEventListener ('click', this.total);
    });     