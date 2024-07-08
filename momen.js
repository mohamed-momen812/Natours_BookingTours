// const express = require('express');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const multer = require('multer');

// const app = express();
// app.use(express.json);

// mongoose.connect('mongoose URL').then(() => {
//   console.log('DB connected sucessful');
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// userSchema.methods.generateAuthToken = function() {
//   const token = jwt.sign({ id: this._id }, 'secretkey');
//   return token;
// };

// userSchema.pre('save', async function(next) {
//   this.password = await bcrypt.hash(this.password, 12);
//   this.passwordConfirm = undefined;

//   next();
// });

// const User = mongoose.model('User', userSchema);

// // Register
// app.post('/users/register', async (req, res) => {
//   const user = await User.create(req.body);
//   const token = user.generateAuthToken();
//   res.status(201).json({ user, token });
// });

// // Login
// app.post('/users/Login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       throw new Error('No user found');
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       throw new Error('Wrong password');
//     }
//     const token = user.generateAuthToken();
//     res.json({ user, token });
//   } catch (error) {
//     res.status(400);
//   }
// });

// const auth = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '');
//     const decoded = jwt.verify(token, 'secretkey');
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       throw new Error();
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Please authenticate.' });
//   }
// };

// app.post('/users', async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// app.get('users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404);
//     }
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.patch('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });
//     if (!user) {
//       return res.status(404);
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// app.delete('users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       res.status(404);
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// // paginatoin
// app.get('/users', async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;
//   const skip = (page - 1) * limit;
//   try {
//     const users = await User.find()
//       .skip(skip)
//       .limit(limit);

//     const total = await User.countDocuments();

//     res.json({
//       total,
//       page,
//       pages: Math.ceil(total / limit),
//       users
//     });
//   } catch (error) {}
// });

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Not an image Please upload only images', 400), false);
//   }
// };

// const memoryStorage = multer.memoryStorage();

// const upload = multer({
//   storage: memoryStorage,
//   fileFilter: multerFilter
// });

// app.post('/upload', upload.single('file'), (req, res) => {
//   res.json({ message: 'File uploaded successfully' });
// });
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // Add an element to the stack
//   push(element) {
//     this.items.push(element);
//   }

//   // Remove and retur the top element from the stack
//   pop() {
//     if (this.isEmpty()) return 'Stack is empty';
//     return this.items.pop();
//   }

//   //Return the top element without removing
//   peek() {
//     if (this.isEmpty()) return 'Stack is empty';
//     return this.items[this.items.length - 1];
//   }

//   // Check if the stack is empty
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Return the size of the stack
//   size() {
//     return this.items.length;
//   }

//   // Print the stack
//   printStack() {
//     return this.items.join(' ');
//   }
// }

// // Using built-in methods
// function reverseString(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// // Using a stack
// function reverseStringUsingStack(str) {
//   let stack = [];
//   for (let char of str) {
//     stack.push(char);
//   }
//   let reverseString;
//   while (stack.length) {
//     reverseString += stack.pop();
//   }
// }

// function isBalanced(expression) {
//   let stack = [];
//   let openBrackets = '({[';
//   let closeBrackets = ')}]';

//   for (let char of expression) {
//     if (openBrackets.includes(char)) {
//       stack.push(char);
//     } else if (closeBrackets.includes(char)) {
//       let lastOpen = stack.pop();
//       if (
//         !lastOpen ||
//         openBrackets.indexOf(lastOpen) !== closeBrackets.indexOf(char)
//       ) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }
// console.log(isBalanced('{[()]}')); // true
// console.log(isBalanced('{[(])}')); // false

// function findMax(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// function isEven(num) {
//   return num % 2 ? false : true;
// }

// function isPrimary(num) {

// }

// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(1));
// console.log(isEven(4));

// function getEvenNumbers(arr) {
//   return arr.filter(el => isEven(el));
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

// function isPrime(num) {
//   // Numbers less than or equal to 1 are not prime
//   if (num <= 1) {
//     return false;
//   }
//   // Loop from 2 to the square root of num
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     // If num is divisible by i, then num is not prime
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   // If no divisors were found, num is prime
//   return true;
// }

// console.log(isPrime(7)); // true

function getFactorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * getFactorial(num - 1);
}

console.log(getFactorial(4));
