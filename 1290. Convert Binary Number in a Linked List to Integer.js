var getDecimalValue = function(head) {
    let solution = []
    let current = head
    while(current != null){
        solution.push(current.val)
        current = current.next
    }
    return (parseInt(solution.join(''), 2))
    
};