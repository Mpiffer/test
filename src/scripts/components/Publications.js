```javascript
class Publications {
    constructor(publicationsData) {
        this.publicationsData = publicationsData;
    }

    render() {
        let publicationsHTML = '<section id="publications"><h2>Publicações</h2><ul>';

        this.publicationsData.forEach(publication => {
            publicationsHTML += `<li>
                <h3>${publication.title}</h3>
                <p>${publication.description}</p>
                <p><strong>Publicado em:</strong> ${publication.date}</p>
                <p><strong>Patente:</strong> ${publication.patent ? 'Sim' : 'Não'}</p>
            </li>`;
        });

        publicationsHTML += '</ul></section>';

        return publicationsHTML;
    }
}

export default Publications;
```