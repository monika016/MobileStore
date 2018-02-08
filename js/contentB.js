var mn = document.getElementById("contentBody");

var first = document.createElement("div");
first.classList.add('contents');
first.setAttribute("id", "dg");

// var a1 = document.createElement("div");
// a1.setAttribute("name", "asus");
// a1.classList.add('image-box');
// first.appendChild(a1);

// var a2 = document.createElement("img");
// a2.setAttribute("src", "./media/asus-model-1.jpg");
// a1.appendChild(a2);

// var tag_div = document.createElement("div");
// tag_div.classList.add('for-tag');
// var tag = document.createElement("Label");
// tag.innerHTML += "Manufacturer : ASUS";
// tag_div.appendChild(tag);
// a1.appendChild(tag_div);



// var a1 = document.createElement("div");
// a1.setAttribute("name", "asus");
// a1.classList.add('image-box');
// first.appendChild(a1);

// var a2 = document.createElement("img");

// a2.setAttribute("src", "./media/asus-model-2.jpg");
// a1.appendChild(a2);

// var tag_div = document.createElement("div");
// tag_div.classList.add('for-tag');
// var tag = document.createElement("Label");
// tag.innerHTML += "Manufacturer : ASUS";
// tag_div.appendChild(tag);
// a1.appendChild(tag_div);
 
var box1 = addbox("./media/asus-model-1.jpg", "asus", "ASUS", "32 GB", "Android");
 console.log(box1);
 var box2 = addbox("./media/asus-model-1.jpg", "asus", "ASUS", "32 GB", "Android")
var box3 = addbox("./media/asus-model-3.jpg", "asus", "ASUS", "16 GB", "Android");
var box4 = addbox("./media/iphone.jpg", "iphone", "Iphone", "16 GB", "IOS");
var box5 = addbox("./media/lenovo-model-1.jpg", "lenovo", "LENOVO", "16 GB", "Android");
console.log(box5);
var box6 = addbox("./media/lenovo-model-2.jpg", "lenovo", "LENOVO", "16 GB", "Android");
var box7 = addbox("./media/m1-model-1.jpg", "mi", "MI", "16 GB", "Android");
var box8 = addbox("./media/moto-model-1.jpeg", "moto", "MOTO", "16 GB", "Windows");
var box9 = addbox("./media/nokia-model-1.jpg", "nokia", "NOKIA", "16 GB", "Windows");
var box10 = addbox("./media/nokia-model-2.jpg", "nokia", "NOKIA", "32 GB", "Windows");
var box11 = addbox("./media/samsung-model1.jpg", "samsung", "SAMSUNG", "32 GB", "Android");
var box12 = addbox("./media/nokia-model-2.jpg", "moto", "MOTO", "32 GB", "Android");
console.log(box1);

function addbox(image_src, name, label1, label2, label3) {
    var a1 = document.createElement("div");

    a1.setAttribute("name", name);
    a1.classList.add('image-box');
    // first.appendChild(a1);

    var a2 = document.createElement("img");
    a2.setAttribute("src", image_src);
    a1.appendChild(a2);

    var tag_div = document.createElement("div");
    tag_div.classList.add('for-tag');
    var tag = document.createElement("Label");
    tag.innerHTML += "Manufacturer :" + label1;
    tag_div.appendChild(tag);

    a1.appendChild(tag_div);

    var tag_div = document.createElement("div");
    tag_div.classList.add('for-tag');
    var tag = document.createElement("Label");
    tag.innerHTML += "Storage :" + label2;
    tag_div.appendChild(tag);

    a1.appendChild(tag_div);


    var tag_div = document.createElement("div");
    tag_div.classList.add('for-tag');
    var tag = document.createElement("Label");
    tag.innerHTML += "Storage :" + label3;
    tag_div.appendChild(tag);

    a1.appendChild(tag_div);



    first.appendChild(a1);

    return a1;
}





mn.appendChild(first);

var asus = document.getElementById("asus");
var iphone = document.getElementById("iphone");
var mi = document.getElementById("mi");
var moto = document.getElementById("moto");
var lenovo = document.getElementById("lenovo");
var nokia = document.getElementById("nokia");
var samsung = document.getElementById("samsung");
var gb16 = document.getElementById("16gb");
var gb32 = document.getElementById("32gb");
var android=document.getElementById("android");
var ios=document.getElementById("ios");
var windows=document.getElementById("windows");


document.getElementById('menu').addEventListener('click', filter);

