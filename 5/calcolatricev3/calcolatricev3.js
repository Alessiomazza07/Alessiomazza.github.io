var id="inserimento", up="operazione";
var an,as="",bn,bs="", operazione="", risultato;
//an=numero a, as= stringa a
//bn=numero b, bs= stringa b
var listOperations=['+','-','*','/','%','x^2','sqrt','1/x'], current=false;
//current=false --> a
//current=true --> b


function aggiungi(n){
    switchCurrentNumber();
    if(current){
        if(bs.charAt(0)==="0"){
            bs="";
        }
        document.getElementById(id).value=0;
        bs+=n;
        bn=parseFloat(bs);
        document.getElementById(id).value=bn;
    }else{
        if(document.getElementById(up).value!==""){
            document.getElementById(up).value="";
        }
        if(as.length>0){
            if(as.charAt(0)==="0"){
                as="";
            }
        }   
        as+=n;
        an=parseFloat(as);
        document.getElementById(id).value=an;
    }
    document.getElementById(id).style.color = "white";
}

function switchCurrentNumber(){
    current=false;
    for(let i=0; i<listOperations.length;i++){
        if(operazione.charAt(0)===listOperations[i].charAt(0)){
            current=true;
        }
    }
}

function cancel(type){
    switchCurrentNumber();
    switch(type){
        case "CE":
            if(current){
                bs="";
                bn=parseFloat(bs);
            }else{
                as="";
                an=parseFloat(as);
            }
            document.getElementById(id).value=0;
            break;
        case "C":
            as="";
            an=parseFloat(as);
            bs="";
            bn=parseFloat(bs);
            document.getElementById(id).value=0;
            document.getElementById(up).value="";
            break;
        case "back":
            if(current){
                bs=bs.slice(0,-1);
                bn=parseFloat(bs);
                document.getElementById(id).value=bn;
                
            }else{
                if(as.length<2){
                    as='';
                    an=parseFloat(as);
                    document.getElementById(id).value=0;
                }else{
                    as=as.slice(0,-1);
                    an=parseFloat(as);
                    document.getElementById(id).value=an;
                }
            }
            break;
    }
}

function opposite(sign){
    switchCurrentNumber();
    if(sign!=="0" && sign!=""){
    if(current){
        if(sign==='-'){
            bs=bs.slice(1,bs.length);
        }else {
            bs="-"+bs;
        }
        bn=parseFloat(bs);
        document.getElementById(id).value=bn;
    }else{
        if(sign==='-'){
            as=as.slice(1,as.length);
        }else {
            as="-"+as;
        }
        an=parseFloat(as);
        document.getElementById(id).value=an;
    }
    }
}

function point(){
    if(current){
        if(bs.length=0)
            bs="0.";
        else
            bs+=".";
        document.getElementById(id).value=bs;
    }else{
        if(bs.length=0)
            as="0.";
        else
            as+=".";
        document.getElementById(id).value=as;
        document.getElementById(id).style.color="white";
    }
}

function setOperation(o){
    switchCurrentNumber();
    operazione=o;
    let s=document.getElementById(id).value;
    document.getElementById(up).value=as;
    switch(o){
        case '+':
        case '-':
            document.getElementById(up).value+= o;
            break;
        case '%':
            document.getElementById(up).value+= o;
            document.getElementById(id).value+= o;
            break;
        case '*':
            document.getElementById(up).value+= "\u00D7";
            break;
        case '/':
            document.getElementById(up).value+= "\u00F7";
            break;
        case 'x^2':
            document.getElementById(up).value+="\u00B2";
            document.getElementById(id).value+="\u00B2";
            break;
        case 'sqrt':
            s= "\u221A" + s;
            document.getElementById(up).value=s;
            document.getElementById(id).value=s;
            break;
        case '1/x':
            s= "1/"+s;
            document.getElementById(up).value=s;
            document.getElementById(id).value=s;
            break;
    }
}

function calcola(){
    if(operazione!=="" && (an!=undefined || bn!=undefined)){
    switch(operazione){
        case '+':
            risultato = an+bn;
            break;
        case '-':
            risultato = an-bn;
            break;
        case '*':
            risultato = an*bn;
            break;
        case '/':
            if(bs.charAt(0)!=="0")
                risultato = an/bn;
            else{
                window.alert("Impossibile dividere per 0");
                risultato=0;
            }
            break;
        case 'x^2':
            risultato=an**2;
            break;
        case 'sqrt':
            if(an==undefined)
                risultato=Math.sqrt(bn);
            else
                risultato=Math.sqrt(an);
            break;
        case '%':
            if(current){
                risultato=an*bn/100;
            }else{
                risultato=an/100;
            }
            break;
        case '1/x':
            if(current){
                if(bn!=0){
                    risultato=1/bn;
                }else{
                    window.alert("Impossibile dividere per 0");
                    risultato=0;
                }
            }else{
                if(an!=0){
                    risultato=1/an;
                }else{
                    window.alert("Impossibile dividere per 0");
                    risultato=0;
                }
            }
            break;
    }
    document.getElementById(up).value+=bs+"=";
    document.getElementById(id).value = risultato;
    as=risultato;
    an=parseFloat(as);
    bs="";
    bn=parseFloat(bs);
    operazione="";
    }else{
        document.getElementById(up).value = as+"=";
        document.getElementById(id).value = as;
    }
}
