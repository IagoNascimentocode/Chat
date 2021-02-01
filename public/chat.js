const socket = io('http://localhost:3000')
let user = null

socket.on('update_message', (messages)=>{

    updateMessagesOnScrem(messages)
})

function updateMessagesOnScrem(messages){
    const div_messages = document.querySelector('#messages')

    let list_messages = "<ul>"
    
    messages.forEach( message =>{
        list_messages += `<li>${message.user}: ${message.msg}</li>`
    })
    list_messages += '</ul>'
    
    div_messages.innerHTML= list_messages
}
    
    document.addEventListener('DOMContentLoaded',()=>{

        const form = document.querySelector('#message_form')

        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            
            if(!user){
                alert('Defina um Usiario')
                return
            }

            const message = document.forms['message_form_name']['msg'].value
            document.forms['message_form_name']['msg'].value = ''
            socket.emit('new_message', { user:user , msg:message }) 
        })

        const userForm = document.querySelector('#user_form')

            userForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            
            user = document.forms['user_form_name']['user'].value
            document.forms['user_form_name']['user'].value = ''
            userForm.parentNode.removeChild(userForm)
        })
    })