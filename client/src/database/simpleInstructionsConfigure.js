import configureOfSimpleCalculator from "./simpleCalculatorConfigure";

const specialOperator = ["sqrt", "%", "+-"];
const deleteOperator = ["CE", "AC"];
const memoryOperator = ["MS", "MR", "M+", "MC"];
const floatingPointOperator = ["."];
const equalOperator = ["="];
const basicOperator = ["+", "-", "\u00d7", "\u00f7"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const createInstructionArray = (arrayOfOperator) => {
  const arrayOfInstruction = arrayOfOperator.map((instructionName) => {
    for (const button of configureOfSimpleCalculator) {
      if (button.buttonText === instructionName) {
        return button;
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
