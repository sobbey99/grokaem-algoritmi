import fs from "fs/promises";
import path from "path";

const PICS_PATH = path.join(process.cwd(), "pics");

//ПОИСК В ШИРИНУ
async function listFilesWithQueue(start) {
  const searchQueue = [start];

  while (searchQueue.length) {
    let item = searchQueue.shift();
    const listed_dir = await fs.readdir(item);
    for (const element of listed_dir) {
      const fullpath = path.join(item, element);
      const is_element_file = await isFile(fullpath);
      if (is_element_file) {
        console.log(element);
      } else {
        searchQueue.push(fullpath);
      }
    }
  }
}

let counter_called_recursion = 0;
//ПОИСК В ГЛУБИНУ
async function listFilesWithRecursion(start) {
  counter_called_recursion += 1;
  console.log({ counter_called_recursion });
  const listed_dir = await fs.readdir(start);
  for (const element of listed_dir) {
    const fullpath = path.join(start, element);
    const is_element_file = await isFile(fullpath);
    if (is_element_file) {
      console.log(element);
    } else {
      listFilesWithRecursion(fullpath);
    }
  }
}

// listFilesWithQueue(PICS_PATH);
// listFilesWithRecursion(PICS_PATH);

async function isFile(path) {
  const info = await fs.stat(path);
  return !info.isDirectory();
}
