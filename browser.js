const Stack = require('./stack');

class Browser {
    constructor() {
        this.backStack = new Stack();   
        this.forwardStack = new Stack(); 
        this.curSite = null;      
    }

    visitPage(url) {
        if (this.curSite !== null) {
            this.backStack.push(this.curSite); 
        }
        this.curSite = url;                   
        this.forwardStack.clear();             
        console.log(`Visited: ${this.curSite}`);
    }

    back() {
        if (!this.backStack.isEmpty()) {
            this.forwardStack.push(this.curSite); 
            this.curSite = this.backStack.pop();   
            console.log(`Went back to: ${this.curSite}`);
        } else {
            console.log("No more pages in back history.");
        }
    }

    forward() {
        if (!this.forwardStack.isEmpty()) {
            this.backStack.push(this.curSite);
            this.curSite = this.forwardStack.pop();
            console.log(`Went forward to: ${this.curSite}`);
        } else {
            console.log("No more pages in forward history.");
        }
    }

    getCurrentPage() {
        return this.curSite;
    }
}

module.exports = Browser;

// Example 
const browser = new Browser();
browser.visitPage("Google");     // Current page: Google
browser.visitPage("Yahoo");      // Current page: Yahoo
browser.visitPage("EBay");       // Current page: EBay
browser.back();                  // Current page: Yahoo
browser.forward();               // Current page: EBay
browser.visitPage("Apple");      // Current page: Apple