// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8", // loop: true일 경우, 다시 반복해서 재생할 영상의 id를 넣어줘야 함
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (e) {
        e.target.mute(); // 음소거
      },
    },
  });
}
