# Calculator Application

![NPM Version](https://img.shields.io/npm/v/react?color=green)
![Static Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=61DAFB&labelColor=black)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/KhoaDinhNguyen/Calculator)
![GitHub last commit](https://img.shields.io/github/last-commit/KhoaDinhNguyen/Calculator?color=orange)

This application implements a calculator so users can perform simple operations such as addition, subtraction, multiplication, division, etc.

Live server: https://calculator-yguo.onrender.com

## Table of Contents

- [Installation and running](#installation-and-running)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation and running

Step-by-step instructions to install the application in local

```
git clone https://github.com/KhoaDinhNguyen/Calculator.git
cd Calculator
npm install
```

To run the application

```
npm run start
```

## Documentation

### Data Configuration

Each button will have **four properties**:

- `buttonText`: The text representing its button will be displayed on the website
- `onClickHandler`: The function that executes when its button is clicked
- `instructionText`: The instructions/meaning/functionalities of the button, which will also be displayed on the website
- `type`: The type of button only represents the style of the button

This configuration is stored in the file [simpleCalculatorConfigure.js](client/src/database/simpleCalculatorConfigure.js)

### State Management

All of the states are managed in [SimpleCalculator.js](client/src/pages/SimpleCalculator.js), supporting the display and process of the calculator

- `currentValue`: The main value displayed on the screen
- `previousValue`: The value that is previously stored before the currentValue
- `memoryValue`: The value that is stored in memory, which can be seen in the bottom left of the screen
- `nextScreenValue`: A boolean value determines whether the next value is the new value or the just continued value
- `currentOperation`: The current operators (one of +, -, \*, /), which is displayed on the top left of the screen, are used when the button "=" is clicked
- `previousOperation`: The previous operators (one of +, -, \*, /), used when one of +, -, \*, / is clicked, creating a chain of equations.
- `previousButton`: The equation is evaluated only if the previousButton is not of the four operators, for example, preventing users from clicking "+" twice.

### Functionalities

> [!NOTE]
> The displayed values on the screen are string datatypes. Therefore, all of the functions are given string input and output string values.

The two main functions are

- `doOperation(operand1, operand2, operator)` evaluates the equations
- `formatStringNumber(input)` generates a string that represents a valid number. For example, `1.3.4` is not a valid number.

Other functions do exactly as their name, for instance, `removeRightmostDigit(input)` removes the rightmost digit of the input, `squareRoot(input)` does square root on the current value, `toggleNumber(input)` changes the sign of the current value.

## Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greately appreciated**.

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

## Contact

Feel free to reach out to me with questions, comments, or concerns in one of the ways below.

- Git Hub: https://github.com/KhoaDinhNguyen
- Email: khoacode1305@gmail.com
- Linkedln: https://www.linkedin.com/in/khoanguyenb203702b5/

[Back to the top](#calculator-application)
