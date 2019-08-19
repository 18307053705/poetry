import axios from 'axios';

export const get= async (url,params={})=>{
    try {
       let response = await axios.get(url, {params})
          if(response.code === 0){
              return response;
          }else{
              throw response;
          }
    }
     catch (error) {
        console.log(error)
    }
   
}


export const post= async (url,params={})=>{
    try {
       let response = await axios.post(url, params)
        return response;
    }
    catch (error) {
        console.log(error)
    }
   
}
