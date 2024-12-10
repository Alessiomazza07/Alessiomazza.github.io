function apri(input){
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    let m=[];
    let table=document.getElementById("table");
    reader.onload = function(){
    let content=reader.result;
    let v=content.split("\n");
    for(let i=0;i<v.length;i++){
      m[i]=v[i].split(",");
    }
    for(let r=0;r<m.length;r++){
      let tableRow=document.createElement("tr");
      for(let c=0;c<m[0].length;c++){
        if(r!=0)
          tableCol=document.createElement("td");
        else
          tableCol=document.createElement("th");
        tableCol.innerText=m[r][c];
        tableRow.append(tableCol);
      }
      table.append(tableRow);
    }
    }
}
