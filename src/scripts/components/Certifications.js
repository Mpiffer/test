```javascript
class Certifications {
    constructor(certificationsData) {
        this.certificationsData = certificationsData;
    }

    render() {
        let certificationsHTML = '<section id="certifications"><h2>Certificações</h2><ul>';

        this.certificationsData.forEach(certification => {
            certificationsHTML += `<li>
                <h3>${certification.title}</h3>
                <p>${certification.institution}</p>
                <p>${certification.date}</p>
            </li>`;
        });

        certificationsHTML += '</ul></section>';

        return certificationsHTML;
    }
}

export default Certifications;
```