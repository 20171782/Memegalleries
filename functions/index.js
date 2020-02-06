const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



const uid = 'gotf8EVRHZXAWjLTzs9HFe7hOxs1'

exports.Admins = functions.https.onCall((req, res) => {
return admin.auth().getUserByEmail(data.email).then(user =>{
    return admin.auth().setCustomUserClaims(user.uid,{
        admin:true
    })
}).then(()=>{
    return {
        message:`Success! ${req.email} has been made an admin`
    }
}).catch(err =>{
    return err
})

    // admin.auth().updateUser(uid, {
    //     email: 'modifiedUser@example.com',
    //     emailVerified: true,
    //     password: 'newPassword',
    //     displayName: 'Jane Doe',
    //     photoURL: 'http://www.example.com/12345678/photo.png',
    //     disabled: false
    // })
    //     .then(function(userRecord) {
    //         // See the UserRecord reference doc for the contents of userRecord.
    //         console.log('Successfully updated user', userRecord.toJSON());
    //     })
    //     .catch(function(error) {
    //         console.log('Error updating user:', error);
    //     });
    });


















