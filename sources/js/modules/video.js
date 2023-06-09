const Video = (()=>{

    // const VideoConfig = ()=>{
    //     const getVideo = document.querySelector('.video-ctn video');
    //     getVideo.style.height = `${screen.height}px`;
    //     window.addEventListener('resize', ()=>{
    //         getVideo.style.height = `${screen.height}px`;
    //     });
    // }


    return {
        childsVideo : function(){
            try { VideoConfig(); } catch (error) { }
        }
    }

})();


const getChildsVideo = ()=>{
    Video.childsVideo();
}

export { getChildsVideo }