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
   
   <form action="activeConfirm"> 
   
      		<br>
      		<br>
      		<br>
      		<br>
      		<br>
      		<br>
   		<font color="red">您尚未激活账号，请输入您卡片上的序列号和密码，确认后进行激活！</font>
   		<br>
   		您的序列号：<input type="text" name = "id" id = "id">
   		      		<br>
   		您的初始密码:<input type="password" name="password" id="password">
   		      		<br>
   		<input type="submit" value="下一步"> 
   </form>
   
  </body>
</html>
