// Business Logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     var result = add(number1, number2);
//     $("#output").text(result);
//   });
// });

// $(document).ready(function() {
//   $("form#subtract").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#subtract1").val());
//     var number2 = parseInt($("#subtract2").val());
//     var result = subtract(number1, number2);
//     $("#output1").text(result);
//   });
// });

// Everything below this line is User Interface Logic
$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    // var operator = $("input:radio[name=operator]:checked").val();
    var addBtn = $("submit#btnAdd");
    var subtractBtn = $("submit#btnSubtract");
    var multiplyBtn = $("submit#btnMultiply");
    var divideBtn = $("submit#btnDivide");
    debugger;
    var result;
    if (addBtn === true) {
      result = add(number1, number2);
    } else if (subtractBtn === true) {
      result = subtract(number1, number2);
    } else if (multiplyBtn === true) {
      result = multiply(number1, number2);
    } else if (divideBtn === true) {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});