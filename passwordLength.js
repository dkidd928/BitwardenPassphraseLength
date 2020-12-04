document.getElementsByClassName("box-content-row text-primary")[0].onclick=function(){
string = "";
for (i = 0; i < document.getElementsByClassName("password-wrapper")[0].children.length; i++) {
  string+=document.getElementsByClassName("password-wrapper")[0].children[i].innerText;
}
if(string.length < 17) {alert(string)} //threshold to edit to return an alert. Current length we're looking for here is 16 or less
console.log(string.length, string)
}
