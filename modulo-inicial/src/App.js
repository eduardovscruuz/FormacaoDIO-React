import GlobalStyle from './global';
import Button from './components/button';
import Input from './components/input';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = number => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`);
  };

  const handleOnSum = () => {
    if (firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleOnMinus = () => {
    if (firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleOnDivision = () => {
    if (firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleOnMult = () => {
    if (firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('X');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleOnPercent = () => {
    if (firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const sum = (Number(firstNumber) / 100) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleResult = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleOnSum();
          break;
        case '-':
          handleOnMinus();
          break;
        case '/':
          handleOnDivision();
          break;
        case 'X':
          handleOnMult();
          break;
        case '%':
          handleOnPercent();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} type="operator" />
          <Button label="÷" onClick={handleOnDivision} type="operator" />
          <Button label="X" onClick={handleOnMult} type="operator" />
          <Button label="%" onClick={handleOnPercent} type="operator" />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} type="number" />
          <Button label="8" onClick={() => handleAddNumber('8')} type="number" />
          <Button label="9" onClick={() => handleAddNumber('9')} type="number" />
          <Button label="-" onClick={handleOnMinus} type="operator" />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} type="number" />
          <Button label="5" onClick={() => handleAddNumber('5')} type="number" />
          <Button label="6" onClick={() => handleAddNumber('6')} type="number" />
          <Button label="+" onClick={handleOnSum} type="operator" />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} type="number" />
          <Button label="2" onClick={() => handleAddNumber('2')} type="number" />
          <Button label="3" onClick={() => handleAddNumber('3')} type="number" />
          <Button label="=" onClick={handleResult} type="operator" />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} type="number" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
