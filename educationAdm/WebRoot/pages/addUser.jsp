<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0037)http://2school.wygk.cn/admin/left.htm -->
<HTML><HEAD><TITLE>好习网后台系统</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<LINK href="syscome.files/Admin.css" type=text/css rel=stylesheet>
<SCRIPT language=javascript src="syscome.files/Admin.js"></SCRIPT>

<script language="javascript">
	function check() {

	if(document.addUser.placeCode.value == "")
	{
		alert("省份代码不能为空！");	   
	}
	else if(document.addUser.amount.value == ""){
		alert("产生数量不能为空！");
	}else{
		var placeCode = document.addUser.placeCode.value;
  var amount = document.addUser.amount.value;
	var adminId = document.addUser.adminID.value;
	//	document.addUser.submit();
	//	location.href="generateUser?placeCode="+placeCode+
		//"&amount="+amount+"&admId="+adminId;	
	//	document.addUser.action="generateUser?placeCode="+placeCode+
	//	"&amount="+amount+"&admId="+adminId;
	//	document.addUser.submit();
	//	var o = document.getElementById('txtViewPerson');
		window.location.href = '<%=request.getContextPath()%>/generateUser?placeCode='
		+placeCode+'&amount='+amount+'&admId='+<%=request.getAttribute("admId")%>;	
		alert("批量产生用户成功！");
		}
	}
</script>


<STYLE type=text/css>
.STYLE1 {
	FONT-WEIGHT: bold;
	COLOR: #0099ff
}
</STYLE>


<META content="MSHTML 6.00.2900.5726" name=GENERATOR>


</HEAD>
<BODY>
	<BR>
	<TABLE class=tableborder cellSpacing=1 cellPadding=3 width="95%"
		align=center border=0>
		<TBODY>
			<TR>
				<TH height=24><font color="red">【新用户批量生成参数】</font>
				</TD>
			</TR>
			<TR>
				<TD class=forumrow><font color="red">好习网新用户批量生成，请正确填写相关参数</font>
				</TD>
			</TR>

		</TBODY>
	</TABLE>
	<BR>
	<TABLE cellSpacing=1 cellPadding=3 width="95%" align=center
		bgColor=#6ab6b6 border=0>
		<form  target = "_self" id="addUser" name="addUser" method="post" >
			<TBODY>
				<TR>
					<TH colSpan=2 height=24>【请在下面输入】
					<td></TD>
				</TR>
				<TR>
					<TD class=forumrow width="30%" height=24>省份代码（如山东，则填写sd）：</TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="text" name="placeCode"></TD>
				</TR>
				<TR>
					<TD class=forumrow width="30%" height=24>生成数量：</TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="text" name="amount"></TD>
				</TR>
				<TR>
				<TR>
					<TD class=forumrow width="30%" height=24>管理员ID：</TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="text" name="adminID" value="<%=request.getAttribute("admId")%>" disabled="true"　readOnly="true"></TD>
				</TR>
				<TR>
				<TR>
					<TD class=forumrow width="30%" height=24></TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="submit" name="submit" value="批量生成" onclick="check()">&nbsp&nbsp <input
						type="reset" name="reset" value="重置"></TD>
				</TR>
			</TBODY>
		</form>

	</TABLE>
	<BR>
	<TABLE class=tableborder cellSpacing=1 cellPadding=3 width="95%"
		align=center border=0>
		<TBODY>
			<TR>
				<TH colSpan=2 height=22></TH>
			</TR>
			<TR>
				<TD class=forumrow width="50%"><SPAN class=STYLE1>好习网后台管理员系统
						V2014.10.15 </SPAN>
				</TD>
				<TD class=forumrowhighlight width="50%"><FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT> <FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT>
				</TD>
			</TR>
			<TR>
				<TD class=forumrow width="50%"></TD>
				<TD class=forumrowhighlight width="50%"><FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT> <FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT>
				</TD>
			</TR>
		</TBODY>
	</TABLE>
	<BR>
	<TABLE cellSpacing=0 cellPadding=0 width="95%" align=center border=0>
		<TBODY>
			<TR>
				<TD align=middle>Copyright HaoXi (c) 2014 <A title=href=
					"http://www.haoxihaoxi.com/" target=_blank><FONT
						face="Verdana, arial, helvetica, sans-serif" size=1><B>www.haoxihaoxi<FONT
								color=#cc0000>.com</FONT> </B> </FONT>
				</A> All Rights Reserved.</TD>
			</TR>
		</TBODY>
	</TABLE>
</BODY>
</HTML>
