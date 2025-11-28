"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
var promises_1 = require("readline/promises");
var process_1 = require("process");
var books = [];
function addBook(title, author, year) {
    books.push({ title: title, author: author, year: year });
    console.log("Book added: \"".concat(title, "\" by ").concat(author, " (").concat(year, ")"));
}
function listBooks() {
    if (books.length === 0) {
        console.log("No books available.");
        return;
    }
    console.log("All Books:");
    books.forEach(function (b) {
        console.log("- ".concat(b.title, " by ").concat(b.author, " (").concat(b.year, ")"));
    });
}
function searchBook(title) {
    if (!title || title.trim().length === 0) {
        console.log("Please provide a title to search.");
        return;
    }
    var result = books.filter(function (b) { return b.title.includes(title); });
    if (result.length === 0) {
        console.log("No books found with title containing \"".concat(title, "\"."));
        return;
    }
    console.log("Search Results for \"".concat(title, "\":"));
    result.forEach(function (b) {
        console.log("- ".concat(b.title, " by ").concat(b.author, " (").concat(b.year, ")"));
    });
}
function showMenu() {
    console.log("===== Library Menu =====");
    console.log("1. Add Book");
    console.log("2. List Books");
    console.log("3. Search Book");
    console.log("4. Exit");
    console.log("========================");
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, running, choice, title, author, year, yearInput, currentYear, keyword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rl = (0, promises_1.createInterface)({ input: process_1.stdin, output: process_1.stdout });
                    running = true;
                    _a.label = 1;
                case 1:
                    if (!running) return [3 /*break*/, 15];
                    showMenu();
                    return [4 /*yield*/, rl.question("Choose (1-4): ")];
                case 2:
                    choice = _a.sent();
                    if (!(choice === "1")) return [3 /*break*/, 10];
                    title = "";
                    author = "";
                    year = 0;
                    _a.label = 3;
                case 3:
                    if (!true) return [3 /*break*/, 5];
                    return [4 /*yield*/, rl.question("Title: ")];
                case 4:
                    title = (_a.sent()).trim();
                    if (title.length < 3) {
                        console.log("Title must be at least 3 characters.");
                    }
                    else
                        return [3 /*break*/, 5];
                    return [3 /*break*/, 3];
                case 5:
                    if (!true) return [3 /*break*/, 7];
                    return [4 /*yield*/, rl.question("Author: ")];
                case 6:
                    author = (_a.sent()).trim();
                    if (author.length < 3) {
                        console.log("Author must be at least 3 characters.");
                    }
                    else
                        return [3 /*break*/, 7];
                    return [3 /*break*/, 5];
                case 7:
                    if (!true) return [3 /*break*/, 9];
                    return [4 /*yield*/, rl.question("Year (4 digits): ")];
                case 8:
                    yearInput = (_a.sent()).trim();
                    if (!/^\d{4}$/.test(yearInput)) {
                        console.log("Year must be exactly 4 digits.");
                        return [3 /*break*/, 7];
                    }
                    currentYear = new Date().getFullYear();
                    year = Number(yearInput);
                    if (year < 1000 || year > currentYear) {
                        console.log("Year must be between 1000 and ".concat(currentYear, "."));
                        return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 9:
                    addBook(title, author, year);
                    return [3 /*break*/, 14];
                case 10:
                    if (!(choice === "2")) return [3 /*break*/, 11];
                    listBooks();
                    return [3 /*break*/, 14];
                case 11:
                    if (!(choice === "3")) return [3 /*break*/, 13];
                    return [4 /*yield*/, rl.question("Search title: ")];
                case 12:
                    keyword = _a.sent();
                    searchBook(keyword.trim());
                    return [3 /*break*/, 14];
                case 13:
                    if (choice === "4") {
                        running = false;
                        console.log("Exiting program...");
                    }
                    else {
                        console.log("Invalid option.");
                    }
                    _a.label = 14;
                case 14: return [3 /*break*/, 1];
                case 15:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
