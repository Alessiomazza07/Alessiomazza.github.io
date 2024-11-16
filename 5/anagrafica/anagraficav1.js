var mat=[];
var nRighe=0;
const ids=["name","second_name","address","city","mail","code"];
function addRow(){
    var dati=[];
    for(let i=0;i<ids.length;i++){
        dati[i]=document.getElementById(ids[i]).value;
    }
    if(!is_full(dati[0],dati[1],dati[2],dati[3],dati[4],dati[5]) || !contain(dati[0],"letters")
        || !contain(dati[1],"letters") || !contain(dati[2],"address_needs") || !contain(dati[3],"city") ||!contain(dati[5],"cod_fis_needs")){
        console.log("sei qui")
        return;}
    const table=document.querySelector("table.table");
    let tableRow= document.createElement('tr');
    let s="tableRow".concat(nRighe);
    tableRow.className=s;
    mat[nRighe]=[];
    for(let i=0;i<ids.length;i++){
        let col=document.createElement('td');
        mat[nRighe][i]=dati[i];
        col.innerText = mat[nRighe][i];
        tableRow.append(col);
    }
    nRighe++;
    table.append(tableRow);
    for(let i=0; i<ids.length;i++){
        document.getElementById(ids[i]).value="";
    }
}
function contain(word,type){
    const validChar = {" ": true,'-': true,'.': true,"'": true,',': true,'à': true, 'è': true,
        'é': true, 'ì': true, 'ò': true, 'ù': true,'À': true, 'È': true, 'Ì': true,
        'Ò': true, 'Ù': true};
    switch(type){
        case "city":
        case "letters":
            for(const ch of word){
                if((ch<'a' || ch>'z') && (ch<'A' || ch>'Z')){
                    if(type!=="city"){
                        return false;
                    }else if(ch!=" "){
                        return false;
                    }
                }
            }
        break;
        case "cod_fis_needs":
            for(const ch of word){
                if((ch<'A' || ch>'Z') && (ch<'0' || ch>'9')){
                    return false;
                }
            }
        break;
        case "address_needs":
            for(const ch of word){
                if((ch<'a' || ch>'z') && (ch<'A' || ch>'Z') && (ch<'0' || ch>'9') && !(ch in validChar)){
                    return false;
                }
            }
        break;
        default:
    }
    return true;
}
function is_full(dato1,dato2,dato3,dato4,dato5,dato6){
    if(dato1.length>0 && dato2.length>0 && dato3.length>0 && dato4.length>0 && dato5.length>0 && dato6.length>0){
        return true;
    }
    return false;
}
