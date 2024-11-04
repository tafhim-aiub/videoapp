function playSelectedVideo() {
    const videoDropdown = document.getElementById("videoDropdown");
    const selectedVideo = videoDropdown.value;

    // Clear any existing iframe
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";

    if (selectedVideo === "video-01") {
        // Define OTP and playback info
        const otp = "20160313versASE323OODbwvgfiwuiXVvU9gR4zD5Icz22khtbw41ER6CTfymz4p";
        const playbackInfo = "eyJ2aWRlb0lkIjoiYzAxYWM0MDk3MmFhNDcxODhiMzdlYzJhOTQwMjE3NzcifQ==";

        // Create the iframe element
        const iframe = document.createElement("iframe");
        iframe.src = "https://player.vdocipher.com/v2/?otp=" + otp + "&playbackInfo=" + playbackInfo;
        iframe.allow = "encrypted-media";
        iframe.style = "height:405px;width:720px;max-width:100%;border:0;";
        iframe.setAttribute("allowfullscreen", "true");

        // Append the iframe to the container div
        videoContainer.appendChild(iframe);
    } else {
        alert("Please select a valid video.");
    }
}
