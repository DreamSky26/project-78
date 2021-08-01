var members=["family book cover.png", "mom.png", "dad.png", "grandma.png", "grandpa.png", "lil sister.png", "me.png"];
    var names=["My Family Book", "Trupti Bafna - Mom", "Rahul Bafna - Dad", "Jyoti Bhatewara - Grandma", "Sunil Bhatewara - Grandpa", "Reesha Bafna - Little Sister", "Reet Bafna - Me!"];
    var count=0;
    function nextslide(){
    document.getElementById("members").src = members[count];
    document.getElementById("names").innerHTML = names[count];
    count++;
    if(count == 7){
    count=0;
    }
    }