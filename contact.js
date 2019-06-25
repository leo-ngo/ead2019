
$(document).ready(() => {
    // get local storage to fill in fields automatically
    name = localStorage.getItem("name")
    subject = localStorage.getItem("subject")
    email = localStorage.getItem("email")
    message = localStorage.getItem("message")
    console.log(name)
    console.log(subject)
    if (name !== null) {
        $("#name").val(name)
    }
    if (subject !== null) {
        $("#subject").val(subject)
    }
    if (email !== null) {
        $("#email").val(email)
    }
    if (message !== null) {
        $("#message").val(message)
    }

})

// Validation.
const NAME_MAX_LENGTH = 50
const SUBJECT_MAX_LENGTH = 100
const MESSAGE_MAX_LENGTH = 1000
function doSubmit() {
    var name = $('#name').val()
    var subject = $('#subject').val()
    var message = $('#message').val()
    var email = $('#email').val()

    if(name==''){
        alert('Please enter a name')
        return false
    }     

    if (name.length > NAME_MAX_LENGTH) {
        alert('Name cannot be longer than 50 characters')
        return false
    }

    if(subject==''){
        alert('Please enter a subject')
        return false
    }     

    if (subject.length > SUBJECT_MAX_LENGTH) {
        alert('Subject cannot be longer than 50 characters')
        return false
    }

    if(message==''){
        alert('Please enter a message')
        return false
    }     

    if (message.length > MESSAGE_MAX_LENGTH) {
        alert('Message cannot be longer than 50 characters')
        return false
    }
    // save the values
    localStorage.setItem("name", name)
    localStorage.setItem("subject", subject)
    localStorage.setItem("email", email)
    localStorage.setItem("message", message)

    //send the form
    alert('Sent!')
}