$(function() {

  $body = $('body');
  if (typeof function1 !== 'undefined') {
    function1();
  } else {
    $body.append('function1 not found <br />');
  }

  if (typeof function2 !== 'undefined') {
    function2();
  } else {
    $body.append('function2 not found <br />');
  }

  if (typeof obj !== 'undefined' && typeof obj.function3 !== 'undefined') {
    obj.function3();
  } else {
    $body.append('function3 not found <br />')
  }

  if (typeof gobj !== 'undefined' && typeof gobj.function4 !== 'undefined') {
    gobj.function4();
  } else {
    $body.append('function4 not found <br />')
  }

});