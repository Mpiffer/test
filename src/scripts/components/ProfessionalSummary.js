```javascript
class ProfessionalSummary {
    constructor(summaryData) {
        this.summaryData = summaryData;
    }

    render() {
        let summarySection = document.createElement('section');
        summarySection.id = 'professionalSummary';

        let summaryTitle = document.createElement('h2');
        summaryTitle.textContent = 'Resumo Profissional';
        summarySection.appendChild(summaryTitle);

        let summaryContent = document.createElement('p');
        summaryContent.textContent = this.summaryData;
        summarySection.appendChild(summaryContent);

        return summarySection;
    }
}

export default ProfessionalSummary;
```