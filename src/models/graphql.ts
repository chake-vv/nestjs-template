
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract getTodos(): Todo[] | Promise<Todo[]>;

    abstract todo(id: string): Todo | Promise<Todo>;
}

export class Todo {
    title?: string;
    id?: string;
    description?: string;
}
