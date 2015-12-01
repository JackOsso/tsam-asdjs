function t(a){
    if(a.length == 0){
        return 0;
    }
    else{
        return 5*a[0] + t(a.slice(1));
    }
}
function controlPari(a){
    if(a.length == 0){
        return 0;
    }
    else{
        if(a[0] %2 == 0){
            return a[0]*a[0] + controlPari(a.slice(1));
        }
        else{
            return controlPari(a.slice(1));
        }
    }
}
function O(a){
    return a.filter(x => x%2 ==0).reduce((somma, x) => somma + x*x, 0);
}


//<----------------------------->
//creo stack
function Stack(){
	this.stack= [];
}
//aggiungo al prototipo di stack la funzione push
Stack.prototype.push =function(e){
	return this.stack.push(e); //ritorno lo stack aggiornato com l'elemento e inserito 
}

//aggiungi al prototipo stack la funzione pop
Stack.prototype.pop =function(){
	return this.stack.pop(); //ritorno il primo elemento dello stack togliendolo dallo stack
}

//aggiungo al prototipo stack la funzione peek che prende il primo elemento senza toglierlo dallo stack

Stack.prototype.peek = function(){
	return this.stack[this.stack.length-1]; //ritorna l'lemento nella prima posizione
}

//aggiungo al prototipo la funzione isEmpty
Stack.prototype.isEmpty = function(){
	return this.stack.length == 0;
}


function SommaStack(a){
var    pari = new Stack();
var    dispari = new Stack();
var    risultato = new Stack();

for(var i=0;i<a.length;i++){
    if(a[i]%2==0){
        pari.push(a[i]);
    }else {
        dispari.push(a[i]);
    }
    
}


while(pari.isEmpty()==false && dispari.isEmpty()==false){
    risultato.push(pari.pop()*dispari.pop());
    }

var finale=0;

while(risultato.isEmpty()==false){
    finale+=risultato.pop();
}

return finale;
    
}