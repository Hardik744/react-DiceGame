import styled from "styled-components";

function RoleDice({ roleDice, currentDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  .dice:hover{
    scale: 1.02;
    transition: 0.1s ease-out;
  }

  p {
    font-size: 24px;
  }
`;
