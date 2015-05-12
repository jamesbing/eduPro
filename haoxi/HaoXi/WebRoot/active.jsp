<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'active.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

</head>

<body>

	<form action="active">

		<br> <br> <br> <br> <br> <br> <br>
		<font color="red">恭喜您！你的账号通过确认！ <br>请完善必要信息，然后点击激活按钮完成激活 <br>成为我们的正式会员，您即可享受我们的服务了！
			<br> </font> 
			<font color="red">
			<%
				String id = request.getParameter("id");
				out.println(id);
			 %>
			</font>
			<input type="hidden" name="id" id="id" value=<%=request.getParameter("id") %>> <br>
 
			请给您自己起个名字：<input type="text" name="name" id="name"> <br>
			您的性别：<input type = "text" name = "sex" id="sex"><br>
			 请修改您的密码:<input type="password" name="password" id="password"> <br>
			请确认您的密码:<input type="password" name="password2" id="password2">
		<br> <input type="submit" value="进行激活">

	</form>

</body>
</html>
