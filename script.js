/* =========================
   MÜZİK
========================= */

const music =
  document.getElementById("bg-music");

const musicBtn =
  document.getElementById("music-btn");

const musicPlayer =
  document.getElementById("music-player");

const progressBar =
  document.getElementById("progress-bar");

const currentTime =
  document.getElementById("current-time");

const duration =
  document.getElementById("duration");

const playingText =
  document.getElementById("playing-text");


music.volume = 0.08;


function formatTime(seconds) {

  if (!isFinite(seconds)) {
    return "0:00";
  }

  const minutes =
    Math.floor(seconds / 60);

  const remainingSeconds =
    Math.floor(seconds % 60);

  return (
    minutes +
    ":" +
    String(remainingSeconds).padStart(2, "0")
  );
}


function updatePlayerState() {

  if (music.paused) {

    musicBtn.textContent = "▶";

    musicPlayer.classList.remove(
      "playing"
    );

    playingText.textContent =
      "DURAKLATILDI";

  } else {

    musicBtn.textContent = "Ⅱ";

    musicPlayer.classList.add(
      "playing"
    );

    playingText.textContent =
      "ŞİMDİ ÇALIYOR";
  }
}


musicBtn.addEventListener(
  "click",
  function () {

    if (music.paused) {

      music.play()
        .then(() => {
          updatePlayerState();
        })
        .catch((error) => {

          console.log(
            "Müzik başlatılamadı:",
            error
          );

        });

    } else {

      music.pause();

      updatePlayerState();
    }

  }
);


music.addEventListener(
  "loadedmetadata",
  function () {

    duration.textContent =
      formatTime(music.duration);

  }
);


music.addEventListener(
  "timeupdate",
  function () {

    if (!music.duration) {
      return;
    }

    const progress =
      (music.currentTime /
        music.duration) *
      100;

    progressBar.value =
      progress;

    currentTime.textContent =
      formatTime(
        music.currentTime
      );

    progressBar.style.background =
      `linear-gradient(
        to right,
        #ea80b0 0%,
        #ea80b0 ${progress}%,
        #444 ${progress}%,
        #444 100%
      )`;
  }
);


progressBar.addEventListener(
  "input",
  function () {

    if (!music.duration) {
      return;
    }

    const newTime =
      (progressBar.value / 100) *
      music.duration;

    music.currentTime =
      newTime;
  }
);


music.addEventListener(
  "ended",
  function () {

    music.currentTime = 0;

    updatePlayerState();
  }
);


updatePlayerState();



/* =========================
   ANA KALPLER
========================= */

const N = 100;

const ui =
  document.getElementById("ui");


for (let i = 1; i <= N; i++) {

  const love =
    document.createElement("div");

  love.className =
    "love";

  love.style.setProperty(
    "--i",
    i
  );


  const h =
    document.createElement("div");

  h.className =
    "love_horizontal";


  const v =
    document.createElement("div");

  v.className =
    "love_vertical";


  const word =
    document.createElement("div");

  word.className =
    "love_word";

  word.textContent =
    "I Love You Nisa";


  v.appendChild(word);

  h.appendChild(v);

  love.appendChild(h);

  ui.appendChild(love);
}


ui.addEventListener(
  "mouseover",
  (e) => {

    const loveEl =
      e.target.closest(".love");

    if (loveEl) {

      loveEl.classList.add(
        "hover-glow"
      );

    }

  }
);


ui.addEventListener(
  "mouseout",
  (e) => {

    const loveEl =
      e.target.closest(".love");

    if (loveEl) {

      loveEl.classList.remove(
        "hover-glow"
      );

    }

  }
);



/* =========================
   YILDIZLAR
========================= */

const stars =
  document.getElementById("stars");


for (let i = 0; i < 150; i++) {

  const star =
    document.createElement("div");

  star.className =
    "star";


  star.style.left =
    Math.random() * 100 + "%";

  star.style.top =
    Math.random() * 100 + "%";


  const size =
    1 + Math.random() * 3;


  star.style.width =
    size + "px";

  star.style.height =
    size + "px";


  star.style.animationDelay =
    Math.random() * 3 + "s";


  star.style.animationDuration =
    (1.5 + Math.random() * 3) +
    "s";


  stars.appendChild(star);
}



/* =========================
   ARKA PLAN KALPLERİ
========================= */

const backgroundHearts =
  document.getElementById(
    "background-hearts"
  );


