```javascript
class QuatiTest {
    constructor(testResult) {
        this.testResult = testResult;
    }

    render() {
        const quatiTestElement = document.getElementById('quatiTest');

        const resultElement = document.createElement('p');
        resultElement.textContent = `Resultado do Teste Quati: ${this.testResult}`;

        quatiTestElement.appendChild(resultElement);
    }
}

export default QuatiTest;
```