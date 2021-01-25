$(document).ready(function() {

    var namePattern = new RegExp("^[A-Z]([a-z])+$");
    var emailPattern = /\S+@\S+\.\S+/;

    $("input:first").focus();
    $("#fnameCheck").hide();
    $("#lnameCheck").hide();
    $("#emailCheck").hide();
    $("#mobileCheck").hide();
    $("#spouceCheck").hide();
    $(".response").hide();


    var fnameErr = false;
    var lnameErr = false;
    var emailErr = false;
    var mobileErr = false;
    var spouceErr = false;
    var spouce;

    $("input[name*=status]").click(function() {
        var status = $("input[name*=status]:checked").val();
        if (status == "Married") {
            $("#spouce").show();
            $("input").prop('required', true);
            spouce = 1;
        } else {
            $("#spouce").hide();
            $("input").prop('required', false);
            spouce = 0;
        }
    });



    $("#form").submit(function(e){
        
        e.preventDefault();
        var firstName = $("input[name*=fname]").val();
        if(!namePattern.test(firstName)){
            $("#fnameCheck").show();
            $("input[name*=fname]").focus();
            $("#fnameCheck").html("*Please enter valid format");
            $("#fnameCheck").css("color", "red");
            fnameErr = true;
            return false;
        }
        else{
            $("#fnameCheck").hide();
        }

        var lastName = $("input[name*=lname]").val();

        if(!namePattern.test(lastName)){
            $("#lnameCheck").show();
            $("input[name*=lname]").focus();
            $("#lnameCheck").html("*Please enter valid format");
            $("#lnameCheck").css("color", "red");
            lnameErr = true;
            return false;
        }
        else{
            $("#lnameCheck").hide();
        }

        var emailVal = $("input[name*=email]").val();

        var test = emailPattern.test(emailVal);
        alert(test);
        if(!emailPattern.test(emailVal)){
            $("#emailCheck").show();
            $("input[name*=email]").focus();
            $("#emailCheck").html("*Please enter valid format");
            $("#emailCheck").css("color", "red");
            emailErr = true;
            return false;
        }
        else{
            $("#emailCheck").hide();
        }

        var mobileVal = $("input[name*=mobile]").val();
        if(mobileVal.length != 10){
            $("#mobileCheck").show();
            $("input[name*=mobile]").focus();
            $("#mobileCheck").html("*Please enter valid Mobile Number");
            $("#mobileCheck").css("color", "red");
            mobileErr = true;
            return false;
        }
        else{
            $("#mobileCheck").hide();
        }

        var spouceName = $("input[name*=spouce]").val();
        if(spouce == 1){
            if(!namePattern.test(spouceName)){
            $("#spouceCheck").show();
            $("input[name*=spouce]").focus();
            $("#spouceCheck").html("*Please enter valid format");
            $("#spouceCheck").css("color", "red");
            spouceErr = true;
            return false;
            }
            else{
                $("#spouceCheck").hide();
                }
        }

        $(".response").show();

    });
});