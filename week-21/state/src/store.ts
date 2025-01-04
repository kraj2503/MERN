interface Game {
  id: string;
  whitePlayerGame: string;
  blackPlayerGame: string;
  moves: string[];
}

// export const games: Game[] = [];
//singleton pattern -> we create a private constructor  and private static instance of same class so tha tthe user can't create a new instance

export class GameManager {
  games: Game[] = [];
  private constructor() {
    this.games = [];
  }

  private static instance: GameManager;

  static getInstance() {
    if (GameManager.instance) {
      return GameManager.instance;
    }
    GameManager.instance = new GameManager();
    return GameManager.instance;
  }
  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move);
  }

  addGame(gameID: string) {
    const game = {
      id: gameID,
      whitePlayerGame: "Alice",
      blackPlayerGame: "bob",
      moves: [],
    };
    this.games.push(game);
  }
}

export const gameManager = GameManager.getInstance();
