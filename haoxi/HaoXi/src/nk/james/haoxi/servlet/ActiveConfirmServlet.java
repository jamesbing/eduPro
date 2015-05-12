package nk.james.haoxi.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nk.james.haoxi.dao.DbDao;

public class ActiveConfirmServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String errMsg = "";
		RequestDispatcher rd;
		// gain the parameters
		String userId = request.getParameter("id");
		String password = request.getParameter("password");
		try {
			DbDao dd = new DbDao(Util.getDBDriver(), Util.getDBURL(),
					Util.getUser(), Util.getPass());
			String sql = "select password from user where publicId=?";
			ResultSet rs = dd.query(sql, userId);
			if (rs.next()) {
				// match the user and its password
				String rsString = "pass";
				try {
					rsString = rs.getString("password");
				} catch (SQLException e) {
					rsString = " ";
				}
				if (rsString.equals(password)) {
						request.setAttribute("id", userId);
						RequestDispatcher forwardMark = request
								.getRequestDispatcher("active.jsp");
						forwardMark.forward(request, response);
					}
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
