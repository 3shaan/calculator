const allBtn= document.getElementsByClassName('btn');

for ( const btn of allBtn){
    btn.addEventListener('click', (event)=>{
        console.log(event.target.innerText)
        const value = event.target.innerText;
        const operation = document.getElementById('operation');
        let operationValue = operation.value;
        const total = document.getElementById('total');
        let totalValue = parseFloat(total.value) ;
       
       


        if(value === 'AC'){
            operation.value ='';
            total.value = '';
        }
        else if (value === 'DEL'){
            const array = operationValue.split('')
            array.pop();
            const string = array.join('');
            operation.value = string;
        }
        else if(value === '='){
           const equal = eval(operationValue);
           total.value = equal;
           console.log(equal);
        }
        else{
        const newValue = operationValue +value;
        operation.value = newValue;
        }

    })
}

