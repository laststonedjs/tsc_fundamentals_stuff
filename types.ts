var isWinter: boolean = false;

var count: Number = 5;
var name: String = "Bran";

var names: any[] = ["Jon", "Rickon", "Arya", 5];

enum Starks {
  Jon,
  Bran,
  Eddard,
  Catyln,
}

var cat: Starks = Starks.Catyln;

function getName(): void {
  console.log("Winter is coming!");
}

export {};
