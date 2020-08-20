const phoneNumber = prompt('Пожалуйста, введите телефон в формате: "+71234567890"');
let formatNumber = '';

function formattedPhone(phone) {
  if (phoneNumber.match(/^[+]*[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/))
  {

  for (let i=0; i < 12; i++)
  {

  formatNumber += phoneNumber.charAt(i);
  if (phoneNumber.indexOf(i) == phoneNumber.indexOf(1))
  formatNumber += ' (';
  if (phoneNumber.indexOf(i) == phoneNumber.indexOf(4))
  formatNumber += ') ';
  if (phoneNumber.indexOf(i) == phoneNumber.indexOf(7))
  formatNumber += '-';
  if (phoneNumber.indexOf(i) == phoneNumber.indexOf(9))
  formatNumber += '-';
  }
  console.log(formatNumber);
  //с помощью конката
  console.log(phoneNumber.charAt(0) + phoneNumber.charAt(1) + ' ' + '(' + phoneNumber.charAt(2) + phoneNumber.charAt(3) + phoneNumber.charAt(4) + ')' + ' ' + phoneNumber.charAt(5) + phoneNumber.charAt(6) + phoneNumber.charAt(7) + '-' + phoneNumber.charAt(8) + phoneNumber.charAt(9) + '-' + phoneNumber.charAt(10) + phoneNumber.charAt(11));
  }else {
    alert('Телефон был указан в неправильном формате. Пожалуйста, введите телефон в формате: "+71234567890"');
  }
}

formattedPhone(phoneNumber); // +7 (123) 456-78-90
