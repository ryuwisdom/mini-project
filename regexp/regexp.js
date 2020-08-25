const axios = require('axios');
const fs = require('fs'); // 파일 시스템 (파일을 제어할 수 있는 라이브러리)
// axios.get('https://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F')
//     .then(res => {
//         const text = res.data
//         // writeFileSync(path, string)
//         // path 경로에 파일을 생성하고 string 문자열을 쓰고 저장합니다
//         // Sync가 붙어 동기적으로 실행됩니다. => 즉 파일이 다 쓰여질때까지 코드 전체가 기다림
//         fs.writeFileSync('./2.txt', text); 
//     })
// 위 코드는 1회만 실행합니다
// 주소로 GET요청을 보내서 응답을 받고 응답받은 데이터를 로컬에 저장한 후에
// 로컬에서 파일을 불러오는 방식으로 진행합니다
// 이유는 계속 똑같은 요청, 똑같은 응답을 받기 때문에 1회만 실행하기 위해서입니다
// 속도도 로컬에서 불러오는게 훨씬 빠릅니다
// 로컬에 있는 파일을 불러와 text 변수에 담습니다
const text = fs.readFileSync('./2.txt', 'utf8');

// title="웰캄투실버라이프"

const regex1 = /<th.+rgb.+title=".+">(.+)<\/a>/g

const problem = []

while (true) {
    let result = regex1.exec(text)
    if (result == null) break;

    problem.push(result[1]);
}

console.log(problem);