for (let i = 0; i < 35; i++) {

  const heart =
    document.createElement("div");

  heart.className =
    "background-heart";

  heart.textContent =
    "♡";


  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.top =
    Math.random() * 100 + "%";


  heart.style.fontSize =
    (18 + Math.random() * 18) +
    "px";


  heart.style.animationDelay =
    Math.random() * 6 + "s";


  heart.style.animationDuration =
    (5 + Math.random() * 5) +
    "s";


  backgroundHearts.appendChild(
    heart
  );
}



/* =========================
   NEBULA PARÇACIKLARI
========================= */

const nebula =
  document.getElementById(
    "nebula"
  );


for (let i = 0; i < 16; i++) {

  const p =
    document.createElement("div");

  p.className =
    "light-particle";


  const size =
    1 + Math.random() * 2;


  p.style.width =
    size + "px";

  p.style.height =
    size + "px";


  p.style.left =
    Math.random() * 100 + "%";

  p.style.top =
    Math.random() * 100 + "%";


  p.style.animationDuration =
    (9 + Math.random() * 10) +
    "s";


  p.style.animationDelay =
    Math.random() * 10 + "s";


  nebula.appendChild(p);
}



/* =========================
   KAYAN YILDIZ
========================= */

function spawnShootingStar() {

  const star =
    document.createElement("div");

  star.className =
    "shooting-star";


  star.style.left =
    (Math.random() * 60 + 20) +
    "%";


  star.style.top =
    Math.random() * 20 +
    "%";


  star.style.animation =
    `shootingStarMove ${
      1.2 + Math.random() * 0.8
    }s linear forwards`;


  document.body.appendChild(star);


  setTimeout(() => {

    star.remove();

  }, 2300);
}


setInterval(() => {

  if (Math.random() < 0.45) {
    spawnShootingStar();
  }

}, 4500);



/* =========================
   MOUSE KALP TRAİL
========================= */

let lastHeartTime = 0;


const trailSymbols = [
  "♡",
  "♡",
  "♡",
  "✦",
  "♡"
];


document.addEventListener(
  "mousemove",
  function (e) {

    const now =
      Date.now();


    if (
      now - lastHeartTime <
      90
    ) {
      return;
    }


    lastHeartTime =
      now;


    const heart =
      document.createElement("div");

    heart.className =
      "mouse-heart";


    const symbol =
      trailSymbols[
        Math.floor(
          Math.random() *
          trailSymbols.length
        )
      ];


    if (symbol === "✦") {

      heart.classList.add(
        "sparkle"
      );

    }


    heart.textContent =
      symbol;


    heart.style.left =
      e.clientX + "px";

    heart.style.top =
      e.clientY + "px";


    heart.style.fontSize =
      (18 + Math.random() * 12) +
      "px";


    document.body.appendChild(
      heart
    );


    setTimeout(() => {

      heart.remove();

    }, 1200);

  }
);



/* =========================
   INTRO
========================= */

(function () {

  const introScreen =
    document.getElementById(
      "intro-screen"
    );


  const introText =
    document.getElementById(
      "intro-text"
    );


  const introHearts =
    document.getElementById(
      "intro-hearts"
    );


  for (let i = 0; i < 12; i++) {

    const h =
      document.createElement("div");

    h.className =
      "intro-heart";

    h.textContent =
      "♡";


    h.style.left =
      Math.random() * 100 +
      "%";


    h.style.animationDelay =
      Math.random() * 2 +
      "s";


    h.style.fontSize =
      (14 + Math.random() * 16) +
      "px";


    introHearts.appendChild(h);
  }


  setTimeout(() => {

    introText.style.animation =
      "none";


    void introText.offsetWidth;


    introText.textContent =
      "Sana söylemek istediğim bir şey var...";


    introText.style.animation =
      "introFade 1.6s ease forwards";

  }, 1700);


  setTimeout(() => {

    introScreen.classList.add(
      "hidden"
    );

  }, 3400);

})();



/* =========================
   ZAMAN SAYACI
========================= */

const RELATIONSHIP_START =
  new Date(
    "2026-08-15T00:00:00"
  );


function updateTimeCounter() {

  const now =
    new Date();


  let diff =
    now -
    RELATIONSHIP_START;


  if (diff < 0) {
    diff = 0;
  }


  const days =
    Math.floor(
      diff /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (
        diff /
        (1000 * 60 * 60)
      ) % 24
    );


  const mins =
    Math.floor(
      (
        diff /
        (1000 * 60)
      ) % 60
    );


  const secs =
    Math.floor(
      (
        diff /
        1000
      ) % 60
    );


  document.getElementById(
    "tc-days"
  ).textContent =
    days;


  document.getElementById(
    "tc-hours"
  ).textContent =
    String(hours).padStart(
      2,
      "0"
    );


  document.getElementById(
    "tc-mins"
  ).textContent =
    String(mins).padStart(
      2,
      "0"
    );


  document.getElementById(
    "tc-secs"
  ).textContent =
    String(secs).padStart(
      2,
      "0"
    );
}


