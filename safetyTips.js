document.addEventListener("DOMContentLoaded", function () {
    console.log("safetyTips.js has been loaded!"); // Debugging step

    const safetyTips = [
        "Teach your child how to call 9-1-1 and what to expect if they have to call.",
        "Many areas have a text to 9-1-1 option for when its not safe to call.",
        "Create a Smart911 profile for operators to access in an emergency.",
        "Make a family emergency plan and practice it.",
        "Have your child memorize at least one parent phone number.",
        "Use family location sharing apps.",
        "Use a safeword that only you and your child know for instances when someone else needs to pick them up.",
        "Teach children that it is not just about stranger danger. Most abductions involve someone the child knows. Instead, teach them what strangeness looks like and what to do to avoid people acting strange."
    ];

    const showTipsBtn = document.getElementById("showTipsBtn");
    const safetyTipsDiv = document.getElementById("safetyTips");
    const tipsList = document.getElementById("tipsList");

    if (!showTipsBtn || !safetyTipsDiv || !tipsList) {
        console.error("Error: One or more elements are missing. Check your HTML structure.");
        return;
    }

    showTipsBtn.addEventListener("click", function () {
        console.log("Button clicked!"); // Debugging step

        if (safetyTipsDiv.style.display === "none" || safetyTipsDiv.style.display === "") {
            tipsList.innerHTML = ""; 

            safetyTips.forEach(tip => {
                const li = document.createElement("li");
                li.textContent = tip;
                tipsList.appendChild(li);
            });

            safetyTipsDiv.style.display = "block"; 
        } else {
            safetyTipsDiv.style.display = "none"; 
        }
    });
});
