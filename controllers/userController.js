module.exports = {
    createUser: (req, res) => {
        return res.send({
            message: "Create User API"
        })
    },

    updateUser: (req, res) => {
        return res.send({
            message: "Update User API"
        })
    },


    deleteUser: (req, res) => {
        return res.send({
            message: "Delete User API"
        })
    },


    // createUser: (req, res) => {
    //     return res.send({
    //         message: "Login API"
    //     })
    // }
}