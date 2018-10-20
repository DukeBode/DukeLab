function initiate(){
    databox=document.getElementById('databox');
    var button=documetn.getElementById('save');
    button.addEventLinstener('click',addobject,false)  
    var request=indexedDB.open("mydatabase")
    request.addEventListener('error', showerror,false);
    request.addEventListener('success',start,false);
}

function showerror(e){
    alert('Error:'+e.code+' '+e.message);
}

