```javascript
class SeoOptimization {
    constructor(metaData) {
        this.title = metaData.title;
        this.description = metaData.description;
        this.keywords = metaData.keywords;
    }

    render() {
        let head = document.getElementsByTagName('head')[0];

        let titleTag = document.createElement('title');
        titleTag.innerText = this.title;
        head.appendChild(titleTag);

        let metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = this.description;
        head.appendChild(metaDescription);

        let metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        metaKeywords.content = this.keywords.join(', ');
        head.appendChild(metaKeywords);
    }
}

export default SeoOptimization;
```