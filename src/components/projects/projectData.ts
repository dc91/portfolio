import ProjectRAG from './Project-RAG.html?raw';
import ProjectTodoly from './Project-TODOLY.html?raw';
import ProjectCSVTool from './Project-CSVTOOL.html?raw';
import ProjectMovieStore from './Project-MOVIE.html?raw';
import ProjectMunamii from './Project-MUNAMII.html?raw';
import ProjectAssetTracker from './Project-ASSET.html?raw';
import ProjectSlotMachine from './Project-SLOTS.html?raw';
import ProjectThisSite from './Project-PORTFOLIO.html?raw';

import RAGPNG from '../../assets/PNG/RAG.png';
import TodolyPNG from '../../assets/PNG/Todoly.png';
import CSVPNG from '../../assets/PNG/CSVTOOL.png';
import MoviePNG from '../../assets/PNG/BrownSquad.png';
import MunamiiPNG from '../../assets/PNG/Munamii.png';
import AssetPNG from '../../assets/PNG/AssetTracker.png';
import SlotsPNG from '../../assets/PNG/Slots.png';
import PortfolioSVG from '../../assets/SVG/HeaderBlack2.svg';
const projects = [
    {
        name: 'RAG',
        description: ProjectRAG,
        imageURL: RAGPNG,
        gitURL: 'https://github.com/dc91/RAG',
        demoURL: ''
    },
    {
        name: 'ToDoLY',
        description: ProjectTodoly,
        imageURL: TodolyPNG,
        gitURL: 'https://github.com/dc91/ToDoLy',
        demoURL: ''
    },
    {
        name: 'CSV TOOL',
        description: ProjectCSVTool,
        imageURL: CSVPNG,
        gitURL: 'https://github.com/dc91/CSVchart',
        demoURL: ''
    },
    {
        name: 'Movie Store',
        description: ProjectMovieStore,
        imageURL: MoviePNG,
        gitURL: 'https://github.com/PMC/moviestore-lab',
        demoURL: ''
    },
    {
        name: 'Munamii',
        description: ProjectMunamii,
        imageURL: MunamiiPNG,
        gitURL: 'https://github.com/dc91/Munamii',
        demoURL: 'https://dc91.github.io/Munamii/'
    },
    {
        name: 'Asset Tracker',
        description: ProjectAssetTracker,
        imageURL: AssetPNG,
        gitURL: 'https://github.com/dc91/AssetTracketDB',
        demoURL: ''
    },
    {
        name: 'Slot Machine',
        description: ProjectSlotMachine,
        imageURL: SlotsPNG,
        gitURL: 'https://github.com/dc91/Slots',
        demoURL: 'https://dc91.github.io/Slots/'
    },
    {
        name: 'This site',
        description: ProjectThisSite,
        imageURL: PortfolioSVG,
        gitURL: 'https://github.com/dc91/portfolio',
        demoURL: 'https://dilansportfolio.netlify.app/'
    }
];

export default projects;