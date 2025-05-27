// Breadth-First Search Algorithm
// Time Complexity: O(V + E) where V is vertices and E is edges

// Алгоритм поиска в ширину
// Временная сложность: O(V + E) где V - вершины("люди"), E - рёбра("связи")
function breadthFirstSearch(graph, start, checker) {
  const searchQueue = [];
  const checked = [];

  // помещаем в очередь связи первого уровня
  graph[start].forEach((link) => {
    searchQueue.push(link);
  });

  // пока в очереди есть элементы
  while (searchQueue.length) {
    let item = searchQueue.shift();
    if (checked.indexOf(item) !== -1) continue;
    checked.push(item);

    if (checker(item)) return item;
    else {
      graph[item].forEach((link) => {
        searchQueue.push(link);
      });
    }
  }

  return null;
}

// граф друзей на фейсбуке
const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy", "maxim"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
  maxim: [],
};

// проверка, является ли человек продавцом манго
function isMangoSeller(name) {
  return name[name.length - 1] === "m";
}

breadthFirstSearch(graph, "you", isMangoSeller); // maxim
breadthFirstSearch(graph, "claire", isMangoSeller); // thom
