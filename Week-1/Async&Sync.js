// Sync Function
function findSum(n) {
    let ans = 0;
    for(let i=0;i<n;i++) {
        ans += i;
    }
    return ans;
}

console.log(findSum(1000));

// Async Function 
function findSum(n) {
    let ans = 0;
    for(let i=0;i<n;i++) {
        ans += i;
    }
    console.log(ans);
    return ans;
}

function findSumTill100() {
    return findSum(100);
}

setTimeout(findSumTill100,1000);
console.log("Hello World");

// Make Above code has sync function by using busy sleep 
function findSum(n) {
    let ans = 0;
    for(let i=0;i<n;i++) {
        ans += i;
    }
    console.log(ans);
    return ans;
}

function findSumTill100() {
    return findSum(100);
}

// busy waiting 
// Let make the thread is busy in these function.
function syncSleep(){
   let a  = 0;
   for(let i=0;i<1000000000;i++) {
    a++;
   }
}
syncSleep();  // These function make the code as sync functionality 
findSumTill100();
console.log("Hello World");

