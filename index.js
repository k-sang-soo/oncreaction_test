window.addEventListener("load", () => {
    const nav = document.querySelector('.nav');
    const centerAnitionLogo = document.querySelector(".main-center-animation_logo");

    console.dir(nav);
    console.log(nav.style.cssText);

    window.setTimeout(() => {
        document.addEventListener("mousemove", e => {
            const targetX = centerAnitionLogo.clientWidth /2;
            const targetY = centerAnitionLogo.clientHeight /2;
            let xPosition = e.clientX;
            let yPosition = e.clientY;
            let angle = Math.atan2(yPosition - targetY, xPosition - targetX) * 180 / Math.PI;
            if (angle < 0) {
                angle = 360 - (-angle);
            }
            centerAnitionLogo.style.transform = `rotate(${angle}deg)`;
        })
    }, 3500);

});

// window.addEventListener("load", () => {
//     const centerAnitionLogo = document.querySelector(".main-center-animation_logo");

//     document.addEventListener("mousemove", e => {
//         const targetX = (centerAnitionLogo.offsetTop) + (centerAnitionLogo.clientWidth /2);
//         const targetY = (centerAnitionLogo.offsetLeft) + (centerAnitionLogo.clientHeight /2);
//         let xPosition = e.clientX;
//         let yPosition = e.clientY;
//         let angle = Math.atan2(yPosition - targetY, xPosition - targetX) * (180 / Math.PI);
//         if (angle < 0) {
//             angle = 360 - (-angle);
//         }
//         console.log(angle);
//         centerAnitionLogo.style.transform = `rotate(${angle}deg)`;

//     })
// });