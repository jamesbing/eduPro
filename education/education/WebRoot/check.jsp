<%@page language="java"%>
<%@page import="java.sql.*"%>
<%@page contentType="text/html;charset = UTF-8"%>

<html>
<head>
</head>

<body>
	<%
	//get parameters from front page
	String userId = request.getParameter("id");
	String psw = request.getParameter("psw");
	//link DB
	try{
			System.out.println("hi, i m here2\n");
	Class.forName("com.mysql.jdbc.Driver");
			System.out.println("hi, i m here1\n");
	
	Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/education","education","1234");
	Statement stmt=conn.createStatement();
		System.out.println("hi, i m here3\n");
	
	ResultSet rs=stmt.executeQuery("select psw from user where id = "+userId);
	rs.next();
	String pswFromDB = rs.getString("psw");
	if(psw == pswFromDB){
	//check auth
	}else
	{
		out.print("wrong password, please input again!");
	}
	
	
	rs.close();
    stmt.close();
    conn.close();
	}catch(Exception e){}


 %>


</body>

</html>