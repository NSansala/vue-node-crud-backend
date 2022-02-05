//import user model
const UserModal = require('../modals/UserModal')

//create user
userRegister=async( req , res )=>{

    const alreadyUser = await UserModal.findOne({email:req.body.email})
    if(!alreadyUser){
        UserModal.create(req.body).then((user)=>{
            res.send(user)
        }).catch((err)=>{
            console.log(err)
            res.send(err)
        });
    }
    else{
        res.send('This user is already existed')
    }

}

//delete user
userDelete=( req , res )=>{

    UserModal.deleteOne({_id:req.params.id}).then((deletedUser)=>{
        res.send('User successfully deleted!')
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    });

}

//update user
userUpdate=async( req , res )=>{
    
    UserModal.updateOne({_id:req.params.id},{$set:req.body}).then((updatedUser)=>{
        res.send("User successfully updated!")
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    });

}

//get all users
getAllUsers=( req , res )=>{

    UserModal.find().then((users)=>{
        res.send(users)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    });

}

//get one user
getOneUser=async( req , res )=>{

    UserModal.findOne({_id:req.params.id}).then((user)=>{
        res.send(user)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    });

}

module.exports = {
    userRegister,
    userDelete,
    userUpdate,
    getAllUsers,
    getOneUser,
}