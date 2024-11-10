var mat=[];
var nRighe=0;
//crea tabella
function createTable(){
    const tableContainer=document.querySelector("div.tableContainer");
    const headers=["Nome","Cognome","Indirizzo","Città","Email","Codice Fiscale"];
    while(tableContainer.firstChild) tableContainer.removeChild(tableContainer.firstChild);
    let table= document.createElement('table');
    table.className="table";
    //creazione head
    let tableHead= document.createElement('thead');
    tableHead.className="tableHead";
    let tableHeadRow= document.createElement('tr');
    tableHeadRow.className="tableHeadRow";
    for(i in headers){
        let tableHeader=document.createElement('th');
        tableHeader.innerText=headers[i];
        tableHeadRow.append(tableHeader);
    }
    tableHead.append(tableHeadRow)
    table.append(tableHead);
    //creazione body
    let tableBody=document.createElement('tbody');
    tableBody.className="tableBody";
    table.append(tableBody);
    //aggiunta tabella
    tableContainer.append(table);
}
//aggiunge riga->tabella
function addRow(){
    //acquisizione dati
    var nomeDato = document.getElementById("name").value;
    var cognomeDato = document.getElementById("second_name").value;
    var addressDato = document.getElementById("address").value;
    var cityDato = document.getElementById("city").value;
    var mailDato = document.getElementById("mail").value;
    var codeDato = document.getElementById("code").value;
    //controllo dati
    if(!is_full(nomeDato,cognomeDato,addressDato,cityDato,mailDato,codeDato) || !contain(nomeDato,"letters")
        || !contain(cognomeDato,"letters") || !contain(addressDato,"address_needs") || !contain(cityDato,"letters") ||
        !contain(mailDato,"mail_needs") || !contain(codeDato,"cod_fis_needs"))
        return;
    //identificazione tabella creata
    const table=document.querySelector("table.table");
    //creazione riga
    let tableBodyRow= document.createElement('tr');
    tableBodyRow.className="tableBodyRow";
    mat[nRighe]=[];
    //creazione e update colonne
    let nome= document.createElement('td');
    mat[nRighe][0]=nomeDato;
    nome.innerText = mat[nRighe][0];
    let cognome= document.createElement('td');
    mat[nRighe][1] = cognomeDato;
    cognome.innerText = mat[nRighe][1];
    let ind= document.createElement('td');
    mat[nRighe][2] = addressDato;
    ind.innerText = mat[nRighe][2];
    let city= document.createElement('td');
    mat[nRighe][3] = cityDato;
    city.innerText = mat[nRighe][3];
    let mail= document.createElement('td');
    mat[nRighe][4] = mailDato;
    mail.innerText = mat[nRighe][4];
    let codFis= document.createElement('td');
    mat[nRighe][5] = codeDato;
    codFis.innerText = mat[nRighe][5];
    nRighe++;
    //aggiunta dati
    tableBodyRow.append(nome,cognome,ind,city,mail,codFis);
    table.append(tableBodyRow);
    //azzera input
    clear();
}
//controllo validità input
function contain(word,type){
    let bool=true;
    const validChar = {" ": true,'-': true,'.': true,"'": true,',': true,'à': true, 'è': true,
        'é': true, 'ì': true, 'ò': true, 'ù': true,'À': true, 'È': true, 'Ì': true,
        'Ò': true, 'Ù': true};
    switch(type){
        case "letters":
            console.log("lettere");
            for(const ch of word){
                if((ch<'a' || ch>'z') && (ch<'A' || ch>'Z')){
                    bool=false;
                    break;
                }
            }
            console.log(bool);
        break;
        case "cod_fis_needs":
            console.log("codice fiscale:");
            for(const ch of word){
                if((ch<'A' || ch>'Z') && (ch<'0' || ch>'9')){
                    bool=false;
                    break;
                }
            }
            console.log(bool);
        break;
        case "address_needs":
            console.log("indirizzo: ");
            for(const ch of word){
                if((ch<'a' || ch>'z') && (ch<'A' || ch>'Z') && (ch<'0' || ch>'9') && !(ch in validChar)){
                    bool=false;
                    break;
                }
            }
            console.log(bool);
        break;
        case "mail_needs":
            console.log("mail: ");
            let nc=0;
            let np=0;
            for(const ch of word){
                if((ch<'a' || ch>'z') && (ch<'A' || ch>'Z') && ch!='@' && ch!='.'){
                    bool=false;
                    break;
                }else{
                    if(ch=='@')
                        nc++;
                    if(ch=='.')
                        np++;
                }
            }
            if(nc!=1 || np<1)
                bool=false;
            console.log(bool);
        break;
        default:
            console.log("Uno dei tipi è sbagliato!");
    }
    return bool;
}
//controllo input pieni
function is_full(dato1,dato2,dato3,dato4,dato5,dato6){
    if(dato1.length>0 && dato2.length>0 && dato3.length>0 && dato4.length>0 && dato5.length>0 && dato6.length>0){
        return true;
    }
    return false;
}
//azzera input
function clear(){
    document.getElementById("name").value="";
    document.getElementById("second_name").value="";
    document.getElementById("address").value="";
    document.getElementById("city").value="";
    document.getElementById("mail").value="";
    document.getElementById("code").value="";

}
