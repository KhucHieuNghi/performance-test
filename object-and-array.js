(() => {

  // 10m
  const number = 10000000;

  const oneMillion = new Array(number).fill(1).map((_, index) => index + 1);
  console.log('size Array', (new Blob([ oneMillion ])).size);

  const oneMillionObj= new Array(number).fill(1).map((_, index) => ({ [ index + 1 ]: 1 }));
  console.log('size Object', (new Blob([ oneMillionObj ])).size);

  // #region Loop
  let averageLoopArray = 0;
  for (let index = 0; index < 3; index++) {
    const start = performance.now();
    oneMillion.map(Boolean);
    averageLoopArray += performance.now() - start;
  }
  averageLoopArray = averageLoopArray / 3;

  let averageLoopObject = 0;

  for (let index = 0; index < 3; index++) {
    const start = performance.now();
    oneMillionObj.map(Boolean);
    averageLoopObject += performance.now() - start;
  }
  averageLoopObject = averageLoopObject / 3;
  
  console.log('Array', averageLoopArray);
  console.log('Object', averageLoopObject);
  // #endregion

  //#region Find
  const find = 900000;

  const start1 = performance.now();
  oneMillionObj[ find ];
  const duration1 = performance.now() - start1;
  console.log('Object', duration1);
  
  const start = performance.now();
  oneMillion[ find ];
  oneMillion.includes(find);
  const duration = performance.now() - start;
  console.log('Array', duration);

  //#endregion

  // #region Insert
  const ObjectInsert = {};
  const start1 = performance.now();
  
  for (let index = 0; index < oneMillion; index++) {
    ObjectInsert[ index ] = oneMillion[ index ];
  }

  const duration1 = performance.now() - start1;
  console.log('Object', duration1);
  
  const ArrayInsert = [];
  const start = performance.now();
  
  for (let index = 0; index < oneMillion; index++) {
    ArrayInsert[ index ] = oneMillion[ index ];
  }

  const duration = performance.now() - start;
  console.log('Array', duration);

  // #endregion

})();
