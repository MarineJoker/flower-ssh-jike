//光标聚焦到pwd1的元素上
function focuspwd() {
	this.form1.pwd1.focus();
}

//客户端验证新旧密码的js文件
function modpwd() {
	if (this.form1.pwd1.value == "") {
		window.alert("请输入旧密码");
		form1.pwd1.focus();
		return false;

	}

	if (this.form1.pwd2.value == "") {
		window.alert("输入你的新密码");
		form1.pwd2.focus();
		return false;

	}
	if (this.form1.password.value == "") {
		window.alert(" 请再次输入你的新密码");
		form1.password.focus();
		return false;

	}
	if (this.form1.pwd2.value != this.form1.password.value) {
		window.alert("两次密码不一致");
		form1.pwd2.focus();
		return false;

	}
}