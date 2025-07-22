// let demo=document.querySelector('.demo')
// console.log(`the inner HTML for demo is :${demo.innerHTML} and it's type is ${typeof(demo.innerHTML)} and it's number oa alphas is ${demo.innerHTML.length}`)
// console.log(`the inner Text for demo is :${demo.innerText} and it's type is ${typeof(demo.innerText)} and it's number oa alphas is ${demo.innerText.length}`)
// console.log(`the text content for demo is :${demo.textContent} and it's type is ${typeof(demo.textContent)} and it's number oa alphas is ${demo.textContent.length}`)
// // let txthtml=demo.innerHTML
// // let txt=demo.innerText
// // let content=demo.textContent
// // let reTyped=document.querySelector('.re-typed')
// // // reTyped.innerHTML=`This is read inner html ${txthtml}`
// // // reTyped.innerHTML+=`<br><hr><br> This is read inner text ${txt}`
// // // reTyped.innerHTML+=`<br><hr><br>  This is read text content ${content}`
// // reTyped.innerText+=`<br><hr><br>  This is inner text but show inner html${txthtml}`
// // reTyped.innerText+=`<br><hr><br>  This is inner text but show inner text${txt}`
// // reTyped.innerText+=`<br><hr><br>  This is inner text but show text content${content}`
// // reTyped.textContent+=`<br><hr><br>  This is text content but show inner html${txthtml}`
// // reTyped.textContent+=`<br><hr><br>  This is text content but show inner text${txt}`
// // reTyped.textContent+=`<br><hr><br>  This is text content but show text content${content}`
// let result=document.querySelector('.analysis')
// for(let i=0 ; i<demo.innerHTML.length ; i++)
// {   
//     result.innerHTML+=`${i} is ${demo.innerText[i]}<br>`

// }

// result.innerHTML+=`<hr> the slice for 4 chars from sring 1 is ${demo.innerHTML.substr(3,7)}`
// result.innerHTML+=`<hr> the splitted is ${demo.innerHTML.split(' ')}`


// let x='hello world'
let i=0;
// for(;i<5;)
// {
//     console.log(`using for loop to print 5 times${x}`)
//     i++
// }
// while(i<5)
// {
//      console.log(`using while loop to print 5 times${x}`)
//     i++  
// }
// do
// {
//        console.log(`using for loop to print 5 times${x}`)
//     i++
// }
// while(i<-1)
// let x=true
// if(x===1)
//     alert('good')
// else
//     alert('bad')


let mail=document.querySelector('#mail')
let reset=document.querySelector('button')
let demo=document.querySelector('.demo')
let ency=""
let indx=""
reset.addEventListener('click',()=>{
// let strt=mail.value.slice(0,2)
// for(let i=4;i<mail.value.length;i++)
//     {
        
//         strt+='*'
//         if(mail.value[i]=='@')
//         {
//             indx=i
//             thn=mail.value.slice(indx,indx+3)
//             break
//         }
//         else
//         {
//             strt+='*'
//         }
//     }
//             for(let j=indx+3;j<mail.value.length;j++)
//         {
//                     ency+='*'

//         }
//     demo.innerHTML=strt+thn+ency
let txt=mail.value.split('@')
    let pre=txt[0].slice(0,2)
for(let i=2;i<txt[0].length;i++)
{
    pre+='*'
}
let post=txt[1].slice(0,3)
for(let j=3;j<txt[1].length;j++)
{
    post+='*'
}
demo.innerHTML=pre+'@'+post
})