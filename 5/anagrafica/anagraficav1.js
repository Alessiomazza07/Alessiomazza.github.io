var mat=[];
var nRighe=0;
const ids=["name","second_name","address","city","mail","code"];
function addRow(event){ //aggiunge riga->tabella 
    event.preventDefault(); //prevenzione inaspettato ricaricamento della pagina
    var dati=[];
    //acquisizione dati
    for(let i=0;i<ids.length;i++)
        dati[i]=document.getElementById(ids[i]).value;
    if(!is_full(dati)){return;} //controllo input pieni
    const table=document.querySelector("table.table"); //identificazione tabella creata
    let tableRow= document.createElement('tr'); //creazione riga
    let s="tableRow".concat(nRighe);
    tableRow.className=s;
    mat[nRighe]=[];
    //creazione e update colonne
    for(let i=0;i<ids.length;i++){
        let col=document.createElement('td');
        mat[nRighe][i]=dati[i];
        col.innerText = mat[nRighe][i];
        tableRow.append(col);}
    nRighe++;
    table.append(tableRow); //aggiunta riga alla tabella
    for(let i=0; i<ids.length;i++)
        document.getElementById(ids[i]).value=""; //azzera input
}
function is_full(dati){
    for(let i=0;i<dati.length;i++)
        if(dati[i].length==0)
            return false;
    return true;
}
