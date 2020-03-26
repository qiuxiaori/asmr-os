const _ = require('lodash')

const prefix = '/ads'

const adValid = [
    {// 创建
        method: 'post',
        url: '',
        validator: {
            type: 'object',
            properties: {
                title: { type: 'string' }
            },
            required: ['title']
        }
    }
]

module.exports = _.map(adValid, e => {
    e.url = _.concat(prefix, e.url)
})