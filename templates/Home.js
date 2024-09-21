function form_handler(event)
{
       event.preventDefault();
}
function send_data()
{
        document.querySelector('form').addEventListener("submit",form_handler);

        var fd=new FormData(document.querySelector('form'));

        var xhr= new XMLHttpRequest();

        xhr.open('POST','/predict',true);

        document.getElementById("prediction").innerHTML = "Wait Predicting Price...!";
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                document.getElementById('prediction').innerHTML="Estimated Price is : ₹ "+xhr.responseText;
            }
        };

        xhr.onload = function(){};
        xhr.send(fd);

}