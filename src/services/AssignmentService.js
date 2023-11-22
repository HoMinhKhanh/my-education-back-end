const Assignment = require('../models/AssignmentModel');

const createAssignment = (newAssignment) => {
    return new Promise(async (resolve, reject) => {
        const { title, description, courseId, instructorId } = newAssignment
        try {
            const createdAssignment = await Assignment.create({
                title, 
                description, 
                courseId, 
                instructorId,
            })
            if(createdAssignment) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdAssignment
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const updateAssignment = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAssignment = await Assignment.findOne({
                _id: id,
            })
            if (checkAssignment === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Assignment is not defined'
                })
            }

            const updatedAssignment = await Assignment.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedAssignment,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsAssignment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const assignment = await Assignment.findOne({
                _id: id,
            })
            if (assignment === null) {
                resolve({
                    status: 'ERR',
                    message: 'The assignment is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: assignment,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteAssignment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAssignment = await Assignment.findOne({
                _id: id,
            })
            if (checkAssignment === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Assignment is not defined'
                })
            }

            await Assignment.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete Assignment Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteManyAssignment = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Assignment.deleteMany({ _id: ids }, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete Assignments Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

const countAssignment = (courseId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const assignments = await Assignment.find({ courseId });
            const count = await Assignment.countDocuments({ courseId });
            resolve({
                status: 'OK',
                message: 'Count assignments success',
                data: assignments,
                total: count,
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createAssignment,
    updateAssignment,
    getDetailsAssignment,
    deleteAssignment,
    deleteManyAssignment,
    countAssignment,
}