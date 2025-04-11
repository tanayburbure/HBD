// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4C585B',
        cancelButtonColor: '#FFCFCF',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        background: '#EFF3EA',
        color: '#000',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.3, { // 0.6 / 2
        visibility: "visible"
    })
    .from(".one", 0.35, { // 0.7 / 2
        opacity: 0,
        y: 10
    })
    .from(".two", 0.2, { // 0.4 / 2
        opacity: 0,
        y: 10
    })
    // Commenting out animations until .six
    /*
    .to(".one", 0.35, { // 0.7 / 2
        opacity: 0,
        y: 10
    }, "+=1.75") // 3.5 / 2
    .to(".two", 0.35, { // 0.7 / 2
        opacity: 0,
        y: 10
    }, "-=0.5") // 1 / 2
    .from(".three", 0.35, { // 0.7 / 2
        opacity: 0,
        y: 10
    })
    .to(".three", 0.35, { // 0.7 / 2
        opacity: 0,
        y: 10
    }, "+=1.5") // 3 / 2
    .from(".four", 0.35, { // 0.7 / 2
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.15, { // 0.3 / 2
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        0.75, { // 1.5 / 2
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.05, { // 0.1 / 2
        backgroundColor: "rgb(127, 206, 248)",
    }, "+=2") // 4 / 2
    .to(".four", 0.25, { // 0.5 / 2
        scale: 0.2,
        opacity: 0,
        y: -150
    }, "+=0.5") // 1 / 2
    .from(".idea-1", 0.6, ideaTextTrans) // 1.2 / 2
    .to(".idea-1", 0.35, ideaTextTransLeave, "+=1.25") // 2.5 / 2
    .from(".idea-2", 0.35, ideaTextTrans) // 0.7 / 2
    .to(".idea-2", 0.35, ideaTextTransLeave, "+=1.25") // 2.5 / 2
    .from(".idea-3", 0.35, ideaTextTrans) // 0.7 / 2
    .to(".idea-3 strong", 0.25, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.35, ideaTextTransLeave, "+=1.25") // 2.5 / 2
    .from(".idea-4", 0.35, ideaTextTrans) // 0.7 / 2
    .to(".idea-4", 0.35, ideaTextTransLeave, "+=1.25") // 2.5 / 2
    .from(".idea-5", 0.35, {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
    }, "+=0.75") // 1.5 / 2
    .to(".idea-5 span", 0.35, {
        rotation: 90,
        x: 8,
    }, "+=0.7") // 1.4 / 2
    .to(".idea-5", 0.35, {
        scale: 0.2,
        opacity: 0,
    }, "+=1") // 2 / 2
    .staggerFrom(".idea-6 span", 0.4, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
    }, 0.2)
    .staggerTo(".idea-6 span", 0.4, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
    }, 0.2, "+=0.75") // 1.5 / 2
    .staggerFromTo(".baloons img", 1.25, {
        opacity: 0.9,
        y: 1400,
    }, {
        opacity: 1,
        y: -1000,
    }, 0.2)
    .from(".profile-picture", 0.25, {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
    }, "-=1") // 2 / 2
    .from(".hat", 0.25, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(".wish-hbd span", 0.35, {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
    }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.35, {
        scale: 1.4,
        rotationY: 150,
    }, {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
    }, 0.1, "party")
    .from(".wish h5", 0.25, {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
    }, "party")
    .staggerTo(".eight svg", 0.75, {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 0.7, // 1.4 / 2
    }, 0.3)
    .to(".six", 0.25, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 0.5, ideaTextTrans, 0.6)
    .to(".last-smile", 0.25, {
        rotation: 90,
    }, "+=0.5");
    */

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
