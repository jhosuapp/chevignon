const Test = (()=>{

    const TestConfig = ()=>{
        console.log('función ejecutadaa');
    }


    return {
        childsTest : function(){
            try { TestConfig(); } catch (error) { }
        }
    }

})();


const getChildsTest = ()=>{
    Test.childsTest();
}

export { getChildsTest }