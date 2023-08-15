"use strict";
function decideOperation(num, bool) {
    bool ? console.log(num + 1) :
        console.log(num - 1);
}
decideOperation(10, false);
decideOperation(6, true);
