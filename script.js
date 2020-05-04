/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function m1(){
   var sp1 = document.getElementById("sp1");
   sp1.className = "sp-1 sp-1-click";
   sp2.className = "sp-1";
   sp3.className = "sp-1";
   sp4.className = "sp-1";
   sp5.className = "sp-1";
   
   var div1 = document.getElementById("div1");
   div1.className = "div-1 l1";
}

function m2(){
   var sp2 = document.getElementById("sp2");
   sp2.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp3.className = "sp-1";
   sp4.className = "sp-1";
   sp5.className = "sp-1";
   
   var div1 = document.getElementById("div1");
   div1.className = "div-1 l2";
   
}

function m3(){
   var sp3 = document.getElementById("sp3");
   sp3.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp2.className = "sp-1";
   sp4.className = "sp-1";
   sp5.className = "sp-1";
   
   var div1 = document.getElementById("div1");
   div1.className = "div-1 l3";
}

function m4(){
   var sp4 = document.getElementById("sp4");
   sp4.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp2.className = "sp-1";
   sp3.className = "sp-1";
   sp5.className = "sp-1";
   
   var div1 = document.getElementById("div1");
   div1.className = "div-1 l4";
}

function m5(){
   var sp5 = document.getElementById("sp5");
   sp5.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp2.className = "sp-1";
   sp3.className = "sp-1";
   sp4.className = "sp-1";
   
   var div1 = document.getElementById("div1");
   div1.className = "div-1 l5";
}



var x = 1;
function n(){
    var div1 = document.getElementById("div1");
    div1.className = "div-1 l"+x;
    x++;
    
    
    
    
    
    
    
    if(x===1){
   sp1.className = "sp-1 sp-1-click";
   sp2.className = "sp-1";
   sp3.className = "sp-1";
   sp4.className = "sp-1";
   sp5.className = "sp-1";
   
}
        
   
    
    if(x===2){
   sp2.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp3.className = "sp-1";
   sp4.className = "sp-1";
   sp5.className = "sp-1";
    }
    
    if(x===3){
   sp3.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp2.className = "sp-1";
   sp4.className = "sp-1";
   sp5.className = "sp-1";
    }
    
    if(x===4){
   sp4.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp2.className = "sp-1";
   sp3.className = "sp-1";
   sp5.className = "sp-1";
    }
    
    if(x===5){
   sp5.className = "sp-1 sp-1-click";
   sp1.className = "sp-1";
   sp2.className = "sp-1";
   sp3.className = "sp-1";
   sp4.className = "sp-1";
    }
    
    if(x===6){
    x=1;
}

}