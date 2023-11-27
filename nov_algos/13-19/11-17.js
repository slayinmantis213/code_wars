/*
Problem from Amazon:
You are stranded in a post-apocalyptic desert with a motorbike. Starting with a full tank of gas, 
you are trying to cross the desert to reach your destination.
There are several outposts scattered throughout the desert where you can fill up on gas, 
but as they are dangerous, you want to minimize the number of stops you need to make.

Given a tank size, a list of gas station locations (as a 2D array of xy coordinates) , 
a start location, and a target destination,
return the fewest number of outposts that need to be visited (shortest path) to reach your destination.

NOTES: 
- we aren't looking for the shortest path in terms of *distance*, 
just in terms of the number of locations visited!
- tank size is guaranteed to be greater than 0 (but not guaranteed to be big enough to reach any locations)
- tank size is in units of distance (so a tank size of 1 means you can travel 1 unit of distance)
- you are not limited to moving in just the cardinal directions, 
you can move at any angle as long as you have enough gas (Hint: think distance formula)
- you should be using a queue as part of your algorithm! 
think back to the toArrLevelOrder algorithm we did in week 2 with BSTs, we need to do something similar (but without a BST)
*/
const {Queue} = require("./11-16")
// returns an count of outposts required
function find_fewest_outposts_count(start, target, outposts, tankSize) {
    let notVisited = new Set(outposts);
    let newQueue = new Queue([start]);
    let steps = 0;
    let front;
    while (newQueue.size()) {
        for (let i = 0; i < newQueue.size(); i++) {
            front = newQueue.dequeue();
            // console.log("Front: "+ front ,"|| Target: " + target, steps)
            if (getDistance(front, target) <= tankSize) {
                return steps + 1;
            }
            for (const location of notVisited) {
                if (getDistance(front, location) <= tankSize) {
                    newQueue.enqueue(location);
                    notVisited.delete(location);
                }
            }
        }
        steps += 1;
    }
    return -1;
}
function getDistance(start, target) {
    return Math.sqrt((target[0] - start[0]) ** 2 + (target[1] - start[1]) ** 2);
}
// returns a 2d array representing the path from start to target
function find_fewest_outposts_path(start, target, outposts, tankSize) {}

const outposts = [[0, 1], [0, 3], [1, 2]]
console.log(find_fewest_outposts_count([0, 0], [0, 4], outposts, 2.5)) // 1 
console.log(find_fewest_outposts_path([0, 0], [0, 4], outposts, 2.5)) // [ [ 0, 0 ], [ 1, 2 ], [ 0, 4 ] ]

const outposts4 = [[0, 1], [0, 3], [1, 2]]
console.log(find_fewest_outposts_count([0, 0], [0, 4], outposts4, 2)) // 2
console.log(find_fewest_outposts_path([0, 0], [0, 4], outposts4, 2)) // [ [ 0, 0 ], [ 0, 1 ], [ 0, 3 ], [ 0, 4 ] ]