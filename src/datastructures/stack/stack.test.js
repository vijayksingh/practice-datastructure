const Stack = require('./stack'); // import the Stack class

test('stack is empty when created', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
});

test('stack size is correct', () => {
  const stack = new Stack();
  expect(stack.size()).toBe(0);
  stack.push(1);
  expect(stack.size()).toBe(1);
  stack.push(2);
  expect(stack.size()).toBe(2);
  stack.pop();
  expect(stack.size()).toBe(1);
});

test('stack methods work correctly', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.top()).toBe(undefined);
  expect(stack.pop()).toBe(undefined);
  stack.push(1);
  stack.push(2);
  expect(stack.top()).toBe(2);
  expect(stack.pop()).toBe(2);
  expect(stack.top()).toBe(1);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
});

test('stack can be used with different data types', () => {
  const stack = new Stack();
  stack.push('a');
  stack.push(true);
  stack.push(3.14);
  expect(stack.pop()).toBe(3.14);
  expect(stack.pop()).toBe(true);
  expect(stack.pop()).toBe('a');
});

test('stack methods can be called multiple times', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.isEmpty()).toBe(true);
  expect(stack.isEmpty()).toBe(true);
  stack.push(1);
  stack.push(2);
  expect(stack.size()).toBe(2);
  expect(stack.size()).toBe(2);
  expect(stack.size()).toBe(2);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.isEmpty()).toBe(true);
  expect(stack.isEmpty()).toBe(true);
});

test('stack can be used to reverse a string', () => {
  const stack = new Stack();
  const string = 'hello';
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  expect(reversed).toBe('olleh');
});

test('stack can be used to check for balanced parentheses', () => {
  const stack = new Stack();
  const string = '(hello (world))';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(string[i]);
    } else if (string[i] === ')') {
      if (stack.isEmpty()) {
        expect(false).toBe(true); // fail the test if a closing parenthesis is encountered without a matching opening parenthesis
      } else {
        stack.pop();
      }
    }
  }
  expect(stack.isEmpty()).toBe(true); // the string is balanced if the stack is empty after parsing the string
});
