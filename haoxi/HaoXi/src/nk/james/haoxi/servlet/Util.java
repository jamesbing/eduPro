package nk.james.haoxi.servlet;
/**
 * @author James
 * @time 2014-9-24 ÉÏÎç11:10:26
 */
//import javax.servlet.ServletConfig;
//import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

public class Util extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static String DBdriver = "com.mysql.jdbc.Driver";
	private static String DBurl = "jdbc:mysql://localhost:3306/haoxi";
	private static String DBuser = "root";
	private static String DBpass = "tiger";
	
//	public void getDBInfo(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException,java.io.IOException{
//		try{
//		ServletConfig config = getServletConfig();
//		driver = config.getInitParameter("driver");
//		url = config.getInitParameter("url");
//		user = config.getInitParameter("user");
//		pass = config.getInitParameter("pass");
//		}catch (Exception e){
//			e.printStackTrace();
//		}
//	}
	
	public static String getDBDriver(){
		return DBdriver;
	}
	public static String getDBURL(){
		return DBurl;
	}
	public static String getUser(){
		return DBuser;
	}
	public static String getPass(){
		return DBpass;
	}
}
