function java(){
let name=document.getElementById('num').value;
let sum=0;
for(let index=0; index<=name; index++){
sum+=index;
}document.getElementById('jj').innerHTML=sum;
}

function jv(){
    let show=document.getElementById('num').value;
    let value=0;
    for(let index=1; index<=show; index++ ){
        value+=index*1.5;
    }
    document.getElementById('jj').innerHTML=value;

}
function jk(){
    let bal=document.getElementById('num').value;
    let value=0;
    for(let index=1; index<=bal; index+=5 ){
        value+=bal*3.6;
    }
  document.getElementById('jj').innerHTML=value;

}
function checkFee() {
    let fee = 2500;
    let per = 4/100;
    for (let index = 1; index < 6; index++) {
        fee = fee*per + fee;
        let final=index + "year fee=" +fee +"<br>";
        document.getElementById('jj').innerHTML+=final;
        
    }
}


        function checkSpeed() {
            let speed = document.getElementById('speed').value;
            let time = document.getElementById('hour').value;
            for (let  hour = 0; hour <= time; hour++) {
                let final = "you have traveled " + speed * hour + " kilometers in " + hour + " hours" + "<br>";
                document.getElementById('showResult').innerHTML += final;
            }
            // let result = speed * hour;
            // document.getElementById('showResult').innerText = result
        }