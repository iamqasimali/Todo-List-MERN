const bcrypt = require("bcryptjs")
const saltRounds = 10

const encryptPassword = (password) => {
        bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            console.log('Salt: ', salt)
            return bcrypt.hash(password, salt)
        })
        .then(hash => {
            console.log('Hash: ', hash)
        })
        .catch(err => console.error(err.message))
}

// const encryptPassword = async(password) => {
//     await bcrypt.genSalt(saltRounds, (err, salt) => {
//       if (err) {
//         console.error(err.message);
//       } else {
//         bcrypt.hash(password, salt, (err, hash) => {
//           if (err) {
//             console.error(err.message);
//           } else {
//             return hash
//             // console.log('Hashed password:', hash);
//           } 
//         });
//       }
//     });
//   };

module.exports = [encryptPassword]