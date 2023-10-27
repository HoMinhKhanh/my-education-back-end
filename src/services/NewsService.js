const New = require('../models/NewModel');

const createNews = (newNews) => {
    return new Promise(async (resolve, reject) => {
        const { title, content, image, author, like } = newNews
        try {
            const createNews = await New.create({
                title,
                content,
                image,
                author,
                like,
            })
            if(createNews) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createNews
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const updateNews = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNews = await New.findOne({
                _id: id,
            })
            if (checkNews === null) {
                resolve({
                    status: 'ERR',
                    message: 'The news is not defined'
                })
            }

            const updatedNews = await New.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedNews,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsNews = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const news = await New.findOne({
                _id: id,
            })
            if (news === null) {
                resolve({
                    status: 'ERR',
                    message: 'The news is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: news,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getAllNews = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalNews = await New.count()
            if(filter) {
                const label = filter[0]
                const allNewsFilter = await New.find({
                    [label]: { '$regex': filter[1] }
                }).limit(limit).skip(page * limit)
                resolve({
                    status: 'OK',
                    message: 'List all News after filtering',
                    data: allNewsFilter,
                    total: totalNews,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNews / limit),
                })
            }
            if(sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allNewsSort = await New.find().limit(limit).skip(page * limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'List all News after sorting',
                    data: allNewsSort,
                    total: totalNews,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNews / limit),
                })
            }
            const allNews = await New.find().limit(limit).skip(page * limit)
            resolve({
                status: 'OK',
                message: 'List all News',
                data: allNews,
                total: totalNews,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalNews / limit),
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteNews = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNews = await New.findOne({
                _id: id,
            })
            if (checkNews === null) {
                resolve({
                    status: 'ERR',
                    message: 'The news is not defined'
                })
            }

            await New.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete news Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createNews,
    updateNews,
    getDetailsNews,
    getAllNews,
    deleteNews,
}