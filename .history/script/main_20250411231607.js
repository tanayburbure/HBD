window.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.getElementById("name");
    const greetingText = document.getElementById("greetingText");
    const hbdChatbox = document.querySelector(".hbd-chatbox");
    const ideaText = document.querySelectorAll(".five > p");
    const wishText = document.getElementById("wishText");
    const imagePath = document.getElementById("imagePath");
    const replayBtn = document.getElementById("replay");
    const extraImages = document.querySelector(".extra-images");
  
    // GSAP Timeline
    const tl = gsap.timeline();
  
    tl
      .to(".container", { duration: 0.5, opacity: 1 })
      .from(".one", { duration: 1, y: -50, opacity: 0 })
      .from(".two", { duration: 1, y: -50, opacity: 0 })
      .to(".one", { duration: 1, y: 100, opacity: 0, delay: 2 })
      .to(".two", { duration: 1, y: 100, opacity: 0 }, "<")
      .from(".three", { duration: 1, y: -50, opacity: 0 })
      .to(".three", { duration: 1, y: 100, opacity: 0, delay: 2 })
      .from(".four", { duration: 1, y: -50, opacity: 0 })
      .to(".fake-btn", { duration: 0.5, y: 10, repeat: 5, yoyo: true })
      .to(".four", { duration: 1, y: 100, opacity: 0, delay: 2 })
      .from(".five", { duration: 1, y: -50, opacity: 0 });
  
    ideaText.forEach((el, i) => {
      tl.from(el, {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: i === 0 ? 1 : 0.3,
      });
    });
  
    tl
      .to(".five", { duration: 1, y: 100, opacity: 0, delay: 1 })
      .from(".six", { duration: 1, y: -50, opacity: 0 })
      .from(".hat", { duration: 1, y: -200, rotation: -180, opacity: 0 })
      .from(".wish-hbd", { duration: 1, scale: 0.5, opacity: 0 })
      .from(".wish > h5", { duration: 1, y: 20, opacity: 0 });
  
    // 💥 Add animation to show extra images
    tl.fromTo(
      extraImages,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "+=0.5" // small delay after wish text
    );
  
    tl
      .from(".seven", { duration: 1, y: -50, opacity: 0 })
      .from(".eight svg", {
        duration: 1,
        scale: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
      })
      .from(".nine", { duration: 1, opacity: 0 });
  
    // Replay button
    replayBtn.addEventListener("click", () => {
      tl.restart();
    });
  });
  