```javascript
class Skills {
    constructor(skillsData) {
        this.skillsData = skillsData;
    }

    render() {
        let skillsHTML = '<section id="skills" class="section">';
        skillsHTML += '<h2>Skills</h2>';
        skillsHTML += '<ul class="skills-list">';

        this.skillsData.forEach(skill => {
            skillsHTML += `<li class="skill-item">${skill}</li>`;
        });

        skillsHTML += '</ul>';
        skillsHTML += '</section>';

        return skillsHTML;
    }
}

export default Skills;
```