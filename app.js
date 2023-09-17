function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left= math.random() * 100 + 'vw';
    heart.style.animationDuration= math.random() * 2 + 3 + 's';

    heart.innerText='💖';

    document.body.appendChild(heart);
    setTimeout(()=> {
        heart.remove();
    },3000);
};
setInterval(createheart, 300);

