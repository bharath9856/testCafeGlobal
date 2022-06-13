
import { Selector, t } from "testcafe"




class common{
    constructor(){
    }

    async sleep(){
        await t
        .wait(1000);
    }
    async windowMax(){
        await t 
        .maximizeWindow();
    }
    
}
export default new common(); 
