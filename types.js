"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isWinter = false;
var count = 5;
var name = "Bran";
var names = ["Jon", "Rickon", "Arya", 5];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catyln"] = 3] = "Catyln";
})(Starks || (Starks = {}));
var cat = Starks.Catyln;
function getName() {
    console.log("Winter is coming!");
}
