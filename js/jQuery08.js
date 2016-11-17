
    /*function  myFunc() {
        $("div").remove();
    }*/

    function myFunc() {
        // 1. 만든다
        // <h1> 이것은 소리없는 아우성!<h1>
        // <h1></h1>
        var h1 = $("<h1></h1>").text("이것은 소리없는 아우성");

        // <img src="img/hanzo.jpg" width="50">
        var img = $("<img />").attr("src", "img/디바.jpg").attr("width", "50");
        // 1, 자식으로 맨 마지막에 붙이기
        $("div").append(img);
        // 2. 자식으로 맨 처음에 붙이기
        //$("div").prepend(h1);
        // 3. 형제로 앞에 붙이기
       // $("div > h1:nth-child(2) ").before(h1);
        // 4. 형제로 뒤에 붙이기
        //$("div > h1:first ").after(h1);
    }