import fetchRequest from "../../../utils/fetch-request";
import { getUsers, createUser } from "../../../services/api";

// utility function to verify if the user is new or existing

export const verifyExistingUser = async(user) => {
    let flag = false;
    try {
        const res = await fetchRequest(getUsers);
        console.log(res.data)
        res.data.forEach(element => {
            if (user.sub === element["_id"]){
                // User is in DB
                flag = true;
            }
        });
        if (!flag){
            await fetchRequest(()=>createUser({_id : user.sub, name : user.nickname}))
        }
        } catch (error) {
        console.log(error);
        }
};