// 마우스 커서 위치 담을 변수
var mouseX = 0;
var mouseY = 0; 
var time = 20;
var min = " ";
var sec = " ";

function getMousePosition(e){
    var eObj = window.event? window.event : e; // IE, FF 에 따라 이벤트 처리 하기
    mouseX = eObj.clientX;
    mouseY = eObj.clientY + document.documentElement.scrollTop; // 화면을 스크롤 했을때를 위한 처리 (스크롤 한 만큼 마우스 Y좌표에 + )
    // documentElement 가 안된다면 body 바꿔야 한다. 크롬의 경우.. (자동파악 로직 필요)
}

function moveImg() {
    // 이미지 위치 파악하기
    var m_x = parseInt(document.getElementById('img1').style.left.replace('px', ''));
    var m_y = parseInt(document.getElementById('img1').style.top.replace('px', ''));

    // 이미지 움직이기
    document.getElementById('img1').style.left = (Math.round(m_x + ((mouseX - m_x) / 2))-140) + 'px';
    document.getElementById('img1').style.top =(Math.round(m_y + ((mouseY - m_y) / 2))-150) + 'px';
    
    // 기억해라 민지야ㅑㅑㅑ
    // 부드럽게 따라오는 공식 대략..
    // 현재 이미지위치 = 현재이미지 위치 + (이미지 위치기준 마우스 커서 위치 / 적절한 나누기 값)
    // 반복 처리
    // ※ 이미지 위치 기준 마우스 커서 위치는
    // 이미지를 기준으로 그 이미지에서 커서가 얼마나 떨어져 있는지 여부!! -> 추후 조정 필요
}

document.onmousemove = getMousePosition; // 마우스가 움직이면 getMousePosition 함수 실행
setInterval("moveImg()", 50); // moveImg 함수 반복 실행하여 이미지 움직이기


var x = setInterval(function() {
    // min = parseInt(time/60); 분을 계산할 필요는 없으니까?
    sec = time % 60;

    document.getElementById("timer").innerHTML = `${sec}sec`;
    time--;

    if (time < 0 ) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = `Time out`;}
    }, 1000);
    