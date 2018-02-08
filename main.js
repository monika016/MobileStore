var main=document.getElementById("mainDiv");

 var first=document.createElement("div");
 first.classList.add('sidebar');

var a1=document.createElement("div");
var label = document.createElement('label');
 label.innerHTML+="Manufacturer";
 a1.appendChild(label)
first.appendChild(a1);


//first checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="APPLE  &nbsp &nbsp";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);

//second checkbox 

var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="ASUS  &nbsp &nbsp";

d1.appendChild(checkbox);d1.appendChild(label);
first.appendChild(d1);

//third checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="MI  &nbsp &nbsp";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);

//fourth checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="HTC  &nbsp &nbsp";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);


//SECONF FILTER
var a1=document.createElement("div");
var label = document.createElement('label');
 label.innerHTML+="STORAGE";
 a1.appendChild(label)
first.appendChild(a1);



//first checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="16 GB  ";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);



//SECOND checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="32 GB";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);




//THIRD FILTER
var a1=document.createElement("div");
var label = document.createElement('label');
 label.innerHTML+="OS";
 a1.appendChild(label)
first.appendChild(a1);



//first checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="ANDROID  ";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);



//SECOND checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="IOS";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);



//THIRD checkbox
var d1=document.createElement("div");
d1.classList.add("input");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label');
label.htmlFor = "id";
label.innerHTML+="WINDOWS";



d1.appendChild(checkbox);d1.appendChild(label);

first.appendChild(d1);



//SECOND checkbox
var d1=document.createElement("div");
d1.classList.add("input_btn");
var btn = document.createElement("button");
btn.innerHTML = "Do Something";


var body = document.getElementsByTagName("body")[0];
body.appendChild(btn);

// 3. Add event handler
 
 d1.appendChild(btn); 

first.appendChild(d1);





 main.appendChild(first);
 
// var first1=document.createElement("div");
// first1.classList.add('contents');
// var f1=document.createElement('div');
// f1.classList.add('box');
// first1.appendChild(f1);

// main.appendChild(first1);

 