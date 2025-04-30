import ProjectTodoly from './Project-TODOLY.html?raw';
import ProjectCSVTool from './Project-CSVTOOL.html?raw';
import ProjectMovieStore from './Project-MOVIE.html?raw';
import ProjectMunamii from './Project-MUNAMII.html?raw';
import ProjectAssetTracker from './Project-ASSET.html?raw';
import ProjectSlotMachine from './Project-SLOTS.html?raw';
import ProjectThisSite from './Project-PORTFOLIO.html?raw';
const projects = [
    {
        name: 'ToDoLY',
        description: ProjectTodoly,
        imageURL: './src/assets/PNG/Todoly.png',
        gitURL: 'https://github.com/dc91/ToDoLy',
        demoURL: ''
    },
    {
        name: 'CSV TOOL',
        description: ProjectCSVTool,
        imageURL: './src/assets/PNG/CSVTOOL.png',
        gitURL: 'https://github.com/dc91/CSVchart',
        demoURL: ''
    },
    {
        name: 'Movie Store',
        description: ProjectMovieStore,
        imageURL: './src/assets/PNG/BrownSquad.png',
        gitURL: 'https://github.com/PMC/moviestore-lab',
        demoURL: ''
    },
    {
        name: 'Munamii',
        description: ProjectMunamii,
        imageURL: './src/assets/PNG/Munamii.png',
        gitURL: 'https://github.com/dc91/Munamii',
        demoURL: 'https://dc91.github.io/Munamii/'
    },
    {
        name: 'Asset Tracker',
        description: ProjectAssetTracker,
        imageURL: './src/assets/PNG/AssetTracker.png',
        gitURL: 'https://github.com/dc91/AssetTracketDB',
        demoURL: ''
    },
    {
        name: 'Slot Machine',
        description: ProjectSlotMachine,
        imageURL: './src/assets/PNG/Slots.png',
        gitURL: 'https://github.com/dc91/Slots',
        demoURL: 'https://dc91.github.io/Slots/'
    },
    {
        name: 'This site',
        description: ProjectThisSite,
        imageURL: './src/assets/SVG/HeaderBlack2.svg',
        gitURL: 'https://github.com/dc91/AstroFolio',
        demoURL: 'https://dc91.github.io/AstroFolio/'
    }
];

export default projects;