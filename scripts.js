// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click",function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }  
 });
    let land = document.getElementById("landing");
    land.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click",function(){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }  
    });
    let up = document.getElementById("up");
    up.addEventListener("click",function(){
        // Add 10,000mi to space shuttle height
        let height = document.getElementById("spaceShuttleHeight").innerHTML;
        height = Number(height);
        height += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
        // Move space shuttle image
        let rocketHeight = document.getElementById("rocket").style.bottom;
        if (rocketHeight) {
            rocketHeight = parseInt(rocketHeight);
            rocketHeight += 10;
            rocketHeight += "px";
            document.getElementById("rocket").style.bottom = rocketHeight;
        } else {
            rocketHeight = "10px";
            document.getElementById("rocket").style.bottom = rocketHeight;
        }
    });

    let down = document.getElementById("down");
    down.addEventListener("click",function(){
        let height = document.getElementById("spaceShuttleHeight").innerHTML;
        height = Number(height);
        height -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
                // Move space shuttle image
                let rocketHeight = document.getElementById("rocket").style.bottom;
                if (rocketHeight) {
                    rocketHeight = parseInt(rocketHeight);
                    rocketHeight -= 10;
                    rocketHeight += "px";
                    document.getElementById("rocket").style.bottom = rocketHeight;
                } else {
                    rocketHeight = "0px";
                    document.getElementById("rocket").style.bottom = rocketHeight;
                }
    });

    let left = document.getElementById("left");
    left.addEventListener("click",function(){
        let rocketHeight = document.getElementById("rocket").style.left;
        if (rocketHeight) {
            rocketHeight = parseInt(rocketHeight);
            rocketHeight -= 10;
            rocketHeight += "px";
            document.getElementById("rocket").style.left = rocketHeight;
        } else {
            rocketHeight = "350px";
            document.getElementById("rocket").style.left = rocketHeight;
        }
    });

    let right = document.getElementById("right");
    right.addEventListener("click",function(){
        let rocketHeight = document.getElementById("rocket").style.left;
        if (rocketHeight) {
            rocketHeight = parseInt(rocketHeight);
            rocketHeight += 10;
            rocketHeight += "px";
            document.getElementById("rocket").style.left = rocketHeight;
        } else {
            rocketHeight = "370px";
            document.getElementById("rocket").style.left = rocketHeight;
        }
    });
})

