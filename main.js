"use strict";
function shippingcost(method) {
    let cost;
    switch (method) {
        case "standard":
            cost = 5.0;
            break;
        case "express":
            cost = 10.0;
            break;
        case "overnight":
            cost = 20.0;
            break;
        default:
            return "Invalid shipping method";
    }
    return cost;
}
const testcases = ["standard", "express", "overnight", "same-day"];
testcases.forEach((testcases) => {
    const result = shippingcost(testcases);
    console.log(`shippingcost ${testcases} => ${result}`);
});
