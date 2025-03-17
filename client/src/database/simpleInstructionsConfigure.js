import configureOfSimpleCalculator from "./simpleCalculatorConfigure";

const databaseOfInstructions = [
  "MS",
  "MR",
  "M+",
  "MC",
  "+",
  "-",
  "*",
  "/",
  ".",
  "=",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const specialOperator = ["sqrt", "%", "+-"];
const deleteOperator = ["CE", "AC"];
const memoryOperator = ["MS", "MR", "M+", "MC"];
const floatingPointOperator = ["."];
const equalOperator = ["="];
const basicOperator = ["+", "-", "*", "/"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const createInstructionObject = (buttonText, instructionText, type) => {
  return {
    buttonText,
    instructionText,
    type,
  };
};

const createInstructionArray = (arrayOfOperator) => {
  const arrayOfInstruction = arrayOfOperator.map((instructionName) => {
    for (const button of configureOfSimpleCalculator) {
      if (button.buttonText === instructionName) {
        return createInstructionObject(
          button.buttonText,
          button.instructionText,
          button.type
        );
      }
    }
  });

  return arrayOfInstruction;
};

const memoryInstructions = createInstructionArray(memoryOperator);
const deleteInstructions = createInstructionArray(deleteOperator);
const speciaInstructions = createInstructionArray(specialOperator);
const floatingPointInstruction = createInstructionArray(floatingPointOperator);
const equalInstruction = createInstructionArray(equalOperator);
const basicInstructions = createInstructionArray(basicOperator);
const numericInstructions = createInstructionArray(numeric);

export {
  memoryInstructions,
  deleteInstructions,
  speciaInstructions,
  floatingPointInstruction,
  equalInstruction,
  basicInstructions,
  numericInstructions,
};
