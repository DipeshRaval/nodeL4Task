const todoList = require("../index");

const { all, markAsComplete, add } = todoList();

describe("Todolist Testing", () => {
  beforeAll(() => {
    add({
      title: "DAA algorithums",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in list", () => {
    // expect(all.length).toBe(0);

    let length = all.length;

    add({
      title: "node js learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
