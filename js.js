var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';
var 결과 = document.createElement('div');
결과.textContent = '결과는 어떻게 될까요?';


var 비동기콜백 = function (이벤트) {
    console.log(이벤트.target); // 클릭된 애,
    console.log(이벤트.target.parentNode); // 클릭된 애 부모 태크
    console.log(이벤트.target.parentNode.parentNode); // 클릭된 애 부모의 부모 태크
    console.log(이벤트.target.children); // td의 자식인데 td 그보다 자식은 없다 현재

    // 화면을 배열고 연결해 두었기 때문에 아래와 같은 것이 가능함
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    if (칸들[몇줄][몇칸].textContent !== '') { // 칸이 이미 채워져 있는가?
        console.log('빈칸아닙니다.');

    } else { // 빈 칸이면
        console.log('빈칸입니다');
        칸들[몇줄][몇칸].textContent = 턴;

        // 세칸 다 채워졌나?
        var 다참 = false;
        // 가로줄 검사
        if (칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][2].textContent === 턴) {
            다참 = true;
        }
        // 세로줄 검삭
        if (칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
            다참 = true;
        }

        // 대각선 검사
        if (몇줄 - 몇칸 === 0 ) { // 대각선 검사 필요한 경우 0,0 /  1,1 / 2,2   || 0,2  / 2,2 / 2,0
            if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
                다참 = true;
            }
        }

        // 대각선 검사
        if( Math.abs(몇줄 - 몇칸) === 2){
            if(칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][0].textContent === 턴){
                다참 = true;
            }
        }

        // 다 찼으면
        if (다참) {
            console.log(턴 + '님이 승리!!');
            결과.textContent = 턴 + '님이 승리!';
            // 초기화
            턴 = 'X';
            칸들.forEach(function(줄){
                줄.forEach(function (칸){
                    칸.textContent = '';
                });
            })
        } else {
            if (턴 === 'X') {
                턴 = 'O';
            } else {
                턴 = 'X';
            }
        }

    }
};

for (var i = 1; i <= 3; i += 1) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        // 3칸까지 들여쓰기하게 되면 코드를 다시 한 번 생각해봐라 격언

        칸들[i - 1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);
console.log('줄들', 줄들, '칸들', 칸들);


// 칸들 = [
//     [첫칸, 두칸, 세칸],
//     [첫칸, 두칸, 세칸],
//     [첫칸, 두칸, 세칸]
// ];


// var 첫줄 = document.createElement('tr');
// var 첫첫칸 = document.createElement('td');
// var 첫두칸 = document.createElement('td');
// var 첫세칸 = document.createElement('td');
//
// document.body.append('첫줄');
// 첫줄.append('첫첫칸');
// 첫줄.append('첫두칸');
// 첫줄.append('첫세칸');
//
// var 두번줄 = document.createElement('tr');
// var 두첫칸 = document.createElement('td');
// var 두두칸 = document.createElement('td');
// var 두세칸 = document.createElement('td');
//
// var 세번줄 = document.createElement('tr');