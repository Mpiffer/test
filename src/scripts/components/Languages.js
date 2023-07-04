```javascript
class Languages {
    constructor(languages) {
        this.languages = languages;
    }

    render() {
        let html = '<div id="languages">';
        html += '<h2>Idiomas</h2>';
        html += '<ul>';
        this.languages.forEach(language => {
            html += `<li>${language}</li>`;
        });
        html += '</ul>';
        html += '</div>';
        return html;
    }
}

export default Languages;
```