/* es 1 iterativo */
function sommaI(array){

var i=0;
var tot=0;
while(array[i]>=0){
	tot+=array[i];
	i++;
}
return tot;
}

/*es 1 ricorsivo*/

function sommaR(array){
if(array.length==0||array[0]<0){
	return 0;
}else {

	return array[0]+sommaR(array.slice(1));
}
}

/*es 2 iterativo*/
function somma2I(n){
	var tot=0
		
		for(i=0;i<n;i++){
		tot=tot+(2*i)+1;
	
	}

	return tot;
}
/*es 2 ricorsivo*/
function somma2R(n){
	if (n==0){
		return 0;
	}else{
	return (2*n-1+somma2R(n-1));	
	}
}

/*es 3 iterativo*/
function mediaI(array){
	media=0;
	for(i=0;i<array.length;i++){
		media+=array[i];
	}
	media=media/array.length;
	return media;
}

/*es 3 ricorsivo*/
function mediaR(array){
/*return array[0]+mediaR(array);*/

}


/*es 4 iterativo*/
function sommaIntI(a,b){
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
function sommaIntR(a,b){
	if(a<b){
		if(b<a || b==a){
			return b;
		} else {
			return b +sommaIntR(a, b-1);
		}
	} else{
		if(b>a || b==a){
			return b;
		}else {
			return a + sommaIntR((a-1),b);
		}
	}

}






/*es 5 iterativo*/
function multI(a,b){
var mult=0;
	for(i=0;i<b;i++){
		mult+=a;

	}
return mult;
}

/*es 5 ricorsivo*/
function multR(a,b){
	if(b==0){

		return 0;
	}else {
		return a + multR(a, b-1);
	}
}



/*es 6 iterativo*/

function div(a,b){
var div=0;
var resto=0;
	while((a-b)>0){
		
			a=a-b;
			div++;
		}
		resto=a;

		document.writeln("Il risultato è: "+div);
		document.writeln("con resto di: "+resto);
		return (div,resto);
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
function powI(a,b){
var pow=1;
	for(var i=0;i<b;i++){
		pow=multI(pow,a);
	}
	
	return pow;
}



/*es 7 ricorsivo*/


/*es 8 iterativo*/


/*es 8 ricorsivo*/



/*es 9 iterativo*/
function invert(array){
var arrayInvert=[];
lung=array.length;
var n=0;

for (i=0;lung>=i;lung--){
arrayInvert[n]=array[lung];
n++;
}

for(i=0;i<=array.length;i++){
	console.log(arrayInvert[i]);
}
document.writeln("Invertito");
return arrayInvert;


}

/*es 9 ricorsivo*/


/*es 10 iterativo */
function replicate(a,b){
	var array=[];
	for(i=0;i<b;i++){
		array[i]=a;
	}

	for(i=0;i<array.length;i++){
	console.log(array[i]);
}

document.writeln("Replicato");

}


/*es 10 ricorsivo */





/*es 11 iterativo */




/*es 11 ricorsivo */












