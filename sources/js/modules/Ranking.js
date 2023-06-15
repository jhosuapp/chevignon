const Ranking = (()=>{

    const RankingConfig = ()=>{
        const reUseCalcHeihgt = ()=>{
            const getScreenHeight = screen.height;
            const getAllCtn = document.querySelectorAll('.ranking-dsc__ctn');
            const result = getScreenHeight - getAllCtn[0].scrollHeight;
            getAllCtn[1].style.maxHeight = `${result}px`;
        }
        reUseCalcHeihgt();
        window.addEventListener('resize', ()=>{
            reUseCalcHeihgt();
        });
    }


    return {
        childsRanking : function(){
            try { RankingConfig(); } catch (error) { }
        }
    }

})();


const getChildsRanking = ()=>{
    Ranking.childsRanking();
}

export { getChildsRanking }