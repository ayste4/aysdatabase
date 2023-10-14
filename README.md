# AysDatabase Module

## Overview

AysDatabase is a simple JSON-based database module for Node.js. It allows you to store and manage data in JSON format within a file. This module is suitable for small-scale projects and prototypes where you need a lightweight database system.

## Installation

You can install AysDatabase via npm:

```shell
npm install aysdatabase
```

## Usage

**Creating a Database Instance**
To use AysDatabase, you need to create an instance of the database. You can do this by requiring the module and instantiating the `AysDatabase` class.

```js
const AysDatabase = require('aysdatabase');
const db = new AysDatabase('database.json');
```

**Storing Data**
You can store data in the database using the `set` method. It takes a key and a value and saves the data in the database file.

```js
db.set('user', { name: 'Tony Stark', age: 3000 });
```

**Retrieving Data**
To retrieve data, you can use the `get` method with the key.

```js
const userData = db.get('user');
console.log(userData); // { name: 'Tony Stark', age: 3000 }
```

**Deleting Data**
You can delete data using the `delete` method.

```js
db.delete('user');
```

**Checking for Existence**
You can check if a key exists in the database using the `has` method.

```js
if (db.has('user')) {
  console.log('User data exists.');
} else {
  console.log('User data does not exist.');
}
```

**Additional Features**
AysDatabase provides additional features like `push` to add data to arrays, `size` to get the number of key-value pairs, `type` to check the data type, `math` to perform mathematical operations, and `add` to increment numeric values.

## Example

Here's a simple example of using AysDatabase:

```js
const AysDatabase = require('aysdatabase');
const db = new AysDatabase('database.json');

// Store data
db.set('user', { name: 'Alice', age: 25 });

// Retrieve data
const userData = db.get('user');
console.log(userData);

// Check if data exists
if (db.has('user')) {
  console.log('User data exists.');
} else {
  console.log('User data does not exist.');
}
```

## Conclusion

**AysDatabase is a straightforward database module for managing JSON data in your Node.js applications. It provides basic CRUD operations for data storage and retrieval and additional features for more advanced use cases.**
