//esame Giacomo Osso ||   04/12/2015

function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}


/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */


var myarray = initialArray();



//<--------------------------------------------------------------------------------------->
//controllo che la somma degli array sia uguale a 11340

function controllaSomma(){
    var somma=0;
    var myarrayC = initialArray();
    for(var i=0;i<myarrayC.length;i++){
        somma= somma + myarrayC[i];
    }

    if(somma==11340){
        return 1;
    }
}

// console.log(controllaSomma());


//<--------------------------------------------------------------------------------------->
//es 1
//Esercizio Ricorsione (15 punti)
//Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo 
//ricorsivo non di coda in javascript che restituisca il numero di elementi presenti
//in A che corrispondono al valore 5070.


//var myarray = initialArray();

function conta(a){ 
    if(a.length==0){ 
        return 0; 
    } else{ 
        if(b[0]==5070){ 
            return 1 + conta(a.slice(1)); 
        } else{
            return 0 + conta(a.slice(1));
        }
    } 
}

/* Passando alla mia funzione esamejs_2 l'array iniziale 
ottengo che ci sono 2 valori che corrispondono a 5070 */


//<--------------------------------------------------------------------------------------->
//es 2
//Esercizio filter/map/reduce (15 punti)
//Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript 
//che restituisca la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
//Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi dell’oggetto Array: filter, map e reduce.


function esFMR(a){
    return Math.sqrt(a.filter(x => x%2 == 0 && x >=0)
        .map(a => a * a)
        .reduce((somma, x) => somma + x, 0));
}

//<--------------------------------------------------------------------------------------->
//es 3 
//Esercizio Stack (25 punti)
//Si implementi una funzione in javascript che implementi l’algoritmo che valuta il valore di un’espressione “fully parentherized”, ovvero un’espressione in cui ogni singola operazione è all’interno di parentesi. 
//Esempio di chiamata:
//evaluateExpression(“( ( 2 + 3) * 4 )”).
//Si noti che ogni elemento dell’espressione è seguito da uno spazio.

//Suggerimento: un possibile algoritmo, qui descritto, richiede l’utilizzo di due stack. 
//Algoritmo: Si legga i caratteri che compongono l’espressione da sinistra a destra e si inserisca ogni valore numerico incontrato in uno stack V, mentre ogni operatore incontrato (+, -, *, /) o ogni parentesi aperta, in uno stack S.
//Nel caso si incontri durante la lettura dell’espressione la parentesi chiusa allora:
//si rimuova due elementi numerici dallo stack V
//si rimuova l’operatore dallo stack e la parentesi aperta dallo stack S
//Si esegua l’operazione tra gli elementi numerici (in ordine inverso rispetto a come sono stati estratti) e l’operatore estratto.
//Si inserisca il risultato dell’operazione nello stack V.

//Quando non ci sono più elementi da analizzare nell’espressione, l’elemento rimanente in testa allo stack V corrisponde al risultato dell’espressione.

function Stack() {
    var items = [];
    this.push = function(elemento){
        items.push(elemento);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
}

function eval(a){

    var v = new Stack();
    var s = new Stack();
    var myarray = a.split(" ");
    
    for(var i = 0; i < myarray.length; i++){
        switch(myarray[i]){
            
            case '+':
                s.push('+');
                break;
                
            case '-':
                s.push('-');
                break;
                
            case '*':
                s.push('*');
                break;
                
            case '/':
                s.push('/');
                break;
                
            case '(':
                s.push('(');
                break;
            
            case ')':
                var numero1 = parseInt(v.pop());
                var numero2 = parseInt(v.pop());
                var operatore = s.pop();
                s.pop();
                switch(operatore){
            
                    case '+':
                        v.push(numero2+numero1);
                        break;
                
                    case '-':
                        v.push(numero2-numero1);
                        break;
                
                    case '*':
                        v.push(numero2*numero1);
                        break;
                
                    case '/':
                        v.push(numero2/numero1);
                        break;
                }
                break;
                
            default:
                v.push(myarray[i]);
                break;
        }
    }
    return v.pop();
}

//console.log(evaluateExpr(eval));

//<--------------------------------------------------------------------------------------->
// es 4 
//Tree (15 punti)
//Si implementi un albero binario di ricerca in javascript e si inseriscano gli elementi contenuti nell’array A[0..n-1], ottenuto da initialArray(), nell’ordine dall’indice 0 all’indice n-1.
//Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.


function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}

BST.prototype.searchNodeR = function(node, e) {
    
    if (node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node;
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e)
            } else {
                return this.searchNodeR(node.left, e)
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e);
}

BST.prototype.insertArray = function(array) {
    for(var i = 0; i < array.length; i++){
        this.add(array[i]);
    }
}



BST.prototype.numeroMax = function(){
  return this.numeroMaxR(this.root);
}

BST.prototype.numeroMaxR = function(currentNode) {
  if(currentNode.right == null) {
      return currentNode.item;
    } else {
      return this.numeroMaxR(currentNode.right);
    } 
}


//var tree = new BST();
//tree.insertArray(myarray);
//tree.maxNum();