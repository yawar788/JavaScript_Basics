### **🔥 Callback Hell and Solutions 🚀**  

#### **😵 What is Callback Hell?**  
Callback hell (also called "Pyramid of Doom") happens in JavaScript when multiple nested callbacks make the code **hard to read, debug, and maintain**. It often occurs in **asynchronous operations** like API calls, file reading, or database queries.

#### **⚠️ Example of Callback Hell**  
```javascript
const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("👤 User data fetched");
    callback({ id, name: "John Doe" });
  }, 1000);
};

const getOrders = (userId, callback) => {
  setTimeout(() => {
    console.log("📦 Orders fetched");
    callback(["Order1", "Order2"]);
  }, 1000);
};

getUser(1, (user) => {
  getOrders(user.id, (orders) => {
    console.log("✅ User:", user);
    console.log("✅ Orders:", orders);
  });
});
```
😵 **Problem:** The code becomes deeply nested as more callbacks are added.

---

## **💡 Solutions for Callback Hell**
### **1️⃣ Using Promises 🏆**
Promises help handle asynchronous operations in a cleaner way by replacing callbacks with `.then()`.  

#### **✅ Example using Promises**
```javascript
const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("👤 User data fetched");
      resolve({ id, name: "John Doe" });
    }, 1000);
  });
};

const getOrders = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📦 Orders fetched");
      resolve(["Order1", "Order2"]);
    }, 1000);
  });
};

getUser(1)
  .then((user) => {
    console.log("✅ User:", user);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log("✅ Orders:", orders);
  });
```
🎯 **Benefits:** Code is **flatter and more readable** than nested callbacks.  

---

### **2️⃣ Using Async/Await ⚡**
`async/await` makes asynchronous code look **more like synchronous code**, improving readability.

#### **✅ Example using Async/Await**
```javascript
const getUserData = async () => {
  try {
    const user = await getUser(1);
    console.log("✅ User:", user);

    const orders = await getOrders(user.id);
    console.log("✅ Orders:", orders);
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

getUserData();
```
🚀 **Even more readable and avoids chaining multiple `.then()` calls!**  

---

### **3️⃣ Using Modular Functions 🛠️**
Breaking the code into **separate functions** improves maintainability.

#### **✅ Example of Modular Code**
```javascript
const fetchUserData = async () => {
  const user = await getUser(1);
  console.log("✅ User:", user);
  return user;
};

const fetchOrders = async (user) => {
  const orders = await getOrders(user.id);
  console.log("✅ Orders:", orders);
};

const main = async () => {
  try {
    const user = await fetchUserData();
    await fetchOrders(user);
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

main();
```
🔹 **Each function does one job, making the code reusable and easier to debug.**  

---

## **🎯 Conclusion**  
Callback hell makes code **hard to read, debug, and maintain**. To avoid it:  
✅ **Use Promises** instead of callbacks.  
✅ **Use Async/Await** for better readability.  
✅ **Modularize the code** to improve maintainability.  

Would you like a **real-world example in a NestJS project**? 🚀🔥
