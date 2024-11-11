var matFe=[];
var matBe=[];
var len, nC;
function createTable(l){
    if(l%2==0 && l>3){
    const tableContainer=document.querySelector("div.tableContainer");
    let table=document.createElement('table');
    table.className="table";
    for (let r = 0; r < l; r++) {
        let tableRow=document.createElement('tr');
        tableRow.className='tableRow';
        for(let c = 0; c < l; c++){
            let tableCol= document.createElement('td');
            let rs=String(r);
            let cs=String(c);
            let clName=rs.concat(cs);
            tableCol.id=clName;
            tableRow.append(tableCol);
        }
        table.append(tableRow);
    }
    //aggiunta tabella
    tableContainer.append(table);
    len=l;
    nC=l/2;
    colora();
    }
}
function genera(s){
    let x=0;
    for (let i = 0; i < len; i++) {
        matFe[i] = [];
        matBe[i] = [];
        for(let j = 0; j < len; j++){
            matBe[i][j]=0;
            if(s==="check"){
                matFe[i][j]=x;
                x++;
            }else
                matFe[i][j]=Math.floor(Math.random()*100);
            let is=String(i);
            let js=String(j);
            let id=is.concat(js);
            document.getElementById(id).innerHTML=matFe[i][j];
        }
    }
}
function colora(){
    for(let k=1;k<nC;k+=2){
        for(let r=k;r<len-k;r++){
            if(r==k || r==len-k-1){
                for(let c=k;c<len-k;c++){
                    let rs=String(r);
                    let cs=String(c);
                    let id=rs.concat(cs);
                    document.getElementById(id).style.backgroundColor = "rgb(139, 255, 238)";
                }
            }else{
                for(let c=k;c<len-k+1;c+=len-(2*k)-1){
                    let rs=String(r);
                    let cs=String(c);
                    let id=rs.concat(cs);
                    document.getElementById(id).style.backgroundColor = "rgb(139, 255, 238)";
                }
            }
        }
    }
}
function ruotaFrontEnd(){
    if(matFe.length!=0){
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
                    let rs=String(r+i);
                    let cs=String(c+j);
                    let id=rs.concat(cs);
                    document.getElementById(id).innerHTML=matFe[r][c];
                    matBe[r+i][c+j]=matFe[r][c];
                }
            else
                for(let c=k;c<len-k+1;c+=len-(2*k)-1){
                    j=0;//c uguale
                    if(c<nC){//r in alto
                        i=-1;
                    }else{//r in basso
                        i=1;
                    }
                    if(k%2!=0)//r invertita
                        i*=-1;
                    let rs=String(r+i);
                    let cs=String(c+j);
                    let id=rs.concat(cs);
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
