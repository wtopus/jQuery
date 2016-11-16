    function  myFunc() {
        // 현재 html 안에 있는 모드 element 를 다 선택해서 글자색을 red 로 변경
       // $(" * ").css("color","red"); // * = 모든것 의미, => jQuery 이용해서 모든것 다선택해(body)
       // $("h1, input").css("color", "red");
       // $("#inchon").remove(); // # = id 의미, id = inchon 찾아서 삭제
        //$(".myClass").css("background-color", "yellow"); // class 속성이 myClass 인것 다 찾아 id,class 차이 id는 중복안됨
        //$("[type=button]").css("color", "red");
        //$("div > ul > li[id] ").css("color", "red"); // > = 자식의미, div 의 자식 ul 의자식 li 의 속성 is 가지고 있는거
       // $("div li[id=inchon]").css("color", "red"); " " = 공백 후손의미
       alert( $("#inchon + li").text());  // + = 자신의 형제의 바로 다음에 오는것 의미
    }