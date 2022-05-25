


function newToy(){
  

    var prod;
    prod.addTOHtml2();

    for (var i = 0; i < json.length; i++) {
        if (json[i].catagori === "-+4") {
        prod = new Product(json[i].name , "blabla" ,json[i].pic)
         prod.addTOHtml() 
        }
    }


}

function newToy1(){
    
    var prod;
    prod.addTOHtml2();
    
    for (var i = 0; i < json.length; i++) {
        if (json[i].catagori === "-+8") {
        prod = new Product(json[i].name , "blabla" ,json[i].pic)
        prod.addTOHtml() 
        }
    }
}

function newToy2(){
    
    for (var i = 0; i < json.length; i++) {
        if (json[i].catagori === "-+9") {
        var prod = new Product(json[i].name , "blabla" ,json[i].pic)
         prod.addTOHtml() 
        }

    }

}

function newToy3(){
    
    for (var i = 0; i < json.length; i++) {
        var prod = new Product(json[i].name , "blabla" ,json[i].pic)
         prod.addTOHtml() 
        }
}







