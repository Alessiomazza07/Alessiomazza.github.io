const table=document.getElementById("table"); //identificazione tabella creata
let data = localStorage.getItem("data");
let m = data.split(",");
let len = localStorage.getItem("length");
//creazione e update colonne
for(let r=0;r<m.length;r++){
    if(r%len==0){ //creazione riga
        var tableRow= document.createElement('tr');
        var s="tableRow".concat(r/len);
        tableRow.className=s;
    }
    let col=document.createElement('td');
    col.innerText = m[r];
    tableRow.append(col);
    table.append(tableRow); //aggiunta riga alla tabella
}
