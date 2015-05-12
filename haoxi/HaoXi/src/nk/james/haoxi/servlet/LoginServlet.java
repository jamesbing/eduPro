package nk.james.haoxi.servlet;

/**
 * @author James
 * @time 2014-9-27 ����8:30:38
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
						System.out.println("�û�" + userName + "��"
								+ now.get(Calendar.HOUR_OF_DAY) + "ʱ"
								+ now.get(Calendar.MINUTE) + "��"
								+ now.get(Calendar.SECOND) + "���¼�ɹ���");
					} else {
						HttpSession session = request.getSession(true);
						// set the properties of the session, trace the status
						// of the session
						String msg = "�����˺���δ����������";
						session.setAttribute("msg", msg);
						
						RequestDispatcher forwardMark = request
								.getRequestDispatcher("activeConfirm.jsp");
						forwardMark.forward(request, response);
					}
				} else {
					Calendar now = Calendar.getInstance();
					System.out.println("�û�" + userName + "��"
							+ now.get(Calendar.HOUR_OF_DAY) + "ʱ"
							+ now.get(Calendar.MINUTE) + "��"
							+ now.get(Calendar.SECOND) + "���¼ʧ�ܡ�");
					// give the message of the mismatch
					errMsg += "�����û�����������������������룡";
				}
			} else {
				// the name is not existing
				System.out.println("�ο�");
				errMsg += "�û��������ڣ�����ע�ᣡ";
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
