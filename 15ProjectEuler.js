function solution(l) {
    
    let m = [...Array(l+1)].map(() => [...Array(l+1).fill(0)].map((x, i) => i == 0 ? 1 : x))
    
    m[0] = [...Array(l+1).fill(1)]

    
    for (let i in m) {
        
        if (i > 0) {
            
            for (let j in m[i]) {
                
                if (j > 0) {
                    
                    m[i][j] = m[i-1][j] + m[i][j-1]
                
                }
            
            }
        
        }
    
    }

	return m[l][l]

}


const answer = solution(20)


console.log(answer)
