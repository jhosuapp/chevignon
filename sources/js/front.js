//COMPONENTS
import { getChildsLoader } from "./modules/Loader";
import { getChildsRanking } from "./modules/Ranking";
import "../sass/main.scss";

window.addEventListener('load', ()=>{
    getChildsLoader();
    getChildsRanking();
});