//Пример как в фото graph_relation_1.jpg
const graph_1 = new Map();
graph_1.set("me", ["alice", "bob", "claire"]);

// Пример как в фото graph_relation_2.jpg
const graph_2 = new Map();
graph_2.set("me", ["alice", "bob", "claire"]);
graph_2.set("alice", ["peggy"]);
graph_2.set("bob", ["anuj", "peggy"]);
graph_2.set("claire", ["thom", "jonny"]);
graph_2.set("anuj", []);
graph_2.set("peggy", []);
graph_2.set("thom", []);
graph_2.set("jonny", []);
