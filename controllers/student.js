const express = require('express');
const router = express.Router();
const student = require('../models/student_model');

router.get('/', (request, response) => {
    const data = student.getAllStudents();
    response.json(data);
});

router.get('/:id', (request, response) => {
    let data = student.getOneStudent(request.params.id);
    response.json(data);
});

router.post('/:', (request, response) => {
    let data = student.addStudent();
    response.json(data);
});

router.put('/:id', (request, response) => {
    let data = student.updateStudent(request.params.id);
    response.json(data);
});

router.delete('/:id', (request, response) => {
    let data = student.deleteStudent(request.params.id);
    response.json(data);
});

module.exports = router;