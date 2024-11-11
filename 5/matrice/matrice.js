var matFe=[];
var matBe=[];
var len, nC;
var created=false;
function createTable(l){
    document.getElementById("length").value="";
    if(!created){
        if(l%2==0 && l>3 && l<11){
            const tableContainer=document.querySelector("div.tableContainer");
            let table=document.createElement('table');
            table.className="table";
            for (let r = 0; r < l; r++) {
                let tableRow=document.createElement('tr');
                tableRow.className='tableRow';
                for(let c = 0; c < l; c++){
                    let tableCol= document.createElement('td');
                    let id=String(r)+String(c);
                 tableCol.id=id;
                    tableRow.append(tableCol);
                }
                table.append(tableRow);
            }
            //aggiunta tabella
            tableContainer.append(table);
            created=true;
            len=l;
            nC=l/2;
            colora();
        }
    }else{
        let table=document.getElementsByClassName("table");
        table[0].remove();
        created=false;
        createTable(l);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("random").addEventListener("click", function() {
        genera('');
    });
    document.getElementById("order").addEventListener("click", function() {
        genera('check');
    });
});
function genera(s){
    matFe.length=0;
    matBe.length=0;
    let x=0;
    for (let i = 0; i < len; i++) {
        matFe[i] = [];
        matBe[i] = [];
        for(let j = 0; j < len; j++){
            matBe[i][j]=0;
            if(s==="check"){
                matFe[i][j]=x;
                x++;
            }else{
                matFe[i][j]=Math.floor(Math.random()*100);
            }
            let id=String(i)+String(j);
            document.getElementById(id).innerHTML=matFe[i][j];
        }
    }
}
function colora(){
    for(let k=1;k<nC;k+=2){
        for(let r=k;r<len-k;r++){
            if(r==k || r==len-k-1){
                for(let c=k;c<len-k;c++){
                    let id=String(r)+String(c);
                    document.getElementById(id).style.backgroundColor = "rgb(139, 255, 238)";
                }
            }else{
                for(let c=k;c<len-k;c+=len-(2*k)-1){
                    let id=String(r)+String(c);
                    document.getElementById(id).style.backgroundColor = "rgb(139, 255, 238)";
                }
            }
        }
    }
}
function ruotaFrontEnd(){
    if(matFe.length!=0 && matFe.length==len){
    let i=0,j=0;
    for(let k=0;k<nC;k++){
        for(let r=k;r<len-k;r++){
            if(r==k || r==len-k-1)
                for(let c=k;c<len-k;c++){
                    if(r==k){//r uguale
                        i=0;
                        if(k%2==0)//c a destra
                            j=1;
                        else //c a sinistra
                            j=-1;
                        if((c==len-k-1 && k%2==0) || (c==k && k%2!=0)){//r in basso, c uguale
                            i=1; j=0;
                        }
                    }
                    if(r==len-k-1){//r uguale
                        i=0;
                        if(k%2==0)//c a sinistra
                            j=-1;
                        else //c a destra
                            j=1;
                        if((c==k && k%2==0) || (c==len-k-1 && k%2!=0)){//r in alto, c uguale
                            i=-1; j=0;
                        }
                    }
                    let id=String(r+i)+String(c+j);
                    document.getElementById(id).innerHTML=matFe[r][c];
                    matBe[r+i][c+j]=matFe[r][c];
                }
            else
                for(let c=k;c<len-k;c+=len-(2*k)-1){
                    j=0;//c uguale
                    if(c<nC){//r in alto
                        i=-1;
                    }else{//r in basso
                        i=1;
                    }
                    if(k%2!=0)//r invertita
                        i*=-1;
                    let id=String(r+i)+String(c+j);
                    document.getElementById(id).innerHTML=matFe[r][c];
                    matBe[r+i][c+j]=matFe[r][c];
                }
        }
    }
    copia(matFe,matBe)
    }
}
function copia(m1,m2){
    for(let r=0;r<m1.length;r++){
        for(let c=0;c<m1[0].length;c++){
            m1[r][c]=m2[r][c];
        }
    }
}
