function random(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}

function randomBoolean() {
    let number = Math.floor(Math.random() * 2);
    return number === 0;
}

function randomPercent(p) {
    let number = Math.floor(Math.random() * 100);
    return number < p;
}

function randomBetween(minInclusive, maxExclusive) {
    return Math.floor(Math.random() * (maxExclusive - minInclusive) ) + minInclusive;
}

function getRandomBottomHallway(requiredHallway) {
    let indexScaffold = requiredHallway ? 3 : randomBetween(0, 4);
    return {
        index: indexScaffold,
        scaffold: ROOMS[indexScaffold],
        acceptBottomRoom: -1,
        acceptLeftRoom: -1
    };
}
function getRandomLeftHallway(requiredHallway) {
    let indexScaffold = requiredHallway ? 7 : randomBetween(4, 8);
    return {
        index: indexScaffold,
        scaffold: ROOMS[indexScaffold],
        acceptBottomRoom: -1,
        acceptLeftRoom: -1
    };
}
