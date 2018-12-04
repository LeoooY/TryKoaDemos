function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  
  var hw = helloWorldGenerator();
 while(!hw.done){
     console.log(hw.value);
     hw.next();
 }