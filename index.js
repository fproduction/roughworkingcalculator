



function AddText(text) {
    let my_input = document.getElementById('cbox')
    let previous_value = my_input.value
    if(text!='C'){
         
        my_input.value = previous_value + text
    }else
    {
        my_input.value="  "
    }
}



function showResult() {

    let my_result_span = document.getElementById('cbox')

    let input_field = document.getElementById('cbox')

    my_result_span.value = eval(input_field.value)
}
