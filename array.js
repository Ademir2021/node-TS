const grades = [20]
grades.push (1)
grades.push (2)
grades.push (3)
grades.splice (5) //remove
grades.push (6)
grades.push (7)

let soma = 0

for (i=0; i < grades.length; i++){
    //console.log(grades[i])
     soma += grades[i]
    }
    console.log (soma)

