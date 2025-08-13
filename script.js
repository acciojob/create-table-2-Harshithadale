function createTable() {
    //Write your code here
    const rn = prompt("Input number of rows")
    const cn=prompt("Input number of columns")
    const table = document.getElementById("myTable");
    table.innerHTML = ""
    for(let i = 0;i<rn;i++){
        let row = `<tr>`
        for(let j=0;j<cn;j++){
            row += `<td>Row-${i} Column${j} </td>`
        }
        row +=`</tr>`
        table.innerHTML += row
    }
  
}
