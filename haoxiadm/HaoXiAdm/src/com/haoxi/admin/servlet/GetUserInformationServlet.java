package com.haoxi.admin.servlet;

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

import com.haoxi.admin.util.DBUtil;

public class GetUserInformationServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String userMark = request.getParameter("userMark");
		PrintWriter out = response.getWriter();
		int markExist = 0;
		try {
			ResultSet res = null;
			res = DBUtil.query(userMark);
			String mark = "mark";
			if(res!=null){
				mark = res.getString("publicId");
			}
			if(mark != "mark"){
				markExist = 1;
				String userName = "";
				String publicId = "";
				String createTime = "";
				String activeStatus = "";
				String activeTime = "";
				userName = res.getString("userName");
				publicId = res.getString("publicId");
				createTime = res.getString("createTime");
				if(res.getInt("ifActived") == 0){
					userName = "用户名不存在";
					activeStatus = "该用户尚未激活.";
					activeTime = "该用户尚未激活.";
				}else if(res.getInt("ifActived") == 1){
					activeStatus = "已激活";
					activeTime = res.getString("activeTime");
				}
				
				request.setAttribute("userName", userName);
				request.setAttribute("publicId", publicId);
				request.setAttribute("createTime", createTime);
				request.setAttribute("activeStatus", activeStatus);
				request.setAttribute("activeTime", activeTime);
				request.setAttribute("markExist", markExist);


				System.out.println((res.getString("userName")));
				System.out.println((res.getString("publicId")));
				System.out.println((res.getString("createTime")));
				System.out.println((res.getInt("ifActived")));
				System.out.println((res.getString("activeTIme")));
				request. setCharacterEncoding("UTF-8");
				request.getServletContext().getRequestDispatcher("/pages/queryResult.jsp").forward(request, response);
			}else{
				System.out.println("查无此人");
				request.setAttribute("markExist", markExist);
				request. setCharacterEncoding("UTF-8");
				request.getServletContext().getRequestDispatcher("/pages/queryResult.jsp").forward(request, response);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			out.println("查询不正确，请检查输入的用户名或用户序列号是否正确");

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
