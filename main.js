const students = [
    {nome:'', nota: ''},
    {nome:'', nota: ''},
    {nome:'', nota: ''},
]

const studentgrade = students.map(student => {
    nameStudent = prompt('Digite o nome do aluno')
    gradeStudent = prompt(`Digite a nota do aluno ${nameStudent}`)


    return {
        name: nameStudent,
        nota: gradeStudent
    }
}).filter(student => {
    if (student.nota >= 6) {
        return student
    }
})

console.log(studentgrade)