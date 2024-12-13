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
        let data=m[r][c].substring(1,m[r][c].length-1);
        tableCol.innerText=data;
        tableRow.append(tableCol);
      }
      table.append(tableRow);
    }
    const xValues = [];
    const yValues = [];
    for(let i=1;i<m.length;i++){
        xValues[i-1]=parseInt(m[i][0].substring(1,m[i][0].length-1));
        yValues[i-1]=parseInt(m[i][1].substring(1,m[i][1].length-1));
    }
    let ch = document.getElementById("myChart");
    new Chart(ch, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            pointRadius: 2,
            label: 'MIGRANTI ANNUI',
            fill: false,
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.5)",
            data: yValues
        }]
    },
    options: {}
    });
}
}
