var userName=$('#userName');
var phone=$('#phone');
var password=$('#password');
var userNamePass="false";
var button=$('.button');
var checkbox=$('#checkbox');
var checkError=$('#checkError');
var isPhonetrue=false;
var isUserNametrue=false;
var isPasswordtrue=false;
var register=$('#register');
var isCodetrue=false;
// 用户名提示信息
userName.click(function (e) {
    $('#userNameTip')[0].style.display="block"
    e.stopPropagation();
});
// 密码提示信息
password.mouseover(function (e) {
    $('#passwordTip')[0].style.display="block"
    e.stopPropagation();
});
password.mouseout(function (e) {
    $('#passwordTip')[0].style.display="none"
    e.stopPropagation();
});
$(document).click(function (e) {
    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    while (elem) {
        if ((elem.id && elem.id.indexOf("userNameTip") > -1)) {//查询父类
            return ;
        }
        elem = elem.parentNode;
    }
    $('#userNameTip')[0].style.display="none"
});
// 用户名合法性校验
userName.blur(function () {  
    if (userName.val()=='') {
        $('#userNameError2')[0].style.display="block";
        $('#userNameError')[0].style.display="none";
        $('#userNameError1')[0].style.display="none"  
        return ;
    }
    //判断用户名字符串的长度
    var rz=userName.val().replace(/[\u4e00-\u9fa5]/g,"1");
    var ra=/.{15,}/;
    if(ra.test(rz)){
        console.log(1);
        $('#userNameError1')[0].style.display="block";
        $('#userNameError')[0].style.display="none";
        $('#userNameError2')[0].style.display="none";
    }else if(!ra.test(rz)){
        // 判断是否有非法字符(除了中英文、数字、下划线以外的字符)
        var charReg = /[^\u4E00-\u9FA5\w]/;
        var res = charReg.test(userName.val());
        if (res) {
            $('#userNameError')[0].style.display="block";
            $('#userNameError1')[0].style.display="none";
            $('#userNameError2')[0].style.display="none"  
            return;
        }
        //判断是否为纯数字
        var numReg = /\D/;
        var res = numReg.test(userName.val());
        if (!res) {
            $('#userNameError')[0].style.display="block";
            $('#userNameError1')[0].style.display="none";
            $('#userNameError2')[0].style.display="none";
            return;
        }else{
            $('#userNameError')[0].style.display="none";
            $('#userNameError1')[0].style.display="none";
            $('#userNameError2')[0].style.display="none";
            isUserNametrue=true
        }
    }
});
// 手机号数据合法性校验
phone.blur(function () {
    var reg=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
    if(phone.val()==""){
        $('#phoneError')[0].style.display="none";
        $('#phoneError1')[0].style.display="block";
    }
    else if(!reg.test(phone.val())){
        $('#phoneError1')[0].style.display="none";
        $('#phoneError')[0].style.display="block";
    }else{
        $('#phoneError')[0].style.display="none";
        $('#phoneError1')[0].style.display="none";
        isPhonetrue=true
    }
});
// 密码数据合法性校验
password.blur(function () {  
    if (password.val()=='') {
        $('#passwordError')[0].style.display="block";
        return;
    }else{
        var reg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/;
        if(reg.test(password.val())){
            $('#passwordError')[0].style.display="none"
            isPasswordtrue=true;
        }else{
            $('#passwordError')[0].style.display="block"
        }
    }
    
});
// 验证码效果
var counts =30;
var num=0;
button.click(function Time () {
        if(phone.val()==""){
            $('#phoneError1')[0].style.display="block"
            $('#phoneError')[0].style.display="none"
        }else if(phone.val()!=""){
            $('#phoneError1')[0].style.display="none";
        }
        console.log(isPhonetrue);
            if(counts==0) {
                button.attr("value","获取验证码");
                num=0;
                if(num==0&&checkbox.val()==""){
                    $('#checkError')[0].style.display="block";
                }
                counts = 30;
                return false;
            }else{
                if(isPhonetrue){
                    button.attr("value","重新获取"+"("+counts+")");
                    num=counts;
                    counts--;
                    $('#checkError')[0].style.display="none";
                }else if(isPhonetrue==false){
                    button.attr("value","获取验证码");
                    num=counts;
                    counts--;
                    $('#checkError')[0].style.display="none";
                }
                
            }
                setTimeout(function() {
                    Time();
                }, 1000);
});
