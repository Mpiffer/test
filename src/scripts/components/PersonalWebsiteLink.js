```javascript
class PersonalWebsiteLink {
    constructor(link) {
        this.link = link;
    }

    render() {
        const personalWebsiteLinkElement = document.getElementById('personalWebsiteLink');
        personalWebsiteLinkElement.innerHTML = `
            <a href="${this.link}" target="_blank">Personal Website</a>
        `;
    }
}

export default PersonalWebsiteLink;
```