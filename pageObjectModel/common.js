import { selector,t } from "testcafe"

class common{

    async maximumWindow(){
    await t 
        .maximizeWindow();
    }
    async WaitSec(sec){
        await t 
        .wait(sec);
    }
}
export default new common();    