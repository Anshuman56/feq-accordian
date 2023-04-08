const accordions = document.getElementsByTagName('h2')
const arrows = document.getElementsByTagName('img')
const div= document.querySelectorAll('.row')
const p =document.querySelectorAll('p')
let currentPanel = null
let panelOpen = false

for(let i = 0; i < 5; i++){
    accordions[i].addEventListener('click', (event)=>{
        if (!panelOpen){
            //for(let i = 0; i < 5; i++) accordions[i].style.fontWeight = '500'
            //event.target.style.fontWeight = '800'
            //event.target.style.color = 'black'
            currentPanel = event.target
            panelOpen = true
            arrows[i].style.transform = 'scaleY(-1)'
            div[i].style.height='80px'
             p[i].style.display='block'
        }
        else if (currentPanel == event.target && panelOpen){
            //currentPanel.style.fontWeight = '500'
           // currentPanel.style.color = 'hsl(240, 6%, 50%)'
            panelOpen = false
            arrows[i].style.transform = 'scaleY(1)'
            div[i].style.height='35px'
            p[i].style.display='none'       
        }
        else if (currentPanel != event.target && panelOpen){
            currentPanel.click()
            //for(let i = 0; i < 5; i++) accordions[i].style.fontWeight = '500'
           // event.target.style.fontWeight = '800'
            //event.target.style.color = 'black'
            currentPanel = event.target
            panelOpen = true
            arrows[i].style.transform = 'scaleY(-1)'  
            div[i].style.height='80px'
             p[i].style.display='block'          
        }
    })
}
// const h2 = document.querySelectorAll('h2');
// const p =document.querySelectorAll('p');
// const div= document.querySelectorAll('.row');
// const icon= document.querySelectorAll('img');
// let openPanel = false;
// let carrentPanel = null;

// console.log(div)
// console.log(p)
// console.log(h2)

// let i = 2;
// h2[i].addEventListener('click', e => {
//     console.log(e)
//     if(!openPanel){
//         div[i].style.height='80px';
//         p[i].style.display='block';
//         icon[i].style.transform='scaleY(-1)';
//         openPanel=true;
//         //traget= e.traget;
//     }
//     else if(openPanel){
//         div[i].style.height='35px';
//         p[i].style.display='none';
//         icon[i].style.transform ='scaleX(-1)';
//         openPanel= false;
//     }
//     console.log("open panel val "+ openPanel)
    // else if(carrentPanel != e.target && openPanel){
    //     carrentPanel.click();
    //     div[i].style.height='80px';
    //     p[i].style.display='block';
    //     icon[i].style.transform='scaleY(-1)';
    //     openPanel=true;
    //     traget= e.traget;
    // }
//})

// for(let i=0; i<5;i++){ 
//     h2[i].addEventListener('click', e => {
//         console.log(e)
//         if(!openPanel){
//             div[i].style.height='80px';
//             p[i].style.display='block';
//             icon[i].style.transform='scaleY(-1)';
//             openPanel=true;
//             //traget= e.traget;
//         }
//         else if(openPanel){
//             div[i].style.height='35px';
//             p[i].style.display='none';
//             icon[i].style.transform ='scaleX(-1)';
//             openPanel= false;
//         }
//         console.log("open panel val "+ openPanel)
//         // else if(carrentPanel != e.target && openPanel){
//         //     carrentPanel.click();
//         //     div[i].style.height='80px';
//         //     p[i].style.display='block';
//         //     icon[i].style.transform='scaleY(-1)';
//         //     openPanel=true;
//         //     traget= e.traget;
//         // }
//     })
// }