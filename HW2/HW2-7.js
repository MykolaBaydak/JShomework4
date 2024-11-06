let day = prompt(`ведіть день`);
if (1<=day && day<=11){
  console.log(`перша декада`)
}else if (12 <= day && day <=21){
  console.log(`друга декада`)
}else if (22 <= day && day <=31){
  console.log(`Третя декада`);
}else {
  console.log(`invalid day`);
}
