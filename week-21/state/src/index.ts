import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(() => {
  gameManager.addGame(Math.random().toString());
  //         games.push({
  //                 id:Math.random().toString(),
  //                 whitePlayerGame: 'Alice',
  //                 blackPlayerGame:'Bob',
  //                 moves:[]
  //         })
}, 5000);