updateTimeCounter();


setInterval(
  updateTimeCounter,
  1000
);



/* =========================
   GENEL OVERLAY
========================= */

function bindOverlay(
  btnId,
  overlayId,
  closeId
) {

  const btn =
    document.getElementById(
      btnId
    );


  const overlay =
    document.getElementById(
      overlayId
    );


  const close =
    document.getElementById(
      closeId
    );


  btn.addEventListener(
    "click",
    () => {

      overlay.classList.add(
        "show"
      );

    }
  );


  close.addEventListener(
    "click",
    () => {

      overlay.classList.remove(
        "show"
      );

    }
  );


  overlay.addEventListener(
    "click",
    (e) => {

      if (
        e.target === overlay
      ) {

        overlay.classList.remove(
          "show"
        );

      }

    }
  );
}


bindOverlay(
  "memories-btn",
  "memories-overlay",
  "memories-close"
);



/* =========================
   MEKTUP
========================= */

const letterBtn =
  document.getElementById(
    "letter-btn"
  );


const letterOverlay =
  document.getElementById(
    "letter-overlay"
  );


const letterClose =
  document.getElementById(
    "letter-close"
  );


const envelope =
  document.getElementById(
    "envelope"
  );


const envelopeFlap =
  document.getElementById(
    "envelope-flap"
  );


const letterPaper =
  document.getElementById(
    "letter-paper"
  );


function closeLetter() {

  letterOverlay.classList.remove(
    "show"
  );


  envelopeFlap.style.transform =
    "rotateX(0deg)";


  letterPaper.classList.remove(
    "show"
  );
}


letterBtn.addEventListener(
  "click",
  () => {

    letterOverlay.classList.add(
      "show"
    );


    envelopeFlap.style.transform =
      "rotateX(0deg)";


    letterPaper.classList.remove(
      "show"
    );

  }
);


envelope.addEventListener(
  "click",
  () => {

    envelopeFlap.style.transform =
      "rotateX(180deg)";


    letterPaper.classList.add(
      "show"
    );

  }
);


letterClose.addEventListener(
  "click",
  closeLetter
);


letterOverlay.addEventListener(
  "click",
  (e) => {

    if (
      e.target === letterOverlay
    ) {

      closeLetter();

    }

  }
);



/* =========================
   MİNİ OYUN
========================= */

(function () {

  const gameArea =
    document.getElementById(
      "game-area"
    );


  const scoreEl =
    document.getElementById(
      "game-score"
    );


  const winEl =
    document.getElementById(
      "game-win-message"
    );


  const gameBtn =
    document.getElementById(
      "game-btn"
    );


  const gameOverlay =
    document.getElementById(
      "game-overlay"
    );


  const gameClose =
    document.getElementById(
      "game-close"
    );


  let caught = 0;

  let spawnTimer = null;


  function resetGame() {

    caught = 0;


    scoreEl.textContent =
      "Yakalanan: 0 / 10";


    winEl.style.display =
      "none";


    gameArea.innerHTML =
      "";
  }


  function stopSpawning() {

    if (spawnTimer) {

      clearInterval(
        spawnTimer
      );


      spawnTimer =
        null;
    }
  }


  function spawnGameHeart() {

    if (caught >= 10) {
      return;
    }


    const h =
      document.createElement(
        "div"
      );


    h.className =
      "game-heart";


    h.textContent =
      "❤️";


    h.style.left =
      Math.random() * 85 +
      "%";


    const fallDuration =
      2.5 +
      Math.random() * 2;


    h.style.animationDuration =
      fallDuration +
      "s";


    h.addEventListener(
      "click",
      () => {

        if (h.dataset.caught) {
          return;
        }


        h.dataset.caught =
          "1";


        caught++;


        scoreEl.textContent =
          `Yakalanan: ${caught} / 10`;


        h.remove();


        if (caught >= 10) {

          winEl.style.display =
            "block";


          stopSpawning();
        }

      }
    );


    gameArea.appendChild(h);


    setTimeout(() => {

      if (h.parentNode) {
        h.remove();
      }

    }, fallDuration * 1000 + 100);

  }


  gameBtn.addEventListener(
    "click",
    () => {

      gameOverlay.classList.add(
        "show"
      );


      resetGame();


      stopSpawning();


      spawnTimer =
        setInterval(
          spawnGameHeart,
          700
        );

    }
  );


  gameClose.addEventListener(
    "click",
    () => {

      gameOverlay.classList.remove(
        "show"
      );


      stopSpawning();

    }
  );


  gameOverlay.addEventListener(
    "click",
    (e) => {

      if (
        e.target === gameOverlay
      ) {

        gameOverlay.classList.remove(
          "show"
        );


        stopSpawning();
      }

    }
  );

})();



