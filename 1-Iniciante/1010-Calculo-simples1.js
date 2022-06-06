const fs = require('fs');
   
const file = fs.readFileSync('./1010-Calculo-simples1.csv',
{encoding:'utf8', flag:'r'});

const rows = file.split('\n');

let total = 0.0;

for(var i=0; i<rows.length; i++) {
    var row = rows[i];
    var rowData = row.split(' ');
    
    total = total + (parseInt(rowData[1]) * parseFloat(rowData[2]));
}
console.log(total);