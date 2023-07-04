```javascript
class PageLoadSpeed {
    constructor() {
        this.loadTime = null;
    }

    measureLoadSpeed() {
        window.onload = () => {
            this.loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
        }
    }

    displayLoadSpeed() {
        const loadSpeedElement = document.getElementById('pageLoadSpeed');
        loadSpeedElement.innerHTML = `Page loaded in ${this.loadTime} ms`;
    }

    init() {
        this.measureLoadSpeed();
        this.displayLoadSpeed();
    }
}

export default new PageLoadSpeed();
```