function convert() {
    let url = document.getElementById("youtube-url").value;
    if (!url) {
        alert("URLを入力してください！");
        return;
    }
    let encodedUrl = encodeURIComponent(url);
    let redirectUrl = `https://ytmp3.cc/en13/?url=${encodedUrl}`;
    
    // 別タブで開く（広告を見せる時間を作る）
    window.open(redirectUrl, '_blank');
}
