# **⚡ Event Loop & Concurrency in JavaScript 🚀**  

JavaScript is **single-threaded**, meaning it executes one operation at a time. However, it can handle multiple asynchronous tasks efficiently using the **Event Loop**, enabling concurrency without blocking execution.

---

## **1️⃣ Call Stack 📚**
The **Call Stack** is where JavaScript keeps track of function execution. It follows **LIFO (Last In, First Out)**.

### **🛠 Example**
```javascript
function first() {
  console.log("First function");
}

function second() {
  console.log("Second function");
}

first();
second();
console.log("End of script");
```
### **📌 Execution Flow**
1️⃣ `first()` is pushed to the stack → executes → removed.  
2️⃣ `second()` is pushed to the stack → executes → removed.  
3️⃣ `"End of script"` logs to the console.  

✅ **Since JavaScript is synchronous by default, it executes line by line.**  

---

## **2️⃣ Web APIs 🌍**
JavaScript has access to Web APIs (like `setTimeout`, `fetch`, `DOM events`) that run asynchronously. These APIs **don’t block** the main thread.

### **Example of Web APIs**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout executed");
}, 2000);

console.log("End");
```
### **📌 Execution Flow**
1️⃣ `"Start"` is logged first.  
2️⃣ `setTimeout()` is sent to Web APIs and runs in the background.  
3️⃣ `"End"` is logged.  
4️⃣ After 2 seconds, `"Timeout executed"` is logged.  

✅ **Web APIs allow JavaScript to be non-blocking!**  

---

## **3️⃣ Callback Queue 📥**
Once an asynchronous task (like `setTimeout`) completes, it moves to the **Callback Queue**.

✅ The **Event Loop** constantly checks whether the **Call Stack is empty** and pushes the callback from the queue to the stack.

### **Example**
```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
```
### **📌 Execution Flow**
1️⃣ `"1"` is logged.  
2️⃣ `setTimeout(…, 0)` moves to Web APIs.  
3️⃣ `"3"` is logged.  
4️⃣ The Event Loop pushes the callback (`console.log("2")`) from the queue to the stack **after the main script finishes**.  
5️⃣ `"2"` is logged.  

✅ Even with `0ms` delay, the callback runs **after** synchronous code!  

---

## **4️⃣ Microtask Queue 🏎️**
🔹 **Microtasks** (Promises, `queueMicrotask()`, `MutationObserver`) have **higher priority** than normal tasks (callbacks from `setTimeout`).  

### **Example**
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```
### **📌 Execution Flow**
1️⃣ `"Start"` is logged.  
2️⃣ `setTimeout(…, 0)` moves to Web APIs.  
3️⃣ Promise moves to the **Microtask Queue**.  
4️⃣ `"End"` is logged.  
5️⃣ Microtasks execute first → `"Promise"` is logged.  
6️⃣ Finally, `"Timeout"` is logged from the Callback Queue.  

✅ **Microtasks always execute before the Callback Queue tasks!**  

---

## **5️⃣ Event Loop 🔄 (Bringing It All Together)**
The **Event Loop** continuously checks:
1️⃣ Is the Call Stack **empty**?  
2️⃣ Are there any pending **Microtasks**?  
3️⃣ Are there tasks in the **Callback Queue**?  

💡 **The Event Loop ensures JavaScript handles concurrency efficiently without blocking execution.**  

---

## **🎯 Conclusion**
🔥 **JavaScript is single-threaded but non-blocking.**  
⚡ **Web APIs handle async tasks while JavaScript keeps running.**  
🏎 **Microtasks (Promises) execute before normal Callbacks (`setTimeout`).**  
🔄 **The Event Loop ensures smooth execution of async tasks.**  

Would you like a **visualization of the Event Loop?** 🎥🔥
