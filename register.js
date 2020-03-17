var userName=$('#userName');
var phone=$('#phone');
var password=$('#password');
var button=$('.button');
var checkbox=$('#checkbox');
var checkError=$('#checkError');
var isPhonetrue=false;
var isUserNametrue=false;
var isPasswordtrue=false;
var registerButton=$('#registerButton');
var isCodetrue=false;
// 用户名提示信息
userName.mouseover(function () {
    $('#userNameTip')[0].style.display="block";
});
userName.mouseout(function () {
    $('#userNameTip')[0].style.display="none";
});
// 密码提示信息
password.mouseover(function () {
    $('#passwordTip')[0].style.display="block";
});
password.mouseout(function () {
    $('#passwordTip')[0].style.display="none"
});
// 用户名合法性校验
function checkUserName(){
    if (userName.val()=='') {
        $('#userNameError2')[0].style.display="block";
        $('#userNameError')[0].style.display="none";
        $('#userNameError1')[0].style.display="none" ;
        isUserNametrue=false;
        return false;
    }
    //长度
    var rz=userName.val().replace(/[\u4e00-\u9fa5]/g,"1");
    var ra=/.{15,}/;
    if(ra.test(rz)){
        console.log(1);
        $('#userNameError1')[0].style.display="block";
        $('#userNameError')[0].style.display="none";
        $('#userNameError2')[0].style.display="none";
        isUserNametrue=false;
        return false;
    }else if(!ra.test(rz)){
        // 是否有非法字符
        var charReg = /[^\u4E00-\u9FA5\w]/;
        var res = charReg.test(userName.val());
        if (res) {
            $('#userNameError')[0].style.display="block";
            $('#userNameError1')[0].style.display="none";
            $('#userNameError2')[0].style.display="none";
            isUserNametrue=false;
            return false;
        }
        //是否为纯数字
        var numReg = /\D/;
        var res = numReg.test(userName.val());
        if (!res) {
            $('#userNameError')[0].style.display="block";
            $('#userNameError1')[0].style.display="none";
            $('#userNameError2')[0].style.display="none";
            isUserNametrue=false;
            return false;
        }else{
            $('#userNameError')[0].style.display="none";
            $('#userNameError1')[0].style.display="none";
            $('#userNameError2')[0].style.display="none";
            isUserNametrue=true;
            return true;
        }
    }
}

// 手机号数据合法性校验
function checkUserPhone() {
    var reg=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
    if(phone.val()==""){
        $('#phoneError1')[0].style.display="block";
        $('#phoneError')[0].style.display="none";
        isPhonetrue=false;
        return false;
    }
    else if(!reg.test(phone.val())){
        $('#phoneError1')[0].style.display="none";
        $('#phoneError')[0].style.display="block";
        isPhonetrue=false;
        return false;
    }else{
        $('#phoneError')[0].style.display="none";
        $('#phoneError1')[0].style.display="none";
        isPhonetrue=true;
        return true;
    }
}
// 密码数据合法性校验
function checkPassword() {  
    if (password.val()=='') {
        $('#passwordError')[0].style.display="block";
        isPasswordtrue=false;
        return false;
    }else{
        var reg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/;
        if(reg.test(password.val())){
            $('#passwordError')[0].style.display="none";
            isPasswordtrue=true;
            return true;
        }else{
            $('#passwordError')[0].style.display="block";
            isPasswordtrue=false;
            return false;
        }
    }
    
}
// 验证码效果
var timer;
var timer1;
button.click(function () {
        $('#checkError')[0].style.display="none";
        if(phone.val()==""){
            $('#phoneError1')[0].style.display="block";
            $('#phoneError')[0].style.display="none";
            console.log(isCodetrue);
        }else if(phone.val()!=""){
            $('#phoneError1')[0].style.display="none";
        }
        if(isPhonetrue){
            clearTimeout(timer1)
            var counts=60;
            button.attr('disabled',true);
            phone.attr('disabled',true);
            timer=setInterval(function(){
                console.log(counts);
                button.attr("value","重新获取"+"("+counts+")");
                counts--;
                if(counts==-1){
                    clearInterval(timer);
                    button.attr('disabled',false);
                    phone.attr('disabled',false);
                    button.attr("value","获取验证码");
                    if(checkbox.val()==""){
                        $('#checkError')[0].style.display="block";
                    }
                }
            }, 1000);
        }else if(isPhonetrue==false){
                timer1=setTimeout(function(){
                if(checkbox.val()==""){
                    $('#checkError')[0].style.display="block";
                    clearTimeout(timer1);
                }
            },60000)
            $('#checkError')[0].style.display="none";
        }              
});
// 验证
userName.focusout(function(){
    checkUserName();
});
phone.focusout(function(){
    checkUserPhone();
})
password.focusout(function(){
    checkPassword();
})
// 注册验证
registerButton.click(function () { 
   if(checkUserName()&&checkUserPhone()&&checkPassword()){
       if(checkbox.val()==""){
            window.alert("验证码不能为空！");
       }else{
            clearTimeout(timer);
            clearTimeout(timer1);
            button.attr("value","获取验证码");
            window.alert("验证通过！注册成功");
       }
   }
});