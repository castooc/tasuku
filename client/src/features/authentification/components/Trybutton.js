import { getUsers, createUser } from "../../../services/api";
import fetchRequest from "../../../utils/fetch-request";

export const Trybutton = () => {

    const handle = async () => {
      const res = await fetchRequest(getUsers)
      const res2 = await fetchRequest(()=>createUser({_id : 4, name : "lolass"}))
      console.log(res)
      console.log(res2)
    };
  
    return (
      <button onClick={handle}>
        TEST
      </button>
    );
  };