/**
 * Created by jinhopark on 2016-11-15.
 */

   //alert("똑같이 수행되요!!");
    /* var test; // 데이터 타입이 지정되지 않았기 때문에 아무 값이나 다 들어갈 수 있다.
    var test1 = 100;
    var test2 = true;
    var test3 = "소리없는 아우성!!";
    var test4 = null;
    var test5;
    console.log(typeof test1);
    console.log(typeof test2);
    console.log(typeof test3);
    console.log(typeof test4);
    console.log(typeof test5);

   // 선언적 함수
    function myFunc(temp1, temp2){
        return temp1 + temp2;
    }
    var result = myFunc(10, 20);
    console.log(result);

    // 익명함수 (람다함수)
    var test = function(temp1, temp2){
        return temp1+temp2;
    };
    test(50,50);
    console.log(test(50,50));*/

   // 변수 : property
   // 함수 : method
   var obj =  {
       myName : "홍길동",
       myAge : 30,
       "my Hobby" : "오버워치", // 문자열에 넣어버림
       myInfo : function () {

       }
   };
   console.log(obj.myAge);
   console.log(obj.myName);
   console.log(obj["myAge"]);
   // console.log(obj[myAge]);
   console.log(obj["my Hobby"]); // !! JavaScript 만 사용가능
   obj.myInfo();