

// const anxios=require('anxios');
// const { default: axios } = require('axios');

const API_KEY = 'DEMO_KEY';
const img_urls=[];
const camera_names=[];

const container=document.querySelector(".gallery-container");
const date_container=document.querySelector(".date");
const cardTemplate=document.querySelector('[data-galley-card-template]')



const getCurrentDate=()=>{
    const date=new Date();
    return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()-2}`
};

date_container.textContent=getCurrentDate();

function getMarsImg(){
    const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getCurrentDate()}&api_key=DEMO_KEY`;
    // const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-4-21&api_key=DEMO_KEY`;
    // const photos=(await axios.get(API_URL)).data.photos;
    // console.log(photos);

    fetch(API_URL)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.photos)
            for(let i=0; i<data.photos.length;i++){
                const img_url=data.photos[i].img_src;
                const camera_name=data.photos[i].camera.full_name;
                // img_urls.push(img_url)
                // camera_names.push(camera_name)
                // console.log(img_url)
                const imgCard=cardTemplate.content.cloneNode(true)
                imgCard.querySelector('[data-img]').setAttribute('src', img_url)
                imgCard.querySelector('[data-img-download]').setAttribute('href', img_url)
                imgCard.querySelector('[data-camera-name]').innerText=camera_name

                container.appendChild(imgCard)
            }
            
        })
    return [img_urls, camera_names];
};

getMarsImg()
console.log(img_urls, camera_names);
// fillContainer()


// function fillContainer(){
//     img_urls.forEach((img_url, index)=>{
//         console.log(img_urls)
//         const imgCard=cardTemplate.content.cloneNode(true)
//         imgCard.querySelector('[data-img]').setAttribute(src, img_url)
//         imgCard.querySelector('[data-img-download]').setAttribute(href, img_url)
//         imgCard.querySelector('[data-camera-name]').innerText=camera_names[index]

//         container.appendChild(imgCard)
//     })
// }

