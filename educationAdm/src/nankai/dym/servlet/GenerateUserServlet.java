package nankai.dym.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Calendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.jsp.PageContext;

import nankai.dym.util.DBUtil;


public class GenerateUserServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String admId = null;
		admId = request.getParameter("admId");
		String placeCode = null;
		placeCode = request.getParameter("placeCode");
		int generateCount = 0;
		generateCount = Integer.parseInt(request.getParameter("amount"));
		try {
			System.out.println("正在为区域代码"+placeCode+"批量生成"+generateCount+"个新用户......");
			DBUtil.generateUser(admId, placeCode, generateCount);
			request.getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
//			response.sendRedirect("/login.jsp");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
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
