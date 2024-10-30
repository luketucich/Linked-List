# Linked List 🔗

A robust JavaScript implementation of a singly linked list data structure, featuring essential operations for managing and manipulating nodes.

## What is a Linked List?

- A linear data structure where each element, called a node, contains a value and a reference (or link) to the next node in the sequence.
- Unlike arrays, linked lists allow for efficient insertion and removal of elements without reorganizing the entire structure.

## The Takeaway

Developing this LinkedList project deepened my understanding of fundamental data structures and their operations. By implementing various methods, I gained insights into efficient data manipulation and memory management in JavaScript.

Key points:

- **Dynamic Data Handling:** Managed nodes dynamically, allowing the list to grow and shrink efficiently.
  
- **Core Operations:** Implemented essential methods such as `append`, `prepend`, `insertAt`, `removeAt`, and `pop` to manipulate the list effectively.
  
- **Traversal and Search:** Created methods like `contains` and `find` to navigate and search through the list.
  
- **Error Handling:** Ensured robust error checking for operations like inserting or removing nodes at invalid indices.
  
- **Code Modularity:** Structured the code using classes (`Node` and `LinkedList`) for clear organization and reusability.
  
- **Performance Considerations:** Optimized methods to maintain optimal performance, especially for operations affecting the tail of the list.

Overall, this project enhanced my skills in data structure implementation, algorithm design, and writing clean, maintainable JavaScript code.

## Usage

```javascript
// Create a new linked list
const list = new LinkedList();

// Append elements to the list
list.append(10);
list.append(20);
list.append(30);

// Prepend an element to the list
list.prepend(5);

// Get the size of the list
console.log(list.size()); // Output: 4

// Access head and tail values
console.log(list.head()); // Output: 5
console.log(list.tail()); // Output: 30

// Retrieve node at a specific index
console.log(list.at(2)); // Output: Node { value: 20, nextNode: Node { value: 30, nextNode: null } }

// Insert a node at a specific index
list.insertAt(15, 2);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 30 ) -> null

// Remove a node at a specific index
list.removeAt(3);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 30 ) -> null

// Check if the list contains a value
console.log(list.contains(15)); // Output: true
console.log(list.contains(25)); // Output: false

// Find the index of a value
console.log(list.find(15)); // Output: 2
console.log(list.find(25)); // Output: -1

// Convert the list to a string representation
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 30 ) -> null

// Remove the last element
list.pop();
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> null
