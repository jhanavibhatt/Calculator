let input = document.getElementById('input-num');
            let dlt = document.getElementById('clear');
          dlt.addEventListener('click',()=>{
           input.value = "";
    })
        function appendvalu(val) {
        input.value += val;
      }
      
      function ans() {
        input.value = eval(input.value);
      }
