let arr = [
    {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
    {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
    {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
    {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
    {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
    {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
    {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
    {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
    {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
    {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
    {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
    {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
  ]

  function parsePrice(str){
  return  parseFloat(str.replace(",",".").replace("$",""))
  }
  function number1(str,num) {
    return parsePrice(str)*num
  }
  
  function TakeCosts(goods) {
    let x1=0
    let quant=0
    let wei=0
    let orangeMin
    let a =0
    let p=0
    let w=0
    let o=0

      for(const product of goods) {

        if(product.pricePerKilo){
        x1=x1+number1(product.pricePerKilo,product.weight)
       }else{
        x1=x1+number1(product.pricePerItem,product.quantity)
       }

       if(product.item ==="watermelon"){
          quant = quant+product.quantity 
          w=w+(parsePrice(product.pricePerItem)*product.quantity)
       }else{
         if(product.item==="apple"){
           wei=wei+product.weight
           a=a+(parsePrice(product.pricePerKilo)*product.weight)
         }
       }
        if(product.item==="orange"){
          o=o+(parsePrice(product.pricePerKilo)*product.weight)
          if(!orangeMin || parsePrice(orangeMin.pricePerKilo) > parsePrice( product.pricePerKilo) ){
             orangeMin=product
          }
        }
        if(product.item==="pineapple"){
          p=p+(parsePrice(product.pricePerItem)*product.quantity)
        }
      
      }  
    return "Total costs : "+x1
    +" ,Total quantuty of watermelons : "+quant +", total weight of apple : "+wei +" .The cheapest orange type is:" + orangeMin.type +" Total costs of apples : "+a
    +" Total costs of pineapples : "+p+" Total costs of watermelons : "+w+" Total costs of oranges : "+o
    
 
  }
  
  TakeCosts(arr)
  console.log(TakeCosts(arr) )

  arr.sort((a, b) => a.item.localeCompare(b.item))
 console.log(arr)

let sort=0
 arr.sort((a,b) =>parsePrice(a.pricePerItem||a.pricePerKilo)-parsePrice(b.pricePerItem||b.pricePerKilo) )
 console.log(arr)
