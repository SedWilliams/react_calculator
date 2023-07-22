class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items != 0) {
            return this.items.pop();
        } else {
            console.log("Underflow error");
        }
    }

    showStack() {
        var num = " ";
        for(var i = 0; i < this.items.length; i++) {
            num += this.items[i] + " ";
        }
        return num;
    }

    dumpStack() {
        for(var i = 0; i < this.items.length; i++) {
            this.items.pop();
        }
    }
}

export default Stack;