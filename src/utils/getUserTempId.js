//设计uuid
//1.先引入uuid
import {v4 as uuidv4} from 'uuid'
function getUserTempId(){
    //先判断是否有uuid,有的话直接返回
    let userTempId = localStorage.getItem("userTempId");
    if(userTempId){
        return userTempId;
    }
    //如果没有的话就创建一个，直接调用,然后设置在localStorage中
    //调用生成的临时id用userTempId接受，然后保存在localStorage中
    userTempId = uuidv4()
    localStorage.setItem("userTempId",userTempId);
    return userTempId;
}
export default getUserTempId;