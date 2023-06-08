const Test = (()=>{

    const TestConfig = ()=>{
        console.log('Ultima funcionalidad test');
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