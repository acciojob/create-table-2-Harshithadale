function createTable() {
    //Write your code here
    const rn = prompt("Input number of rows")
    const cn=prompt("Input number of columns")
    document.getElementById("myTable").innerHTML = "";
    for(let i = 0;i<rn;i++){
        let row = `<tr>`
        for(let j=0;j<cn;j++){
            row += `Row-${i} Column${j}`
        }
        row +=`</tr>`
        document.getElementById("myTable").innerHTML += row
    }
  
}
