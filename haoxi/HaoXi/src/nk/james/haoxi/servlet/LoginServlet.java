package nk.james.haoxi.servlet;

/**
 * @author James
 * @time 2014-9-27 上午8:30:38
 */

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import nk.james.haoxi.dao.DbDao;

@WebServlet(name = "login", urlPatterns = { "/login" })
public class LoginServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// this response to the request of the user's action
	public void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, java.io.IOException {
		String errMsg = "";
		RequestDispatcher rd;
		// gain the parameters
		String userName = request.getParameter("username");
		String password = request.getParameter("password");
		try {
			DbDao dd = new DbDao(Util.getDBDriver(), Util.getDBURL(),
					Util.getUser(), Util.getPass());
			String sql = "select password from user where userName=?";
			String sqlId = "select password from user where publicId=?";
			;
			String sqlActive = "select ifActived from user where userName=?";
			String sqlActiveId = "select ifActived from user where publicId=?";
			ResultSet rs = dd.query(sql, userName);
			ResultSet rsId = dd.query(sqlId, userName);
			if (rs.next() || rsId.next()) {
				// match the user and its password
				String rsIdString = "pass";
				String rsString = "pass";
				try {
					rsIdString = rsId.getString("password");
				} catch (SQLException e) {
					rsString = rs.getString("password");
				}
				if (rsString.equals(password) || rsIdString.equals(password)) {
					// get the session
					ResultSet activeRs = dd.query(sqlActive, userName);
					ResultSet activeRsId = dd.query(sqlActiveId, userName);
					activeRsId.next();
					activeRs.next();
					int activeName = 0;
					int activeId = 0;
					try {
						activeName = Integer.parseInt(activeRs
								.getString("ifActived"));
					} catch (SQLException e) {
						activeId = Integer.parseInt(activeRsId
								.getString("ifActived"));
					}
					if (activeName != 0 || activeId != 0) {
						HttpSession session = request.getSession(true);
						// set the properties of the session, trace the status
						// of the session
						session.setAttribute("name", userName);
						// redirect the request
						rd = request.getRequestDispatcher("/test.jsp");
						rd.forward(request, response);
						Calendar now = Calendar.getInstance();
						System.out.println("用户" + userName + "于"
								+ now.get(Calendar.HOUR_OF_DAY) + "时"
								+ now.get(Calendar.MINUTE) + "分"
								+ now.get(Calendar.SECOND) + "秒登录成功。");
					} else {
						HttpSession session = request.getSession(true);
						// set the properties of the session, trace the status
						// of the session
						String msg = "您的账号尚未激活，请您激活！";
						session.setAttribute("msg", msg);
						
						RequestDispatcher forwardMark = request
								.getRequestDispatcher("activeConfirm.jsp");
						forwardMark.forward(request, response);
					}
				} else {
					Calendar now = Calendar.getInstance();
					System.out.println("用户" + userName + "于"
							+ now.get(Calendar.HOUR_OF_DAY) + "时"
							+ now.get(Calendar.MINUTE) + "分"
							+ now.get(Calendar.SECOND) + "秒登录失败。");
					// give the message of the mismatch
					errMsg += "您的用户名或者密码错误，请重新输入！";
				}
			} else {
				// the name is not existing
				System.out.println("游客");
				errMsg += "用户名不存在，请先注册！";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (errMsg != null && !errMsg.equals("")) {
			rd = request.getRequestDispatcher("login.jsp");
			request.setAttribute("err", errMsg);
			rd.forward(request, response);
		}
	}
}
