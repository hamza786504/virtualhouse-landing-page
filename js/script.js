const voice_step_one = document.getElementById("voice_step_one");
const read_text_step_one = document.getElementById("read_text_step_one");


voice_step_one.addEventListener("click", function() {
    const audio = new Audio("audio/text-to-speach.mp3");
    audio.play();
    stopAllAudios();
});
read_text_step_one.addEventListener("click", function() {
    const accordion_step_one = document.getElementById("accordion_step_one");
    accordion_step_one.style.display = "block";
});

