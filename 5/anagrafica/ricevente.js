const table=document.getElementById("table"); //identificazione tabella creata
let data = localStorage.getItem("data");
let m = data.split(",");
let len = localStorage.getItem("length");
let mat=[], i=0;
for(let r=0;r<m.length/len;r++){
    mat[r]=[];
    for(let c=0;c<len;c++){
        mat[r][c]=m[i];
        i++;
    }
}
for(let j=0;j<mat.length;j++){
    let tableRow= document.createElement('tr'); //creazione riga
    let s="tableRow".concat(j);
    tableRow.className=s;
    for(let i=0;i<mat[0].length;i++){
        let col=document.createElement('td');
        col.innerText = mat[j][i];
        tableRow.append(col);
    }
    table.append(tableRow); //aggiunta riga alla tabella
} 
