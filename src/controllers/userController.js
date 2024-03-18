import { User } from "../models/userModel";

export const createUser = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
      console.log(newUser.fullName);
      res.json({message: "Utilisateur a été créé avec success"})
  } catch (error) {
    res.status(400).json({error: "Error creating user"});
  }
};

export const allUsers = async (req, res) => { 
    try {
        const users = await User.find();
        res.json(users.map((user) => ({
            ...user.toObject(),
           fullName: user.fullName,
        }))
        );
    } catch (error) {
        res.status(400).json({error: "All users not found"});
    }
}

export const login = async (req, res) => { 
    try {
        const user = await User.findOne({ email: req.body.email });
        res.json({ message: "vous êtes connecté" })
        if (user && (await bcryp.compare(password, user.password))) {
            const token = jwt.sign({ email: user.email }, process.env.JWT_secret)
            res.json({ token })
        } else { 
            res.status(403).json({error: "User not found"})
        }
    } catch (error) {
        res.status(400).json({error: "Veuillez réessayer"});
    }
}