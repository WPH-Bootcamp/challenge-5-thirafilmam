import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [];

function addBook(title: string, author: string, year: number): void {
  books.push({ title, author, year });
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

function listBooks(): void {
  if (books.length === 0) {
    console.log("No books available.");
    return;
  }
  console.log("All Books:");
  books.forEach((b) => {
    console.log(`- ${b.title} by ${b.author} (${b.year})`);
  });
}

function searchBook(title?: string): void {
  if (title === undefined || title === "") {
    console.log("Please provide a title to search.");
    return;
  }

  const result = books.filter((b) => b.title.includes(title));

  if (result.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  result.forEach((b) => {
    console.log(`- ${b.title} by ${b.author} (${b.year})`);
  });
}

function showMenu(): void {
  console.log("===== Library Menu =====");
  console.log("1. Add Book");
  console.log("2. List Books");
  console.log("3. Search Book");
  console.log("4. Exit");
  console.log("========================");
}

async function main(): Promise<void> {
  const rl = createInterface({ input, output });
  let running = true;

  while (running) {
    showMenu();
    const choice = await rl.question("Choose (1-4): ");

    if (choice === "1") {
      let title = "";
      let author = "";
      let year = 0;

      // LOOP VALIDASI TITLE
      while (true) {
        title = (await rl.question("Title: ")).trim();
        if (title.length < 3) {
          console.log("Title must be at least 3 characters.");
        } else break;
      }

      // LOOP VALIDASI AUTHOR
      while (true) {
        author = (await rl.question("Author: ")).trim();
        if (author.length < 3) {
          console.log("Author must be at least 3 characters.");
        } else break;
      }

      // LOOP VALIDASI YEAR
      while (true) {
        const yearInput = (await rl.question("Year (4 digits): ")).trim();

        if (!/^\d{4}$/.test(yearInput)) {
          console.log("Year must be exactly 4 digits.");
          continue;
        }

        const currentYear = new Date().getFullYear();
        year = Number(yearInput);

        if (year < 1000 || year > currentYear) {
          console.log(`Year must be between 1000 and ${currentYear}.`);
          continue;
        }

        break;
      }

      addBook(title, author, year);
    } else if (choice === "2") {
      listBooks();
    } else if (choice === "3") {
      const keyword = await rl.question("Search title: ");
      searchBook(keyword.trim());
    } else if (choice === "4") {
      running = false;
      console.log("Exiting program...");
    } else {
      console.log("Invalid option.");
    }
  }

  rl.close();
}

main();

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
