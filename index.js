const fs = require('fs');

class AysDB {
  constructor(dbFilePath) {
    this.dbFilePath = dbFilePath;
    this.data = this.loadDatabase();
  }

  loadDatabase() {
    try {
      const data = fs.readFileSync(this.dbFilePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return {};
    }
  }

  saveDatabase() {
    const jsonData = JSON.stringify(this.data, null, 2);
    fs.writeFileSync(this.dbFilePath, jsonData);
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.saveDatabase();
  }

  delete(key) {
    delete this.data[key];
    this.saveDatabase();
  }

  has(key) {
    return key in this.data;
  }

  push(key, value) {
    if (!Array.isArray(this.data[key])) {
      this.data[key] = [];
    }
    this.data[key].push(value);
    this.saveDatabase();
  }

  size() {
    return Object.keys(this.data).length;
  }

  type(key) {
    const value = this.data[key];
    if (Array.isArray(value)) {
      return 'array';
    } else if (typeof value === 'object') {
      return 'object';
    } else if (typeof value === 'string') {
      return 'string';
    } else if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'boolean') {
      return 'boolean';
    } else {
      return 'unknown';
    }
  }

   math(key, operator, operand) {
    const value = this.data[key];
    if (typeof value !== 'number') {
      throw new Error('The data is not numeric.');
    }

    let result;
    switch (operator) {
      case '+':
        result = value + operand;
        break;
      case '-':
        result = value - operand;
        break;
      case '*':
        result = value * operand;
        break;
      case '/':
        result = value / operand;
        break;
      default:
        throw new Error('Invalid operation operator.');
    }

    this.data[key] = result;
    this.saveDatabase();
    return result;
  }

  add(key, amount) {
    const value = this.data[key];
    if (typeof value !== 'number') {
      throw new Error('The data is not numeric.');
    }

    const result = value + amount;
    this.data[key] = result;
    this.saveDatabase();
    return result;
  }

}

module.exports = AysDB;