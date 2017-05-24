// JavaScript for form validation goes here!

//Hook up the form submit button to a validate function
$(document).ready(function(){
    $('input[type="submit"]').on("click", validate);
    
});

//Perform validation logic on form inputs
function validate(event)
{
    //Prevent the form from submitting
    event.preventDefault();
    
    //remove old error messages
    removeErrors();
    
    var isError = false;
    
    //Validate employee id to be 10 characters
    var id = $("#emp-id").val();
    if(id.length != 10) {
        report("emp-id-error", "employee id must be 10 characters long");
        isError = true;
    }
    
    
}

//Update form.php to display error message
function report(id, message)
{
    $("#" + id).html(message);
    $("#" + id).parent().show();
}

//Clears any previous errors
function removeErrors()
{
    $("#emp-id-error").parent().hide();
}