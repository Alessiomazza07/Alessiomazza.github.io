var mat=[];
var len=6, nC=len/2;
function genera(s){
    let x=0;
    for (let i = 0; i < len; i++) {
        mat[i] = [];
        for(let j = 0; j < len; j++){
            if(s==="check"){
                mat[i][j]=x;
                x++;
            }else
                mat[i][j]=Math.floor(Math.random()*100);
            let is=String(i);
            let js=String(j);
            let id=is.concat(js);
            document.getElementById(id).innerHTML=mat[i][j];
        }
    }
}
function colora(){
    for(let k=1;k<nC;k+=2){
        for(let r=k;r<len-k;r++){
            if(r==k || r==len-k-1)
                for(let c=k;c<len-k;c++){
                    let rs=String(r);
                    let cs=String(c);
                    let id=rs.concat(cs);
                    document.getElementById(id).style.backgroundColor = "rgb(139, 255, 238)";
                }
            else
                for(let c=k;c<len-k+1;c+=len-(2*k)-1){
                    let rs=String(r);
                    let cs=String(c);
                    let id=rs.concat(cs);
                    document.getElementById(id).style.backgroundColor = "rgb(139, 255, 238)";
                }
        }
    }
}
function ruota(){
    if(mat.length!=0){
    let i=0,j=0;
    for(let k=0;k<nC;k++){
        for(let r=k;r<len-k;r++){
            if(r==k || r==len-k-1)
                for(let c=k;c<len-k;c++){
                    if(r==k){//r uguale, c a destra
                        i=0; j=1;
                        if(c==len-k-1){//r in basso, c uguale
                            i=1; j=0;
                        }
                    }
                    if(r==len-k-1){//r uguale, c a sinistra
                        i=0; j=-1;
                        if(c==k){//r in alto, c uguale
                            i=-1; j=0;
                        }
                    }
                    let rs=String(r+i);
                    let cs=String(c+j);
                    let id=rs.concat(cs);
                    document.getElementById(id).innerHTML=mat[r][c];
                }
            else
                for(let c=k;c<len-k+1;c+=len-(2*k)-1){
                    j=0;//c uguale
                    if(c<nC){//r in alto
                        i=-1;
                    }else{//r in basso
                        i=1;
                    }
                    let rs=String(r+i);
                    let cs=String(c+j);
                    let id=rs.concat(cs);
                    document.getElementById(id).innerHTML=mat[r][c];
                }
        }
    }
    }
}
