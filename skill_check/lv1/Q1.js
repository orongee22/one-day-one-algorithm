function solution(arr, divisor) {
    var answer = [];

    let findElem = arr.filter((elem)=>{
        return elem % divisor === 0;
    });

    if(findElem.length < 1){
        findElem.push(-1);
    }

    answer = findElem.sort((a,b)=>{
        return a-b;
    })

    return answer;
}