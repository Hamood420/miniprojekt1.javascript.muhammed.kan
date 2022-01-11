for(let i=1; i<6; i++){
    const h1 = document.createElement('h1');
  
    const hue = 1 + (i*20);
    h1.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  
    document.body.append(h1);


    h1.style.fontSize = `${i*10}px`; 
    h1.innerText = `Rad ${i}`;
    h1.style.textAlign = 'center';

    

  }

console.log('-------First for-loop-------');
const ul = document.createElement('ol');
document.body.append(ul);
for(let i=0; i<10; i++){
    const li = document.createElement('li');
    ul.append(li);
    li.innerText = i;
    li.style.listStyle = 'none';
    // if(i===4){
    //     h1.style.backgroundColor = 'hotpink';
    // }
    // else if(i%2 ===1){
    //     h1.style.backgroundColor = 'black';
    //     h1.style.color = 'white';
    // }
}

  console.log('-------Second for-loop-------');
  const ul2 = document.createElement('ol');
  document.body.append(ul2);

  for(let i=9; i>=0; i--){
      const li = document.createElement('li');
      ul2.append(li);
      li.innerText = i;
      li.style.listStyle = 'none';
    //   if(i==0){
    //       h1.style.backgroundColor = "hotpink";
    //   }
    //   else if(i%2 ===1){
    //       h1.style.backgroundColor = 'black';
    //       h1.style.color = 'white';
    //   }

      
  }

  console.log('-----------Third for-loop----------');
  const ul3 = document.createElement('ol');
  document.body.append(ul3);
  
  const digits = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
  
  for(let i=0; i<digits.length; i++){
      const li = document.createElement('li');
      ul3.append(li);
      li.innerText = digits[i];
      li.style.listStyle = 'none';
      
    //   if(i===5){
    //       h1.style.backgroundColor = 'hotpink';
    //   }
    //   else if(i%2 ===0){
    //       h1.style.backgroundColor = 'black'
    //       h1.style.color = 'white';
    //   }
  }




 
  
  
