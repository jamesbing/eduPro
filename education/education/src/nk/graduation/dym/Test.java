package nk.graduation.dym;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Test{

	//get parameters from front page
//		String userId = request.getParameter("id");
//		String psw = request.getParameter("psw");
		//link DB
	static void test(){
		try{
		System.out.println("hi, i m here2\n");
		Class.forName("com.mysql.jdbc.Driver");
		System.out.println("hi, i m here1\n");
		
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/education","education","1234");
		Statement stmt=conn.createStatement();
			System.out.println("hi, i m here3\n");
		
		ResultSet rs=stmt.executeQuery("select psw from user where id = 0");
		rs.next();
		String pswFromDB = rs.getString("psw");
		
			System.out.print("wrong password, please input again!");
		rs.close();
	    stmt.close();
	    conn.close();
		}catch(Exception e){
			
		}
	}
	
	public static void main(String arg[]){
		test();
	}
}
