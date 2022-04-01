const str = `
010-1234-5678
thececond@gmail.com
https://www.omdbapi.com/?apikey=4a27f4b6&s=frozen
The quick brown fox jump over the lazy dog.
abbcccdddd
table
hescs
http://localhost:1234/
동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
`

//생성자 함수 형식
// const regexp = new RegExp ('the','gi')
// console.log(str.match(regexp))

//리터럴 방식
// const regexp = /the/gi
// console.log(str.match(regexp))

//문자열 대체 jump => HAPPY
const regexp = /jump/gi
console.log(regexp.test(str))
strResult = str.replace(regexp, "HAPPY")
console.log(strResult)

console.log('----------패턴1----------')
//패턴1 - t로 시작하는 문자열 찾기 (※ 문자열 앞에 공백 있으면 안됨)
//g만 입력 - null, m 추가, i 추가 - 대소문자 구별 안하고 출력
console.log(
    str.match(/^t/gim)
)

//d로 끝나는 문자열 찾기
console.log(
    str.match(/d$/gm)
)

//. 임의의 한 문자열
console.log(
    str.match(/./g)
)
//he로 끝나는 문자열
console.log(
    str.match(/.he/g)
)
//h로 시작하고 s로 끝나는 문자열 찾기
console.log(
    str.match(/h...s/g)
)

//fos와 dog를 |로 찾기
console.log(
    str.match(/fox|dog/g)
)

//http, https를 ?로 찾기
console.log(
    str.match(/https?/g)
)

console.log('----------패턴2----------')
//패턴2 - 연속 일치 여부
//d가 2개 연속 일치 여부
console.log(
    str.match(/d{2}/g)
)

//d가 2개 이상 4개 이하
console.log(
    str.match(/d{2,4}/g)
)

console.log('----------패턴3----------')
//패턴3
//fox
console.log(
    str.match(/[fox]/g)
)

//0에서 9까지의 1개 이상 연속된 데이터 찾기
console.log(
    str.match(/[0-9]{2,}/g)
)

//가에서 힣까지 3개 이상 연속도니 데이터 찾기
console.log(
    str.match(/[가-힣]{3,}/g)
)

console.log('----------패턴4----------')
//패턴4
//영어대소문자, 숫자, _까지 모든 문자 찾기
console.log(
    str.match(/\w/g)
)

//경계를 모두 출력 : 공백, 특수문자
console.log(
    str.match(/\b/g)
)

//경계 활용해서 f로 시작하는 1개 이상 문자 찾기
console.log(
    str.match(/\bf\w{1,}\b/g)
)

//모든 공백 찾기
console.log(
    str.match(/\s/g)
)

//공백 활용
const h = ` the hello world       !`
console.log(
    h.replace(/\s/g, '')
)

console.log('----------패턴5----------')
//패턴5
//앞쪽 일치
console.log(
    str.match(/.{1,}(?=@)/g)
)

//뒤쪽 일치
console.log(
    str.match(/(?<=@).{1,}/g)
)