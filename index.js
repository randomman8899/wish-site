let i = 0

function func() {

    butnEl = document.getElementById("butn")
    var parentElement = document.getElementById("changing-container");

    if (i == 0) {
        headEl = document.getElementById("main-heading")
        headEl.textContent = "HERE'S SOMETHING I MADE FOR YOU 😄😄"
        butnEl.textContent = "Click me again"
        i += 1
      } 

    else if (i == 1) {
        var childElement = document.getElementById("main-heading");

        parentElement.removeChild(childElement);
        parentElement.style.background = "transparent";
        parentElement.style.boxShadow = "none";

        butnEl.textContent = "Let's add some music"
        i += 1
    }

    else if (i == 2) {
        var music = document.createElement("audio");
        music.setAttribute("id", "music");
        music.setAttribute("autoplay", "");
        music.setAttribute("loop", "");
        music.setAttribute("hidden", "");
        music.setAttribute("src", "song.mp3"); // Make sure to use the correct file extension
    
        parentElement.appendChild(music); // Append to the parentElement instead of document.body
    
        butnEl.textContent = "Decorate";
        i += 1;
    }
    


    else if (i == 3) {
        var btnEl = document.getElementById("btn-cont");
        btnEl.classList.add("btn-cont2");

        var flagsImg = document.createElement("img");
        flagsImg.setAttribute("id", "flags");
        flagsImg.classList.add("flagsImg");
        flagsImg.setAttribute("src", "flag.png");
        parentElement.appendChild(flagsImg);
        
        i += 1
      }
    else if (i == 4) {
        

        var cakeImg = document.createElement("img");
        cakeImg.setAttribute("id", "cakes");
        cakeImg.classList.add("cakeImg");
        cakeImg.setAttribute("src", "cake.png");
        parentElement.appendChild(cakeImg);

        butnEl.textContent = "Fly ballons";
        i += 1
      }

    else if (i == 5) {

        for (let i = 0; i < 40; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.textContent = "🎈";
            balloon.style.left = Math.random() * 100 + "vw"; // Random horizontal position
            balloon.style.animationDelay = Math.random() * 3 + "s"; // Random delay to spread them out
            document.body.appendChild(balloon);
        }

        butnEl.textContent = "Message for YOU";
        i += 1
}

    else if (i == 6) {
        var flag = document.getElementById("flags");
        var cake = document.getElementById("cakes");

        parentElement.removeChild(flag);
        parentElement.removeChild(cake);

        parentElement.classList.add("upperLayer");
        parentElement.style.background = "white";
        parentElement.style.boxShadow = "15px 10px 8px #888888";
        

        var btnDiv = document.getElementById("btn-cont");
        var btn = document.getElementById("butn")
        
        btnDiv.removeChild(btn)

        var msg = document.createElement("h3");
        msg.classList.add("bd-text");
        msg.textContent = "Happyyyyyyyyyyyyyyyyyyyyyyy Birthdayyyyyyyyyyyyyyyyy🎂🎂🎂🥳🥳🥳🥳🥳🥳🍰🍰🍰🍰🍰🧁🧁🧁🧁🧁🧁 Begairat😌 May you have many many more returns of the day. Be blessed, successful and healthy alwaysssss 🤲🏻✨✨. You're really the best person I met in uni and I am so glad I made you my friend. I cherish all the memories which we have together ( events me awara phirna 😂 wo nashty wo mini mart ki fries etc etc 🤣) I enjoy my time whenever I am with you. You really make my uni life a \"little\" bit 😂😅 better, those laughter we have together, wo teachers me or subject me kery nikalna 🤣 bohut maza ata h ap k sath 😘 Please never stop being my friend 🥺 Again ALLAH apko hamesha salamat rkhy or har cheez me kamyab kry ✨ Today is your day, enjoy the best out of it bro 💙💙💙"
        parentElement.appendChild(msg);
    }

    
}
