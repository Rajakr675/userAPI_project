const knex = require("./DataBase");
const { GenrateToken } = require('./jwt');

// 1. Create user 

const user_data= async(req,res)=>{
    try{
        let Data={
            Name:req.body.Name,
            Salary:req.body.Salary,
            Date_of_Birth:req.body.Date_of_Birth,
            Photo_path:req.body.Photo,
            Status:req.body.Status
        }
        let Data_uplord = await knex("user_data").insert(Data);

        res.json({
          Account: Data_uplord,
          mesg: "User Created Succesfully...!",
        });
        console.log("User Created Succesfully...!");
    }catch (error) {
        console.log(error);
      }
}

//2. List User Api

const user_list=async(req,res)=>{
    try{
        let info=await knex("user_data");
        res.json({
            All_users:info,
        });
        console.log("All Users..!");

    }catch(error){
        console.log(error);
    }
}

// 3. Login Api with JWT

const Login_user=async(req,res)=>{
    const {id,Name}=req.body
    try{
        const info=await knex("user_data").where({id:id,Name:Name});
        if(!info == ''){
            let token = GenrateToken(id)       
            res.cookie('Token',token)
            console.log("Logged in successfully....");
            res.send('Logged in successfully');
        }else{
            res.json({message:'id or Name is wrong'})
        }

    }catch(error){
        console.log(error);
    }
}

// 4.Get Profile detail by Login Token...

const UserDetail=async (req,res) =>{
    try{
        const UserInfo = req.UserData
        console.log(UserInfo);
        res.json({data:UserInfo})

    }catch(error){
        console.log(error);
    }
    
}


module.exports={
    user_data,
    user_list,
    Login_user,
    UserDetail
}