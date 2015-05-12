<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
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
    This is my JSP page. <br>
    <span style="color:red;font-weight:bold">
    <%if(request.getAttribute("err")!=null)
    	{
    		out.println(request.getAttribute("err"+"</br>"));
    	}
     %>
     </span>
     <form id = "login" method = "post" action="login">
     	用户名：<input type="text" name="username"/>
     	密&nbsp&nbsp码：<input type="password" name="password"/><br/>
     	<input type="submit" value="登录"></br>
     </form>
  </body>
</html>
