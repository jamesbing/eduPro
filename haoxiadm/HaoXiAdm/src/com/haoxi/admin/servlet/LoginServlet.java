package com.haoxi.admin.servlet;

import java.io.IOException;
import java.util.Calendar;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.haoxi.admin.util.DBUtil;

public class LoginServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		HttpSession session = request.getSession(true);
		String clientUserName = request.getParameter("userName");
		String clientPassword = request.getParameter("password");
		String logout = null;
		logout = request.getParameter("logout");
		if((logout != null) &&logout.equals("true")){
			Calendar now = Calendar.getInstance();
			System.out.println(clientUserName+"于"+now.get(Calendar.HOUR_OF_DAY)+"时"+
					now.get(Calendar.MINUTE)+
					"分"+now.get(Calendar.SECOND)+"秒退出登录。");
			RequestDispatcher rd = request.getRequestDispatcher("/login.jsp");
			rd.forward(request, response);
		}
		else if(clientUserName.equals(null)){
			String errMsg = "请输入用户名！";
			request.setAttribute("errorMsg", errMsg);
			RequestDispatcher rd = request.getRequestDispatcher("/login.jsp");
			rd.forward(request, response);
		}else if(clientPassword.equals(null)){
			String errMsg = "请输入密码！";
			request.setAttribute("errorMsg", errMsg);
			RequestDispatcher rd = request.getRequestDispatcher("/login.jsp");
			rd.forward(request, response);
		}
		else if(DBUtil.ifPasswordRight(clientUserName, clientPassword)){
			//get the session
			Calendar now = Calendar.getInstance();
			int admId = DBUtil.getAdmId(clientUserName);
			int power = Integer.parseInt(DBUtil.query("power",clientUserName));
			//set the properties of the session, trace the status of the session
			request.setAttribute("name", clientUserName);
			request.setAttribute("userId", admId);
			request.setAttribute("power", power);
			//redirect the request
			RequestDispatcher rd = request.getRequestDispatcher("/admIndex.jsp");
			rd.forward(request, response);
			System.out.println("用户"+clientUserName+
					"于"+now.get(Calendar.HOUR_OF_DAY)+"时"+
					now.get(Calendar.MINUTE)+
					"分"+now.get(Calendar.SECOND)+"秒登录成功。");
		}else{
			Calendar now = Calendar.getInstance();
			System.out.println("用户"+clientUserName+
					"于"+now.get(Calendar.HOUR_OF_DAY)+"时"+
					now.get(Calendar.MINUTE)+
					"分"+now.get(Calendar.SECOND)+"秒登录失败。");
			//give the message of the mismatch
			String errMsg = "用户名或密码错误，请重新输入！";
			request.setAttribute("errorMsg", errMsg);
			RequestDispatcher rd = request.getRequestDispatcher("/login.jsp");
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
