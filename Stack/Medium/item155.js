/* 
- Name: 155. Min Stack
- Description: Design a stack that supports push, pop, top, and retrieving the
minimum element in constant time.
- My line of thought: Just use two stacks, one for the values and another for the minimum values.
- Time complexity: O(1)
- Space complexity: O(n)
*/

function MinStack() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (this.minStack.length === 0 || val <= this.getMin()) { // if doesnt have anything or the value is lower than the min
        this.minStack.push(val);
    } else {
        // repeat the value to not break the pop
        this.minStack.push(this.getMin());
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    /* Complexidade O(n)
    let min = this.stack[0];

    for(let i = 1; i < this.stack.length; i++) {
        if (this.stack[i] < min) {
            min = this.stack[i];
        }
    }

    return min;
    */

    /*
    Outra forma mas tambem com complexidade O(n)

    let min = Math.min(...this.stack);
    return min;
    */

    // Only way to use O(1) complexity
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */