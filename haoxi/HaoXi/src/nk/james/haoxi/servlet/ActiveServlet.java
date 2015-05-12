package nk.james.haoxi.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Calendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nk.james.haoxi.dao.DbDao;

public class ActiveServlet extends HttpServlet{

	/**
	 * 
	 */
	private static Connection conn;
	
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String errMsg = "";
		RequestDispatcher rd;
		// gain the parameters
		String userId = request.getParameter("id");
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		String sex = request.getParameter("sex");
		try {
			DbDao dd = new DbDao(Util.getDBDriver(), Util.getDBURL(),
					Util.getUser(), Util.getPass());
			 Calendar now = Calendar.getInstance();
			 int month = now.get(Calendar.MONTH) + 1;
			 String time = now.get(Calendar.YEAR)+"-"+month+"-"+now.get(Calendar.DATE)+
					 "-"+now.get(Calendar.HOUR_OF_DAY)+"-"+now.get(Calendar.MINUTE)+"-"+
					 now.get(Calendar.SECOND);
			 int timeMark = now.get(Calendar.SECOND)*1 +now.get(Calendar.MINUTE)*10 + now.get(Calendar.HOUR)*100 + now.get(Calendar.DATE)*1 + month*10 + now.get(Calendar.YEAR)*100;  
			String sql = "update user set userName='"+name+"',password='"+password+"',sex='"+sex+"',ifActived= '1',activeTime= '"+time+"',activeTimeMark='"+timeMark+"'where publicId='"+userId+"'";
			
			try {
				Class.forName(Util.getDBDriver());
				conn = DriverManager.getConnection(Util.getDBURL(), Util.getUser(), Util.getPass());
				Statement stm = conn.createStatement();
				stm.execute(sql);
					HttpSession session = request.getSession(true);
					// set the properties of the session, trace the status
					// of the session
					session.setAttribute("name", name+"<font color=red> 恭喜您激活成功！</font>");
					// redirect the request
					rd = request.getRequestDispatcher("/test.jsp");
					rd.forward(request, response);
					Calendar printTime = Calendar.getInstance();
					System.out.println("用户" + name + "于"
							+ printTime.get(Calendar.HOUR_OF_DAY) + "时"
							+ printTime.get(Calendar.MINUTE) + "分"
							+ printTime.get(Calendar.SECOND) + "秒登录成功。");
				} catch (Exception e) {
				e.printStackTrace();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) {
		try {
			this.doPost(request, response);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
