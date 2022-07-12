
let html ="<tr><th>Iteration</th><th>Result</th></tr>";
let count = 1;
function roll(){
  
  let dice_num = 0;
  let diceinput = document.getElementById("numdice").value;
  let sideinput = document.getElementById("numside").value;
  
 
  for (let i=0;i<diceinput;i++){
      let randomnum = Math.floor(Math.random() * sideinput) +1;
      dice_num += randomnum;
  }
  document.getElementById("demo").innerHTML = "You rolled a " + dice_num;
  let form = document.getElementById("myform").reset();
  record(count,dice_num);
  count++;
}

function record(count,dice_num){
  html += "<tr><td>" + count +"</td><td>" + dice_num +"</td></tr>";
  document.getElementById("tableresult").innerHTML = html;

}

function reset(){
  count=1;
  html="<tr><th>Iteration</th><th>Result</th></tr>";
  document.getElementById("demo").innerHTML = "";
  document.getElementById("tableresult").innerHTML = html;
}

const rollelement = document.getElementById("myBtn");
rollelement.addEventListener("click", roll);

const resetelement = document.getElementById("reset");
resetelement.addEventListener("click", reset);


