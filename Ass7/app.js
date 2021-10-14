// const imgs=[];

// imgs[1]=`./Weather\ pics/img1.jpg`;
// imgs[2]=`./Weather\ pics/img2.jpg`;
// imgs[3]=`./Weather\ pics/img3.jpg`;
// imgs[4]=`./Weather\ pics/img4.jpg`;
// imgs[5]=`./Weather\ pics/img5.jpg`;
// imgs[6]=`./Weather\ pics/img6.webp`;
// imgs[7]=`./Weather\ pics/img7.jpg`;

// window.onload=function(){
//     const random=Math.floor(Math.random()*imgs.length);
//     document.body.style.backgroundImage=`url(${imgs[random]})`;
// }



// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const inpText= inp.value;
//     console.log(inpText);
// })

const button=document.getElementById('btn');
const inp=document.getElementById('city');

button.addEventListener('click',()=>{
    const cityName=inp.value;
    console.log(cityName);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e515fd7dc97e002a78b35e6fa342eb7f`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        const maxTemp=data.main.temp_max;
        const minTemp=data.main.temp_min;
        const temperature=parseInt(data.main.temp-273.13);
        const name=data.name;
        const weathCond=data.weather[0].description;

        document.getElementById('city_name').innerHTML=name;
        document.getElementById('max').innerHTML=maxTemp;
        document.getElementById('min').innerHTML=minTemp;
        document.getElementById('temp').innerHTML=temperature;
        document.getElementById('weather').innerHTML=weathCond;

       

    })
    .catch((err) => {
        console.log(err);
        console.log('something went wrong')
    })

    inp.value="";
})

 



