const about= document.querySelector('#about')
const aboutContent= document.querySelector('.about-content')
const news=document.querySelector('#news')
const newsCar=document.querySelector('.newsCar')
const contact=document.querySelector('#contact')
const contactAdres=document.querySelector('.contactAdres')

about.addEventListener('click',()=>{
const aboutBox= new WinBox({
        title:'About US',
        modal:false,    
        width:'400px',
        height:'400px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        // html:'<h1 style="">Car sales showroom</h1>',
         mount:aboutContent,
    })
})

news.addEventListener('click',()=>{
    const newsBox=new WinBox({
           title:'News',
           modal:false,    
           width:'400px',
           height:'400px',
           top:50,
           right:50,
           bottom:50,
           left:50,
        //    html:'<h1 style="">Car sales showroom</h1>',
             mount:newsCar,
       })
   })
   
   contact.addEventListener('click',()=>{
    const contactBox=new WinBox({
           title:'Contact',
           modal:false,    
           width:'400px',
           height:'400px',
           top:50,
           right:50,
           bottom:50,
           left:50,
        //    html:'<h1 style="">Car sales showroom</h1>',
             mount:contactAdres,
       })
   })
   
