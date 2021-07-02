export const userLogin = async(req,res)=>{
    res.cookie("email","awaisniaz",{maxAge:24})
    res.json({"message":"Your are login now"})
}

export const userRegistration = async(req,res)=>{
    res.json({"message":"You are register now"})
}