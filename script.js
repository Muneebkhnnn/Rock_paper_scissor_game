let userscore=0
let compscore=0

const choices=document.querySelectorAll('.tinochoice') // tinochoice class h , tino div m h yh class , tino div ki class ko acces krlya 
let msg=document.querySelector('#press')

let comp_score=document.querySelector('#comp-score')
let user_score=document.querySelector('#user-score')

draw=()=>{
    console.log('Game draw')
    msg.innerText='Game Draw'
    msg.style.backgroundColor="orange"
}

show_win=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++
        console.log('user win')
        user_score.innerText=userscore
        msg.innerText=`your ${userchoice} beats comp ${compchoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compscore++
        console.log('compwin')
        msg.innerText='computer win'
        comp_score.innerText=compscore
        msg.innerText=`comp ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"

    }
}


playgame=(userchoice) =>{
    console.log('you choose', userchoice)
    let compchoice=gencompchoice()
    console.log('computer choose', compchoice)

    if(userchoice===compchoice){
        draw()
    }else{
        let userwin=true

        if(userchoice==='rock'){
            compchoice==='paper' ? userwin=false:true 
        }
        else if(userchoice==='paper'){
            compchoice==='scissor' ? userwin=false:true 
        }
        else{
            compchoice==='rock' ? userwin=false:true 
        }
    show_win(userwin , userchoice, compchoice)
    }

}


choices.forEach((choice)=>{// yha loop chlya choice srf ek variable h jo pass hua h as a perimeter, yh choice variable iterate krega tino choices pr
    choice.addEventListener('click', ()=>{ // event listener taki user jab tap kre to console m wo show ho
        let userchoice=choice.getAttribute('id') // id m choice pdi h use access kya 
        // console.log('you choose', getid) // or yha (jb click hua in tino m s kisi bhi image pr)  to wo choice print kradi
        playgame(userchoice)
    })
})

 gencompchoice=()=>{
   let Arr=['rock','paper','scissor']
   getidx=Math.floor(Math.random()*3)
    return Arr[getidx]
    
}