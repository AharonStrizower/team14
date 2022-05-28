let cuont;


window.onload = function(){

    const activePage = window.location.pathname;
    console.log(activePage);
    
     document.querySelectorAll('a').forEach(link => {    
      if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
      }
    });
         
}
    
    
function isHeInsed(producrId) {

    cuont = 0;
    const navLinks = document.querySelectorAll('span');
    navLinks.forEach(bla);

    function bla(A) {
      if(A.textContent.includes(producrId)){
        cuont +=1;
    }
      }


    if (cuont > 0) {
        return (false)
    } else {
        return (true)
     }

}

function CLEAR() {

const list = document.getElementById("HR");
while (list.hasChildNodes()) {
 list.removeChild(list.firstChild);

}}



function newToy() {

    CLEAR()

    for (var i = 0; i < json.length; i++) {
        if (json[i].catagori === "-+4" && isHeInsed(json[i].name)) {         
            prod = new Product(json[i].name, "blabsa", json[i].pic)
            prod.addTOHtml()
        }
    }
}

function newToy1() {
    CLEAR()

    for (var i = 0; i < json.length; i++) {
        if (json[i].catagori === "-+8" && isHeInsed(json[i].name)) {
            prod = new Product(json[i].name, "blabla", json[i].pic)
            prod.addTOHtml()
        }
    }
}

function newToy2() {

    CLEAR()
    for (var i = 0; i < json.length; i++) {
        if (json[i].catagori === "-+9" && isHeInsed(json[i].name)) {
            var prod = new Product(json[i].name, "blabla", json[i].pic)
            prod.addTOHtml()
        }

    }
}


function newToy3() {
    CLEAR()
   
    for (var i = 0; i < json.length; i++){
        if (isHeInsed(json[i].name)) {
        var prod = new Product(json[i].name, "blabla", json[i].pic)
        prod.addTOHtml()
    }
}
}







