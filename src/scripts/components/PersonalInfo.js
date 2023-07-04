```javascript
class PersonalInfo {
    constructor(name, contact, email) {
        this.name = name;
        this.contact = contact;
        this.email = email;
    }

    render() {
        let personalInfoSection = document.getElementById('personalInfo');

        let nameElement = document.createElement('h1');
        nameElement.textContent = this.name;
        personalInfoSection.appendChild(nameElement);

        let contactElement = document.createElement('p');
        contactElement.textContent = this.contact;
        personalInfoSection.appendChild(contactElement);

        let emailElement = document.createElement('p');
        emailElement.textContent = this.email;
        personalInfoSection.appendChild(emailElement);
    }
}

export default PersonalInfo;
```