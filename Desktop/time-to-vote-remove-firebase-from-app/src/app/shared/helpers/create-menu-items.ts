// @ts-ignore
import {menu} from './menu';

export class CreateMenuItems {
    menu;
    constructor() {
        this.menu = menu;
    }

    // this is temp menu for v1
    getAllMenuItem() {
        return this.menu;
    }

    getShowingItems() {
        const items = this.menu;
        return items;
    }
}

export class MenuModel {
    id?: string;
    name?: string;
    url?: string;
    isActive?: boolean;
    permissions?: string;
    flags?: string[];
    show?;
}