function filter() {

        box1.style.display = "inline-block";
        box2.style.display = "inline-block";
        box3.style.display = "inline-block";
        box4.style.display = "inline-block";
        box6.style.display = "inline-block";
        box5.style.display = "inline-block";
        box7.style.display = "inline-block";
        box8.style.display = "inline-block";
        box9.style.display = "inline-block";
        box10.style.display = "inline-block";
        box11.style.display = "inline-block";
        box12.style.display = "inline-block";
    console.log("kk");

    if (asus.checked || samsung.checked || nokia.checked ||
        mi.checked || moto.checked || iphone.checked || lenovo.checked) {
        if (!asus.checked) {
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
        } else {
            box1.style.display = "inline-block";
            box2.style.display = "inline-block";
            box3.style.display = "inline-block";
        }
        if (!iphone.checked) {
            box4.style.display = "none";
        } else {
            box4.style.display = "inline-block";

        }
        if (!moto.checked) {
            box8.style.display = "none";
            box12.style.display = "none";
        } else {
            box8.style.display = "inline-block";
            box12.style.display = "inline-block";
        }
        if (!mi.checked) {
            box7.style.display = "none";
        } else {
            box7.style.display = "inline-block";

        }

        if (!lenovo.checked) {
            box6.style.display = "none";
            box5.style.display = "none";

        } else {
            box6.style.display = "inline-block";
            box5.style.display = "inline-block";
        }
        if (!nokia.checked) {
            box9.style.display = "none";
            box10.style.display = "none";

        } else {
            box9.style.display = "inline-block";
            box10.style.display = "inline-block";
        }
        if (!samsung.checked) {
            box11.style.display = "none";
        } else {
            box11.style.display = "inline-block";
        }

    }

    if (gb16.checked || gb32.checked) {
        if (gb16.checked) {
            if (box3.style.display == "inline-block")
                box3.style.display = "inline-block";

            if (box4.style.display == "inline-block")
                box4.style.display = "inline-block";


            if (box5.style.display == "inline-block")
                box5.style.display = "inline-block";


            if (box6.style.display == "inline-block")
                box6.style.display = "inline-block";

            if (box7.style.display == "inline-block")
                box7.style.display = "inline-block";


            if (box8.style.display == "inline-block")
                box8.style.display = "inline-block";


            if (box9.style.display == "inline-block")
                box9.style.display = "inline-block";


        } else {
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";
            box7.style.display = "none";
            box8.style.display = "none";
            box9.style.display = "none";
        }

        if (gb32.checked) {


            if (box1.style.display == "inline-block")
                box1.style.display = "inline-block";
            if (box2.style.display == "inline-block")
                box2.style.display = "inline-block";

            if (box10.style.display == "inline-block")
                box10.style.display = "inline-block";

            if (box11.style.display == "inline-block")
                box11.style.display = "inline-block";

            if (box12.style.display == "inline-block")
                box12.style.display = "inline-block";


        } else {
            box1.style.display = "none";
            box2.style.display = "none";
            box12.style.display = "none";
            box10.style.display = "none";
            box11.style.display = "none";

        }
    }

if(android.checked || ios.checked || windows.checked)
{
    if(android.checked)
    {

        if (box1.style.display == "inline-block")
                box1.style.display = "inline-block";
        if (box2.style.display == "inline-block")
                box2.style.display = "inline-block";
        if (box3.style.display == "inline-block")
                box3.style.display = "inline-block";
        if (box11.style.display == "inline-block")
                box11.style.display = "inline-block";
        if (box12.style.display == "inline-block")
                box12.style.display = "inline-block";
        if (box5.style.display == "inline-block")
                box5.style.display = "inline-block";
        if (box6.style.display == "inline-block")
                box6.style.display = "inline-block";

    if (box7.style.display == "inline-block")
                box7.style.display = "inline-block";
            
    }
    else 
    {   
                        box7.style.display = "none";

        box6.style.display = "none";
        box1.style.display = "none";
        box2.style.display = "none";
        box11.style.display = "none";
        box5.style.display = "none";
        box12.style.display = "none";
        box3.style.display = "none";
    }

if(ios.checked)
{
     if (box4.style.display == "inline-block")
                box4.style.display = "inline-block";          
}
else{
                    box4.style.display = "none";          

}
if(windows.checked)
{
    if (box8.style.display == "inline-block")
                box8.style.display = "inline-block";
    if (box9.style.display == "inline-block")
                box9.style.display = "inline-block";
    if (box10.style.display == "inline-block")
                box10.style.display = "inline-block";
}
else
{
                box10.style.display = "none";
                box8.style.display = "none";
                box9.style.display = "none";
    
}


}








}