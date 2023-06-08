const Test = (()=>{

    const TestConfig = ()=>{
        console.log('función a');
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