//CURRENT ISSUES

//minefield object, grid of rows and cols
//use arrays for cols and rows, objects to keep track of each spot in the grid
function createMinefield() {
    let minefield = {};
    minefield.rows = [];

    for (let y = 0; y < 9; y++) {
        let row = {};
        row.spots = [];

        for (let x = 0; x < 9; x++) {
            let spot = {};
            spot.isCovered = true;
            spot.content = "empty";
            row.spots.push(spot);
        }
        minefield.rows.push(row);
    }
    return minefield;
}

//below function from simplygoodcode version
//function minesweeperController($scope) {
    //$scope.minefield = createMinefield();
//}

const minesweeperModule = angular.module('minesweeperApp', []);

const minesweeperController = function($scope) {
    $scope.test = "Everything is just fine."
    $scope.minefield = createMinefield();
}

minesweeperModule.controller("minesweeperController", minesweeperController);