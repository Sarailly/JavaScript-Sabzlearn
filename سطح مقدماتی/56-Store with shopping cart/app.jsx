
const prodcts=[
    {id:1 ,title:"mobile" ,price:400 , qty:10},
    {id:2 ,title:"laptop" ,price:900 , qty:15},
    {id:3 ,title:"ram" ,price:400 ,qty:0},
    {id:4 ,title:"headphone",price:400 ,qty:1},
    {id:5 ,title:"hard" ,   price:200  ,qty:8},
];
const basket=[
    {id:1 ,title:'mobile' ,price:400 },
    {id:2 ,title: "laptop",price:900 },
    {id:3 ,title:"hard" ,price:200 },
];

const userProducTitle = prompt ("Enter the product title:");

//is product title valid 
if (userProducTitle.length > 0) {  
    //some return boolean
    const isInShop = prodcts.some(function(product) { 
       return product.title==userProducTitle && product.qty>0 ; 
    });

    if(isInShop==true){ 
        //creat new product
        let basketNewProduct = { 
            id:basket.length + 1 ,
            title:userProducTitle,
        };
        
        //find price product
        prodcts.forEach(function(product){ 
            if(product.title==userProducTitle){
                basketNewProduct.price = product.price ;
            }
        });
        
        //push new product to basket
        basket.push(basketNewProduct); 
        
        //total price
        let totalPrice=0;
        basket.forEach(function(product){
            totalPrice= totalPrice + product.price ;
        });

        alert("totalprice:" + totalPrice); //in alert use +

        console.log("basket ->" , basket); // in console use ,
        
    }else{
        alert("product sold out.")
    }
    
}else{
    alert("enter product title:")
}

