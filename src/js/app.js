import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as SaveGame} from "./game";

const game = new Game();
game.start();