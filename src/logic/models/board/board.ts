import { BoardVisibility } from "./board-visibility";
import { User } from "../user/user";
import { Section } from "./section/section";

/**
 * A board contains various tasks assorted into
 * categories.
 */
export class Board {
    /**
     * The unique id.
     */
    public id: number;

    /**
     * The title of the board.
     */
    public name: string;

    /**
     * The text description of the board.
     */
    public description: string;

    /**
     * The user who created the board.
     */
    public creator: User;

    /**
     * Who can view the board.
     */
    public visibility: BoardVisibility;
    
    /**
     * The board sections.
     */
    public sections: Section[];

    /**
     * Create a new task board.
     * @param name The name of the board.
     * @param description The description.
     */
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}