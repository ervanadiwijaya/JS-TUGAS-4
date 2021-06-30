// declare var for student -> a, b, c
var a = 3 ;
var b = 4 ;
var c = 1 ;
// declare var for value -> max, middle, min
var max; //the highest
var mid; //middle value
var min; //the smallest
// make if statement to get value max mid min
if(a > b && a > c){
    if(b > c){
        max = a; 
        mid = b; 
        min = c;  
    }else{
        max = a; 
        mid = c; 
        min = b;
    }
}else if(b > a && b > c){
    if(a > c){
        max = b; 
        mid = a; 
        min = c;
    }else{
        max = b; 
        mid = c; 
        min = a;
    }
    
}else if(c > a && c > b){
    if(a > b){
        max = c; 
        mid = a; 
        min = b;
    }else{
        max = c; 
        mid = b; 
        min = a;
        
    }
}

//print value
console.log(`nilai tertinggi adalah : ${max}`);
console.log(`${max} ${mid} ${min}`);