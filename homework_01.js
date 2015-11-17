/* es 1 iterativo */
function ex_1_I(array){

var tot=0;

for(i = 0; i < array.length; i++){
        if(array[i] < 0){
            return tot;
        } else {
            tot += array[i];
            }
     }

return tot;
}

//PER TIZIANO function ex_1_I(x){
//	return sommaI(x)
//    }
//}

/*es 1 ricorsivo*/

function ex_1_R(array){
if(array.length==0||array[0]<0){
	return 0;
}else {

	return array[0]+sommaR(array.slice(1));
}
}

/*es 2 iterativo*/
function ex_2_I(n){
	var tot=0
		
		for(i=0;i<n;i++){
		tot+=1+2*i;
	}

	return tot;
}
/*es 2 ricorsivo*/
function ex_2_R(n) {
    if (n==0) {
        return 0;
    } else {
        return 2*n-1+ex_2_R(n-1);
    }
}

/*es 3 iterativo*/
function ex_3_I(array){
	media=0;
	for(i=0;i<array.length;i++){
		media+=array[i];
	}
	media=media/array.length;
	return media;
}

/*es 3 ricorsivo*/
function ex_3_R(myarray) {
    return avgAllRW(myarray) / myarray.length;
}


/*es 4 iterativo*/
function ex_4_I(a,b){
	var tot=0;
	if(a<b){
		
		for(i=a;i<=b;i++){
		tot=tot+i;
	}

	}else{
		
		for (i=b;i<=a;i++){
			 tot=tot+i;
		}
		
	}
	return tot;

}


/*es 4 ricorsivo*/
function ex_4_R(a,b){
	 if (a == b) {
        return a;
    } else {
        return a+sumIntervalRW(a+1,b);
    }

}






/*es 5 iterativo*/
function ex_5_I(a,b){
var mult=0;
	for(i=0;i<b;i++){
		mult+=a;

	}
return mult;
}

/*es 5 ricorsivo*/
function ex_5_R(a,b){
	if(b==0){

		return 0;
	}else {
		return a + multR(a, b-1);
	}
}



/*es 6 iterativo*/

function ex_6_I(a, b){
  resto = 0;
  cont = 0;
  divid = a;
  divis = b;
    do{
     cont++;
     divid = divid - divis;
         if(divid < 0) {
            divid = 0; 
          }
    }while(divid >= divis);
        if(divis > divid){
            resto = divid;
        }
    
  return cont + ' resto ' + resto;  
}    

/*es 6 ricorsivo*/

/*function divR(a,b){
	if(a<b){
		document.writeln("Il risultato è: "+a);
		
		return a;
	}else {
		return 1 + divR(a-b,b);
	}
	
}
*/


/*es 7 iterativo*/
function ex_7_I(x, y){
  tot = 1;
    for(var i = 0; i < y; i++){
       tot = ex_5_I(tot, x);
    }
  return tot;
}



/*es 7 ricorsivo*/



function ex_7_R(x, y){
  if(y == 0){
    return 1;
  } else {
    return  ex_5_R( x, ex_7_R(x, (y - 1)));
  }
}
/*es 8 iterativo*/


/*es 8 ricorsivo*/



/*es 9 iterativo*/
function ex_9_I(array){
var arrayInvert=[];
lung=array.length;
var n=0;

for (i=0;lung>=i;lung--){
arrayInvert[n]=array[lung];
n++;
}

/*for(i=0;i<=array.length;i++){
	console.log(arrayInvert[i]);
}*/
document.writeln("Invertito");
return arrayInvert;


}

/*es 9 ricorsivo*/
function ex_9_R(array){
	iarray=[];
    if(array.length == 0){
        return iarray;
     } else { 
        return iarray = ex_9_R(myArray.slice(1));
        }
}

/*es 10 iterativo */
function ex_10_I(a,b){
	var array=[];
	for(i=0;i<b;i++){
		array[i]=a;
	}

/*	for(i=0;i<array.length;i++){
	console.log(array[i]);
}
*/
document.writeln("Replicato");
return array;
}


/*es 10 ricorsivo */
function ex_10_R(a, n){
    if(n == 0){
      array = [];
       return array[a];
     } else {
       return a, ex_10_R(a, (n - 1));
  }
}




/*es 11 iterativo */




/*es 11 ricorsivo */
