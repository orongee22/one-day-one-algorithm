function solution(a, b) {
    var answer = 1234567890;

    answer = a.reduce((calc, curr, index)=>{
        return calc + (b[index] * curr);
    }, 0);

    return answer;
}