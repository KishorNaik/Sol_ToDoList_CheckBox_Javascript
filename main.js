/// <reference path='./jquery-3.4.1.js' />

function clearText(isFocus=false){
    
    $("#txtTodoList").val('');

    if(isFocus==true)
    {
        $("#txtTodoList").focus();
    }
    

}

$(document).ready(function(){

    console.log("Writeline");

    // Add List Items
    $("#btnAdd").on("click",function(){

        // Method 1 : Proper Coding
        // get items from input box
        // let _todoItemsName=$("#txtTodoList").val();
        //     console.log(_todoItemsName);

        // // create a span Element
        // let _spanTodoList=$("<span>");

        // // create Checkbox element
        // let _inputCheckBox=$("<input type='checkbox'>");

        // // create H4 element with data
        // let _h4withData=$("<span>").html(_todoItemsName);

        // // append Checkbox and Checkbox element into span tag
        // _spanTodoList
        //     .append(_inputCheckBox,_h4withData,$("<br/>"));

        // // append span element into div container tag
        // $("#container")
        //     .append(_spanTodoList);

        // //Clear Text
        // clearText(true);

        // Jquery Template
        // get items from input box
            let _todoItemsName=$("#txtTodoList").val();
            console.log(_todoItemsName);
            let _jqueryTemplate=
            `
                <span>
                    <input type='checkbox'>
                    <span>${_todoItemsName}</span>
                    <br/>
                </span>
            `;
        // append span element into div container tag
            $("#container")
            .append(_jqueryTemplate);


    });

    $("#txtTodoList").on("focus",function(){
        console.log('Focus Event');
        clearText();

    });

    $("#container").on("click",'span input:checkbox',function(){

        console.log("Checkbox Click");

        // find parent of input checkbox
        let _parentSpan=$(this).parent();
            console.log(_parentSpan);

        // find child span based on parent span
        let _childSpan=_parentSpan.find("span");
            console.log(_childSpan);

        if(this.checked){
            _childSpan
                .addClass("taskCompleted");
        }
        else
        {
            _childSpan
                .removeClass("taskCompleted");
        }

    });

});