/* =========================
   🌹 10 SEBEP
========================= */

(function () {

  const reasons = [

    "Yanında kendim gibi hissedebildiğim için.",

    "En saçma şeyleri bile seninle konuşabildiğim için.",

    "Sanki seni çok uzun zamandır tanıyormuşum gibi hissettirdiğin için.",

    "Seninle konuşurken zamanın nasıl geçtiğini anlamadığım için.",

    "Kötü bir günümde bile yüzümü güldürebildiğin için.",

    "Seninle birlikteyken her bir saniye bile güzel hissettirdiği için.",

    "Beni olduğum gibi kabul ettiğin için.",

    "Seninle geleceğe dair güzel şeyler hayal edebildiğim için.",

    "Sınav senemde bile beni anlayıp, hedeflerimi unutmamam adına yanımda olduğun için.",

    "Bunların hiçbiri yeterli değil. Çünkü seni sevmemin sadece bir sebebi olamaz."

  ];


  const reasonsBtn =
    document.getElementById(
      "reasons-btn"
    );


  const reasonsOverlay =
    document.getElementById(
      "reasons-overlay"
    );


  const reasonsClose =
    document.getElementById(
      "reasons-close"
    );


  const reasonCard =
    document.getElementById(
      "reason-card"
    );


  const reasonNumber =
    document.getElementById(
      "reason-number"
    );


  const reasonText =
    document.getElementById(
      "reason-text"
    );


  const reasonPrev =
    document.getElementById(
      "reason-prev"
    );


  const reasonNext =
    document.getElementById(
      "reason-next"
    );


  const reasonProgress =
    document.getElementById(
      "reason-progress"
    );


  const reasonFinal =
    document.getElementById(
      "reason-final"
    );


  let currentReason = 0;


  /* Noktaları oluştur */

  reasons.forEach(
    (_, index) => {

      const dot =
        document.createElement(
          "div"
        );


      dot.className =
        "reason-dot";


      dot.dataset.index =
        index;


      reasonProgress.appendChild(
        dot
      );

    }
  );


  function updateReasons() {

    reasonCard.classList.remove(
      "changing"
    );


    void reasonCard.offsetWidth;


    reasonCard.classList.add(
      "changing"
    );


    reasonNumber.textContent =
      String(
        currentReason + 1
      ).padStart(
        2,
        "0"
      ) +
      " / 10";


    reasonText.textContent =
      reasons[currentReason];


    /* Noktalar */

    const dots =
      document.querySelectorAll(
        ".reason-dot"
      );


    dots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          "active",
          index === currentReason
        );

      }
    );


    /* Butonlar */

    reasonPrev.disabled =
      currentReason === 0;


    if (
      currentReason ===
      reasons.length - 1
    ) {

      reasonNext.textContent =
        "♡ Baştan Başla";


      reasonFinal.textContent =
        "Ve aslında.. daha anlatacak çok şeyim var.";

    } else {

      reasonNext.textContent =
        "Sonraki →";


      reasonFinal.textContent =
        "";
    }

  }


  reasonNext.addEventListener(
    "click",
    () => {

      if (
        currentReason ===
        reasons.length - 1
      ) {

        currentReason = 0;

      } else {

        currentReason++;

      }


      updateReasons();

    }
  );


  reasonPrev.addEventListener(
    "click",
    () => {

      if (currentReason > 0) {

        currentReason--;

        updateReasons();

      }

    }
  );


  reasonsBtn.addEventListener(
    "click",
    () => {

      reasonsOverlay.classList.add(
        "show"
      );


      currentReason = 0;


      updateReasons();

    }
  );


  reasonsClose.addEventListener(
    "click",
    () => {

      reasonsOverlay.classList.remove(
        "show"
      );

    }
  );


  reasonsOverlay.addEventListener(
    "click",
    (e) => {

      if (
        e.target === reasonsOverlay
      ) {

        reasonsOverlay.classList.remove(
          "show"
        );

      }

    }
  );

})();



