
window.onload = function(){

if(localStorage.getItem("password")==null){
    document.querySelector("#set-btn").style.display='block';
    document.querySelector("#access-btn").style.display='none';
}else{
    document.querySelector("#set-btn").style.display='none';
    document.querySelector("#access-btn").style.display='block';

}


    var set_btn = document.querySelector("#set-btn");
   

    set_btn.onclick = function(){
        var user_input = document.querySelector("#user-input").value;
        if(user_input == ""){
            document.querySelector("#password-empty-notice").style.display='block';
        }
        else{
            document.querySelector("#password-empty-notice").style.display='none';
            localStorage.setItem("password", btoa(user_input));
            window.location =location.href;

        }
    }

    var access_btn =document.querySelector("#access-btn");
    access_btn.onclick = function(){
        var real_password = localStorage.getItem("password");
        var user_password =btoa(document.querySelector("#user-input").value);

        if(real_password == user_password){
            document.querySelector("#worng-password").style.display='none'
            document.querySelector("#container").style.display='none';
            document.querySelector("#app-page").style.display='block';
        }else{
            document.querySelector("#worng-password").style.display='block'
        }
    }

    var add_btn = document.querySelector("#add-btn");

    add_btn.onclick = function(){
        document.querySelector("#contact-form").style.display='block'
        document.querySelector("#save-btn").style.display='block'
        document.querySelector("#add-btn").style.display='none'
    }

    var save_btn = document.querySelector("#save-btn");
    save_btn.onclick = function(){
        var contact_name = document.querySelector("#contact-name").value;
        var contact_no = document.querySelector("#contact-number").value;
        if(localStorage.getItem("contact")== null){

            var object = [{
                name : contact_name,
                number : contact_no
            }]
            
            var data = JSON.stringify(object);
            
            localStorage.setItem("contact", data)
        }else{
           var stored_data = localStorage.getItem("contact");
           var data = JSON.parse(stored_data);

           var object = {
            name :contact_name,
            number : contact_no
           }
           data.push(object);
           var store =JSON.stringify(data);
            localStorage.setItem("contact",store);  
        }
        document.querySelector("#save-btn").style.display='none';
        document.querySelector("#add-btn").style.display='block';
        document.querySelector("#contact-form").style.display='none';

    }
    
    var all_contact = localStorage.getItem("contact");
    var data = JSON.parse(all_contact)
    var i;
    for(i=0;i<data.length;i++){
        var name =data[i].name;
        var number =data[i].number;
      
        var ion_item = document.createElement("ion-item");
        document.querySelector("#app-page").append(ion_item);
        var ion_button = document.createElement("ion-button");
        ion_button.slot = 'end';
        ion_button.color = 'success';
        ion_button.style.width = '30px';
        ion_button.style.height = '30px';
        ion_button.shape = 'round';
        ion_button.href = href="tel:123";
        ion_item.append(ion_button);
        
        var ion_icon = document.createElement("ion-icon");
        ion_icon.name = "call"

        ion_button.append(ion_icon)
        
        var ion_label = document.createElement("ion-label");

        ion_item.append(ion_label);

        var h3 = document.createElement("h3")
       h3.innerHTML = name;
        ion_label.append(h3);
       
        var p = document.createElement("p")
       p.innerHTML = number;
        ion_label.append(p);
    }

}













/* <ion-item>
<ion-button slot="end" color="success" style="width: 30px; height: 30px;" shape="round" href="tel : 7983587731">
<ion-icon name="call"></ion-icon>
</ion-button>
<ion-label>
  <h3>Mr ram</h3>
 <p>978643105</p>
</ion-label>
</ion-item> */