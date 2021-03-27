function solution(participant, completion) {
    var answer = '';

    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();

    answer = sortParticipant.find((part, index)=>{
        return sortCompletion[index] !== part;
    });

    return answer;
}