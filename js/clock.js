
    function startClock() {
        // javaScript 영역. 현재시간 ex) 2016-11-25 20 : 10 : 10
        // html 의 div 영역에 출력 해야함, but 다른 영역이라 바로 할 수없다.
        // html div 영역을 JavaScript 객체로 바꾸어서 들고온다.
        var div = document.getElementById("clockDiv");   // document 객체 기본제공 <body> 안에 다 지칭
        // HTML element 를 JavaScript 객체로 변환시킨것 -> document object( 문서객체 )

        // 1초마다 반복적으로 현재 시간을 구해서  div 에 출력
        window.setInterval(function() {
            // 현재시간 구하기
            var today = (new Date()).toLocaleString();  //시간 구해서 문자열 형태로 바꾸어줌
            div.innerHTML = today;
        }, 1000); // 1초마다 반복적으로 람다함수 실행
    }