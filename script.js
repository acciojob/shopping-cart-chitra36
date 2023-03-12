//your code here
function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "0";
  cell2.innerHTML = "0";
}
 function cart(){
    var Name = document.getElementById('item-price-input').value;
  var heading = document.getElementById('item-name-input').value;
    document.getElementById('total').innerHTML += '<br>' +heading + Name ;
}