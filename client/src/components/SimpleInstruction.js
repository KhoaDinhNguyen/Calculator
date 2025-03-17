import Instruction from "./Instruction";
import {
  memoryInstructions,
  deleteInstructions,
  speciaInstructions,
  floatingPointInstruction,
  equalInstruction,
  basicInstructions,
  numericInstructions,
} from "../database/simpleInstructionsConfigure";

import styles from "../styles/SimpleInstruction.module.css";

function SimpleInstruction() {
  return (
    <div id={styles.simpleInstructionView}>
      <TypeOfInstruction
        name={"Memory"}
        arrayOfInstruction={memoryInstructions}
      />
      <TypeOfInstruction
        name={"Delete Operators"}
        arrayOfInstruction={deleteInstructions}
      />
      <TypeOfInstruction
        name={"Special Operators"}
        arrayOfInstruction={speciaInstructions}
      />
      <TypeOfInstruction
        name={"Floating-Point"}
        arrayOfInstruction={floatingPointInstruction}
      />
      <TypeOfInstruction name={"Equal"} arrayOfInstruction={equalInstruction} />
      <TypeOfInstruction
        name={"Basic Operators"}
        arrayOfInstruction={basicInstructions}
      />
      <NumericInstruction />
    </div>
  );
}

function TypeOfInstruction({ name, arrayOfInstruction }) {
  const instructionContainers = arrayOfInstruction.map((instructionObject) => {
    return (
      <li key={`${instructionObject.buttonText}_instruction`}>
        <Instruction
          instruction={instructionObject.instructionText}
          buttonText={instructionObject.buttonText}
          type={instructionObject.type}
        />
      </li>
    );
  });
  return (
    <div>
      <p className={styles.instructionTitle}>{name}</p>
      <ul className={styles.instructionList}>{instructionContainers}</ul>
    </div>
  );
}

function NumericInstruction() {
  const instructionContainers = numericInstructions.map((instructionObject) => {
    return (
      <li key={`${instructionObject.buttonText}_instruction`}>
        <Instruction
          instruction={instructionObject.instructionText}
          buttonText={instructionObject.buttonText}
          type={instructionObject.type}
        />
      </li>
    );
  });
  return (
    <div id={styles.numericInstruction}>
      <p className={styles.instructionTitle}>Numeric value</p>
      <ul className={styles.instructionList}>{instructionContainers}</ul>
    </div>
  );
}
export default SimpleInstruction;
