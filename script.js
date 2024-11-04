document.getElementById("openButton").addEventListener("click", function () {
  const videoContainer = document.getElementById("videoContainer");
  const videoSelect = document.getElementById("videoSelect").value;
  
  let videoHTML = "";
  
  if (videoSelect === "video1") {
    videoHTML = `
      <div style="padding-top:56%;position:relative;">
        <iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323wAhjCVEiJvkWKEJhEBMgqfE1agAiT78QDf0pXxQ6PzwueF&playbackInfo=eyJ2aWRlb0lkIjoiYzAxYWM0MDk3MmFhNDcxODhiMzdlYzJhOTQwMjE3NzcifQ==" 
                style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" 
                allowFullScreen="true" 
                allow="encrypted-media"></iframe>
      </div>
    `;
  } else if (videoSelect === "video2") {
    videoHTML = `
      <div style="padding-top:41%;position:relative;">
        <iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323iMMud8J57TrYXpNyDOOB2RPhgn8ZYh4QNYFJcCdhBJaswt&playbackInfo=eyJ2aWRlb0lkIjoiZWI2NzNkNDgxMjUyZWQ2M2UxNThlZmY5N2M0YzNkNzkifQ==" 
                style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" 
                allowFullScreen="true" 
                allow="encrypted-media"></iframe>
      </div>
    `;
  }

  videoContainer.innerHTML = videoHTML;
  videoContainer.style.display = videoHTML ? "block" : "none";
});
