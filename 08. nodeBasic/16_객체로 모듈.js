// 이건 아예 클래스로 모듈을 만든 것이야. 속성과 메소드가 다 있다.

module.exports = {
    /* exports는 밖으로 빼낼 수 있게 하는 것 */
    CONSTANT: 3,


    randInt: function (from, to) {
        return Math.floor(Math.random() * (from - to)) + to;
        /* 1에서 5까지 랜덤 정수를 뽑아내는 함수 */
    },

    area: function (radius) {
        return Math.PI * radius * radius
    }
}