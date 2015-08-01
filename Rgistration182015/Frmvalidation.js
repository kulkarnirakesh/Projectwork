function Validateform1()
{
    var fname = document.form1.fn;
    var lname = document.form1.ln;
    var email = document.form1.email;
    var moobno = document.form1.mno;
    var qualy = document.form1.qua;
    var clgnm = document.form1.colnm;
    var city = document.form1.city;
    var uname = document.form1.uname;
    var pass = document.form1.pass;
    var cpass = document.form1.cpass;

    if (fname.value == "")
    {
        window.alert("Please enter your first name.");
        fname.focus();
        return false;
    }
    
    if (lname.value == "")
    {
        window.alert("Please enter your last name.");
        lname.focus();
        return false;
    }
    
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (moobno.value == "")
    {
        window.alert("Please enter your mobile number.");
        moobno.focus();
        return false;
    }


    if (qualy.value == "")
    {
        window.alert("Please enter your qualification.");
        qualy.focus();
        return false;
    }
    return true;
    
    if (clgnm.value == "")
    {
        window.alert("Please enter your College name.");
        clgnm.focus();
        return false;
    }
    
    if (city.value == "")
    {
        window.alert("Please enter your city.");
        lname.focus();
        return false;
    }
    
    if (uname.value == "")
    {
        window.alert("Please enter your user name.");
        uname.focus();
        return false;
    }
    if (pass.value == "")
    {
        window.alert("Please enter your password.");
        pass.focus();
        return false;
    }
    if (cpass.value == "")
    {
        window.alert("Please re-enter password.");
        lname.focus();
        return false;
    }
       
}
function isalpha(valph,msg)
    {
        var alpha=/^[a-zA-z\s]+$/;
        if(valph.value.match(alpha))
            {
            return ture;
            }
        else
        {
            alert(msg);
            valph.focus();
            return false;
        }
    }
function isdigit(num,msg)
    {
        var digit=/^[0-9]+$/;
        if(num.value.match(digit))
            {
            return ture;
            }
        else
        {
            alert(msg);
            num.focus();
            return false;
        }
    }