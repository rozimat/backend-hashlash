const bcrypt = require("bcrypt");
const Io = require("../utils/Io")
const usersData = new Io("../../db/users.json");
const User = require("../modules/user");


exports.homeGet = async ( _ ,res)=>{
  try {
    res.status(200).send("Welcom to API")
  } catch (error) {
    res.status(500).json({ message : "INTERNAL SERVER ERROR"})
  }
};

exports.homePost = async  (req,res)=>{
  try {
    const {  username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const dataUsers = usersData.read();
    /*const id = (dataUsers[dataUsers.length -1]?.id || 0)+ 1;
    const user = new User(id, username, hashedPassword);
    const data = dataUsers ? [...dataUsers, user] : [dataUsers];
    console.log(data);
    */

    res.status(201).json({ message: "Succsessfully created!"});

  } catch (error) {
    res.status(500).json({ message : "INTERNAL SERVER ERROR"});
  }
};

