var slide_div = document.querySelector("#slideshow")

// Slider
let images = [{
    "image": "https://info.umkc.edu/unews/wp-content/uploads/2016/12/MCU.jpg"
}, {
    "image": "https://imgs.search.brave.com/O3y9R8mEHLOS9PJjB0y9jGo34Ud93C1CuNt4XAC-uKM/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly9jZG4u/Ym9sbHl3b29kbWRi/LmNvbS9tb3ZpZXMv/bGFyZ2V0aHVtYi8y/MDIwL2Job29sLWJo/dWxhaXlhYS0yL2Jo/b29sLWJodWxhaXlh/YS0yLXBvc3Rlci01/LmpwZw"
}, {
    "image": "https://wallpaperaccess.com/full/733942.jpg"
}, {
    "image": "https://images8.alphacoders.com/378/thumb-1920-378546.jpg"
}, {
    "image": "https://imgs.search.brave.com/WQvj92faSFjZbGBcjEfrXxQiQdlVzkndWjVGK_HkbEs/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/TjhMUENWNl9uYUdW/OS1mc2NWblN3SGFF/byZwaWQ9QXBp"
}, {
    "image": "https://imgs.search.brave.com/3JWBcFNZ8qB6_CAsjgjG8_ut7Dhgz-lHHjXymIhlPrg/rs:fit:847:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/dWhndXdZTmZJenBy/LWxBSU1ENVd3SGFF/SiZwaWQ9QXBp"
}, {
    "image": "https://imgs.search.brave.com/oGO3p12TAal62Vc-jR9C-dfCX0aCdCwKtUxTxnE_IJ0/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/c3kzTXBxb2pIN1di/ajFMZzl5bFJ3SGFF/OCZwaWQ9QXBp"
}, {
    "image": "https://wallpaperaccess.com/full/54053.jpg"
}, {
    "image": "https://english.cdn.zeenews.com/sites/default/files/2022/03/18/1023742-jalsa-1.png"
}, {
    "image": "https://static.toiimg.com/photo/msid-89748815/89748815.jpg?67604"
}, {
    "image": "https://static.toiimg.com/thumb/msid-88972428,imgsize-169886,width-800,height-600,resizemode-75/88972428.jpg"
}
] 

let i = 0;
let image = document.createElement("img")
setInterval(function () {
    if (i == images.length) {
        i = 0;
    }
    image.src = images[i].image;
    slide_div.append(image);
    i++;
}, 2000);