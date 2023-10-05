const studentData = [
    {id_student:1, firstName: 'Tatu', lastName:'Malinen'},
    {id_student:2, firstName: 'Tatu2', lastName:'Malinen2'},
    {id_student:3, firstName: 'Tatu3', lastName:'Malinen3'},
];

const student = {
    getAllStudents: () => {
        return studentData;
    },
    getOneStudent: (id) => {
        return studentData[id - 1];
    },
    addStudent: () => {
        return 'Lisätään uusi opiskelija (insert into ...)';
    },
    updateStudent: (id) => {
        return 'Päivitetään opiskelija, jonka id ' + id; 
    },
    deleteStudent: (id) => {
        return 'Poistetaan opiskelija, jonka id ' + id; 
    }
};
module.exports = student;