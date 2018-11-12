import { Board } from "../board";
import { Section } from "../section/section";

/**
 * A task is a single kanban card. 
 */
export class Task {
    /**
     * The board the task belongs to
     */
    public board: Board;

    /**
     * The section this task belongs to.
     */
    public section: Section;

    /**
     * The unique id of the task.
     */
    public id: number;

    /**
     * The name of the task.
     */
    public name: string;

    /**
     * The longer description.
     */
    public description: string;

    /**
     * The number of hours that this task
     * is estimated to take.
     */
    public estimatedHours: number;

    /**
     * The actual number of hours this task
     * took.
     */
    public actualHours: number;
}