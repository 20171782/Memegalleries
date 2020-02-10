const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();





exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user) =>{
            return admin.auth().setCustomUserClaims(user.uid,{
                admin:true,

            }).then(()=>{

            })
        }).then(()=>{
            return {
                message:`Success! ${data.email} has disable`
            }
        })

        .catch(err =>{
            return err
        })

});

exports.UpdateUser = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user) =>{
        return admin.auth().updateUser(user.uid, {
            disabled: true


        })

    }).then(()=>{

        return {

            message:`Success! ${data.email} has been not been disabled`,

        }
    }).catch(err =>{
        return err
    })

});


















