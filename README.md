#### js 틱택톡

```js
var 배열 = [1,2,3,4,5];
var 배열 = [[], [], {}, function(){}, null, undefined]; // 객체
//배열안에      배열, 객체,   함수,           
```



```js
var 배열 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],  
]
```

- 문법

  - e.target === 클릭된 애  // 클릭이벤트가 일어난 태그를 알려줌

  - e.target.parentNode === 클린된 애 부모 태그

  - e.target.children

  - input의 값이 value
    태그 안 글자는 textContent

  - Math.abs(몇줄 - 몇칸) === 2  // 절대값으로 나옴

  - forEach()  // 배열에 대한 반복문  2차원 배열은 반복문이 2개가 필요한다.

    ```js
    [1,2,3,4,5].forEach(function (요소){
    	console.log(요소);
    })  
    
    //1 
    //2
    //3
    //4
    //5
    
    
    칸들.forEach(function (줄) {
       console.log(줄); 
    });
    // [td, td, td]
    // [td, td, td]
    // [td, td, td]
    
    
    칸들.forEach(function (줄){
        줄.forEach(function (칸){
            console.log(칸);
        })
    })
    
    //<td>X</td>
    //<td>O</td>
    //<td>O</td>
    //<td>X</td>
    //<td>X</td>
    //<td>0</td>
    //<td>0</td>
    //<td>X</td>
    //<td>X</td>
    
    
    ```

- 핵심

  - 테이블 3x3 만들기 =실제 화면을 데이터와 연결하는 것  : 시뮬레이션
  - 반복문이 항상 2번이 들어감 () 중첩 반목문 회수를 줄이는게 실력임)