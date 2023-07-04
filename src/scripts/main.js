import PersonalInfo from './components/PersonalInfo.js';
import Skills from './components/Skills.js';
import Languages from './components/Languages.js';
import Certifications from './components/Certifications.js';
import Awards from './components/Awards.js';
import Publications from './components/Publications.js';
import ProfessionalSummary from './components/ProfessionalSummary.js';
import WorkExperience from './components/WorkExperience.js';
import PersonalWebsiteLink from './components/PersonalWebsiteLink.js';
import QuatiTest from './components/QuatiTest.js';
import SeoOptimization from './components/SeoOptimization.js';
import PageLoadSpeed from './components/PageLoadSpeed.js';

document.addEventListener('DOMContentLoaded', () => {
  PersonalInfo.render();
  Skills.render();
  Languages.render();
  Certifications.render();
  Awards.render();
  Publications.render();
  ProfessionalSummary.render();
  WorkExperience.render();
  PersonalWebsiteLink.render();
  QuatiTest.render();
  SeoOptimization.render();
  PageLoadSpeed.render();
});