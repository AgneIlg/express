import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate{
    constructor() {
        super();
        this.pageTitle = '';
    }
    main() {
        return `<main>About PAGE CONTENT</main>`;
    }
}

export { PageAbout };