/* =========================
   AŞK SORUSU
========================= */

const questionScreen =
  document.getElementById(
    "love-question"
  );


const questionFace =
  document.getElementById(
    "question-face"
  );


const questionTitle =
  document.getElementById(
    "question-title"
  );


const questionSubtitle =
  document.getElementById(
    "question-subtitle"
  );


const message =
  document.getElementById(
    "message"
  );


const yesBtn =
  document.getElementById(
    "yes-btn"
  );


const noBtn =
  document.getElementById(
    "no-btn"
  );


const finalMessage =
  document.getElementById(
    "final-message"
  );


const finalSmall =
  document.getElementById(
    "final-small"
  );


let noLevel = 0;


const noPositions = [

  {
    left: "72%",
    top: "30%"
  },

  {
    left: "28%",
    top: "70%"
  },

  {
    left: "70%",
    top: "72%"
  }

];


noBtn.addEventListener(
  "click",
  function () {

    noLevel++;


    if (noLevel === 1) {

      questionFace.textContent =
        "ಠ‿ಠ";


      questionTitle.textContent =
        "Emin misin?";


      questionSubtitle.textContent =
        "Bence bir daha düşün..";


      message.textContent =
        "Hayır'a gerçekten bastın mı? 😐";


      moveNoButton(0);

    }

    else if (noLevel === 2) {

      questionFace.textContent =
        "ಠ_ಠ";


      questionTitle.textContent =
        "Bak ama...";


      questionSubtitle.textContent =
        "Cevabını değiştirmek için hâlâ şansın var.";


      message.textContent =
        "Biraz kırılmaya başladım..";


      moveNoButton(1);

    }

    else if (noLevel === 3) {

      questionFace.textContent =
        "ಠ益ಠ";


      questionTitle.textContent =
        "TAMAM. KÜSTÜM.";


      questionSubtitle.textContent =
        "Ama son bir kez soruyorum.";


      message.textContent =
        "Son kararın mı?";


      moveNoButton(2);


      yesBtn.textContent =
        "Evet ❤️";


      yesBtn.style.transform =
        "translateX(-45px) scale(1.15)";

    }

    else {

      questionFace.textContent =
        "ಥ﹏ಥ";


      questionTitle.textContent =
        "Gerçekten mi?";


      questionSubtitle.textContent =
        "Hâlâ vazgeçmedin..";


      message.textContent =
        "Ben yine de seni bekliyorum. ❤️";


      moveNoButton(0);

    }

  }
);



function moveNoButton(index) {

  const position =
    noPositions[index];


  noBtn.style.left =
    position.left;


  noBtn.style.top =
    position.top;


  noBtn.style.transform =
    "translate(-50%, -50%) scale(1.05)";


  setTimeout(() => {

    noBtn.style.transform =
      "translate(-50%, -50%) scale(1)";

  }, 400);

}



/* =========================
   EVET
========================= */

yesBtn.addEventListener(
  "click",
  function () {

    questionScreen.classList.add(
      "hidden"
    );


    setTimeout(() => {

      finalMessage.classList.add(
        "show"
      );


      startFallingHearts();

    }, 700);


    setTimeout(() => {

      finalSmall.textContent =
        "Biliyordum..";

    }, 1000);


    setTimeout(() => {

      finalSmall.textContent =
        "Benden ayrılma sakın 😂";

    }, 2500);


    setTimeout(() => {

      finalSmall.textContent =
        "Okulundaki çocuklardan uzak dur >:|";

    }, 4000);


    setTimeout(() => {

      finalSmall.textContent =
        "Ben de seni çok seviyorum <3";

    }, 5500);

  }
);



/* =========================
   DÜŞEN KALPLER
========================= */

function startFallingHearts() {

  for (let i = 0; i < 30; i++) {

    setTimeout(() => {

      const heart =
        document.createElement(
          "div"
        );


      heart.className =
        "falling-heart";


      heart.textContent =
        "♡";


      heart.style.left =
        Math.random() * 100 +
        "vw";


      heart.style.fontSize =
        (15 + Math.random() * 25) +
        "px";


      heart.style.animationDuration =
        (3 + Math.random() * 3) +
        "s";


      document.body.appendChild(
        heart
      );


      setTimeout(() => {

        heart.remove();

      }, 6000);

    }, i * 180);

  }

}