import { PubSubManager } from "./PubSubManager"


setInterval(()=>{
        PubSubManager.getInstance().addUsertoStock(Math.random().toString(),"APPL")
},5000)