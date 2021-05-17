import Highway from '@dogstudio/highway';
import Fade from './transition';
import './main.css';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
})