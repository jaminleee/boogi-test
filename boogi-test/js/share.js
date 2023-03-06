//페이스북 공유
function shareFacebook() {
    var sendUrl = "https://hsu-likelion11-boogie-test.netlify.app/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나의 부기부기 유형은?',
            description: '#상상부기 #멋쟁이사자처럼11기 #새내기부기 #고수 부기 #화석 부기 #HSU #운영진수고했다',
            imageUrl: './img/thumbnail.png',
            link: {
                mobileWebUrl: 'https://hsu-likelion11-boogie-test.netlify.app/',
                webUrl: 'https://hsu-likelion11-boogie-test.netlify.app/',
            },
        },
        buttons: [
            {
                title: '테스트 하러가기!!',
                link: {
                    mobileWebUrl: 'https://hsu-likelion11-boogie-test.netlify.app/',
                    webUrl: 'https://hsu-likelion11-boogie-test.netlify.app/',
                },
            },
        ],
    })
}

//클립보드에 복사
function clip() {

    var url = 'https://hsu-likelion11-boogie-test.netlify.app/';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.")
}