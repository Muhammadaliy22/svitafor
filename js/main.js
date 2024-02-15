var elBox1 = document.querySelector('.box1')
var elBox2 = document.querySelector('.box2')
var elBox3 = document.querySelector('.box3')
var count = 0 
setInterval(()=>{
    count = count + 1
    if(count >1 && count <=3){
    elBox1.classList.add('r')
    elBox2.classList.remove('y')
    elBox3.classList.remove('g')
    }
    if(count == 4 || count == 8){
        elBox1.classList.remove('r')
        elBox2.classList.add('y')
        elBox3.classList.remove ('g')
    }
    if(count >=5 && count <= 7){
        elBox1.classList.remove('r')
        elBox2.classList.remove('y')
        elBox3.classList.add('g')
    }
    if(count >= 8){
        count = 0
    }
}, 1000)


