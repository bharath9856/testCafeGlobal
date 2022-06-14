
import { Selector, t } from "testcafe"




class common{
    constructor(){
    }

    
    async windowMax(){
        await t 
        .maximizeWindow();
    }
    async sleep(time){
        await t.wait(time);
    }
}
export default new common(); 
