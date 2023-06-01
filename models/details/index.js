
const getDetails = () => {
    const detail = [
        {   id: 1,
            name: "Test Detail 1"}, 
        {   id: 2,
            name: "Test Detail 2"}
    ]
    return detail
}

const getDetail = (id) => {
    const detail = {
        id,
        name: "Your test detail"
    }
    return detail
}

module.exports = {
    getDetails,
    getDetail,
}