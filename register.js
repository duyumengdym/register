var timer,timer1,userName=$("#userName"),phone=$("#phone"),password=$("#password"),button=$(".button"),checkbox=$("#checkbox"),checkError=$("#checkError"),isPhonetrue=!1,isUserNametrue=!1,isPasswordtrue=!1,registerButton=$("#registerButton"),isCodetrue=!1;function checkUserName(){if(""==userName.val())return $("#userNameError2")[0].style.display="block",$("#userNameError")[0].style.display="none",$("#userNameError1")[0].style.display="none",isUserNametrue=!1;var e=userName.val().replace(/[\u4e00-\u9fa5]/g,"1"),r=/.{15,}/;if(r.test(e))return console.log(1),$("#userNameError1")[0].style.display="block",$("#userNameError")[0].style.display="none",$("#userNameError2")[0].style.display="none",isUserNametrue=!1;if(!r.test(e)){if(s=/[^\u4E00-\u9FA5\w]/.test(userName.val()))return $("#userNameError")[0].style.display="block",$("#userNameError1")[0].style.display="none",$("#userNameError2")[0].style.display="none",isUserNametrue=!1;var s=/\D/.test(userName.val());return isUserNametrue=s?($("#userNameError")[0].style.display="none",$("#userNameError1")[0].style.display="none",$("#userNameError2")[0].style.display="none",!0):($("#userNameError")[0].style.display="block",$("#userNameError1")[0].style.display="none",!($("#userNameError2")[0].style.display="none"))}}function checkUserPhone(){return isPhonetrue=""==phone.val()?($("#phoneError1")[0].style.display="block",!($("#phoneError")[0].style.display="none")):/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/.test(phone.val())?($("#phoneError")[0].style.display="none",$("#phoneError1")[0].style.display="none",!0):($("#phoneError1")[0].style.display="none",!($("#phoneError")[0].style.display="block"))}function checkPassword(){if(""==password.val())return $("#passwordError")[0].style.display="block",isPasswordtrue=!1;return isPasswordtrue=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(password.val())?($("#passwordError")[0].style.display="none",!0):!($("#passwordError")[0].style.display="block")}userName.mouseover(function(){$("#userNameTip")[0].style.display="block"}),userName.mouseout(function(){$("#userNameTip")[0].style.display="none"}),password.mouseover(function(){$("#passwordTip")[0].style.display="block"}),password.mouseout(function(){$("#passwordTip")[0].style.display="none"}),button.click(function(){if($("#checkError")[0].style.display="none",""==phone.val()?($("#phoneError1")[0].style.display="block",$("#phoneError")[0].style.display="none",console.log(isCodetrue)):""!=phone.val()&&($("#phoneError1")[0].style.display="none"),isPhonetrue){clearTimeout(timer1);var e=60;button.attr("disabled",!0),phone.attr("disabled",!0),timer=setInterval(function(){console.log(e),button.attr("value","重新获取("+e+")"),-1==--e&&(clearInterval(timer),button.attr("disabled",!1),phone.attr("disabled",!1),button.attr("value","获取验证码"),""==checkbox.val()&&($("#checkError")[0].style.display="block"))},1e3)}else 0==isPhonetrue&&(timer1=setTimeout(function(){""==checkbox.val()&&($("#checkError")[0].style.display="block",clearTimeout(timer1))},6e4),$("#checkError")[0].style.display="none")}),userName.focusout(function(){checkUserName()}),phone.focusout(function(){checkUserPhone()}),password.focusout(function(){checkPassword()}),registerButton.click(function(){checkUserName()&&checkUserPhone()&&checkPassword()&&(""==checkbox.val()?window.alert("验证码不能为空！"):(clearTimeout(timer),clearTimeout(timer1),button.attr("value","获取验证码"),$("#checkError")[0].style.display="none",window.alert("验证通过！注册成功")))});