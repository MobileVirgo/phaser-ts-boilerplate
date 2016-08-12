module Fabrique {
    /**
     * The interface ensures all states have variables for game and state name
     */
    export interface IState {
        game: Fabrique.IGame;

        name: string;
    }
}
