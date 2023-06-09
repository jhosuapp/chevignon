const Loader = (()=>{

    const LoaderConfig = ()=>{
        const getLoader = document.querySelector('.loader');
        setTimeout(()=>{
            getLoader.classList.add('active');
        },1000);
    }

    const AnimatePage = ()=>{
        const getMainContent = document.querySelector('.main-content')
        setTimeout(()=>{
            getMainContent.classList.add('enable-animation');
        },2500);
    }


    return {
        childsLoader : function(){
            try { LoaderConfig(); } catch (error) { }
            try { AnimatePage(); } catch (error) { }
        }
    }

})();


const getChildsLoader = ()=>{
    Loader.childsLoader();
}

export { getChildsLoader }