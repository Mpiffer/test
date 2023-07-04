```javascript
class Awards {
    constructor(awardsData) {
        this.awardsData = awardsData;
    }

    render() {
        let awardsHTML = '<section id="awards"><h2>Honras e Prêmios</h2><ul>';

        this.awardsData.forEach(award => {
            awardsHTML += `<li>
                <h3>${award.title}</h3>
                <p>${award.description}</p>
                <p>${award.date}</p>
            </li>`;
        });

        awardsHTML += '</ul></section>';

        return awardsHTML;
    }
}

export default Awards;
```