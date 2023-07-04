```javascript
class WorkExperience {
    constructor(experienceData) {
        this.experienceData = experienceData;
    }

    render() {
        let html = '<section id="workExperience">';
        html += '<h2>Experiência Profissional</h2>';
        this.experienceData.forEach((experience) => {
            html += `<div class="experience">
                        <h3>${experience.company}</h3>
                        <h4>${experience.position}</h4>
                        <p>${experience.description}</p>
                    </div>`;
        });
        html += '</section>';
        return html;
    }
}

export default WorkExperience;
```