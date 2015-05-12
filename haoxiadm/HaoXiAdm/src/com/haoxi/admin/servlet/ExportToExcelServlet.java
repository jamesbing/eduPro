package com.haoxi.admin.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.haoxi.admin.bean.TimeContainer;
import com.haoxi.admin.util.DBUtil;
import com.haoxi.admin.util.IOUtil;

public class ExportToExcelServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String placeCode = request.getParameter("placeCode");
		String year = request.getParameter("year");
		String month = request.getParameter("month");
		String day =  request.getParameter("day");
		String adminId = request.getParameter("adminID");
		String lastExportTimeDB = DBUtil.queryAdminById("lastExportTime", adminId);
		TimeContainer lastExportTime = IOUtil.getTime(lastExportTimeDB);
		TimeContainer nowTime = IOUtil.getCurrentTimeContainer();
		ResultSet res = null;
		if(placeCode.equals("all")){
			//导出全部地区的激活用户
			if(year.equals("last")||month.equals("last")||day.equals("last")){
				//导出上次导出以来的所有数据
				res = DBUtil.querFromTimeToTimeWithoutCondition("*", "user", lastExportTime, nowTime);
			}else{
				//导出从那时到现在的所有数据
				TimeContainer lastTime = IOUtil.getTime(year+"-"+month+"-"+day+"-0-0-0");
				res = DBUtil.querFromTimeToTimeWithoutCondition("*", "user", lastTime, nowTime);
			}
		}else{
			//导出某地区的激活用户
			if(year.equals("last")||month.equals("last")||day.equals("last")){
				res = DBUtil.querFromTimeToTimeWithCondition("*", "user", placeCode, placeCode, lastExportTime, nowTime);
				//导出上次导出以来的所有数据
			}else{
				//导出从那时到现在的所有数据
				TimeContainer lastTime = IOUtil.getTime(year+"-"+month+"-"+day+"-0-0-0");
				res = DBUtil.querFromTimeToTimeWithCondition("*", "user", placeCode, placeCode, lastTime, nowTime);
			}		
			
		}
		try {
			res.next();
			request.setAttribute("resultSet", res);
			System.out.println(res.getString("userName"));
			Calendar now = Calendar.getInstance();
			 int monthMark = now.get(Calendar.MONTH) + 1;
			 String time = now.get(Calendar.YEAR)+"-"+monthMark+"-"+now.get(Calendar.DATE)+
					 "-"+now.get(Calendar.HOUR_OF_DAY)+"-"+now.get(Calendar.MINUTE)+"-"+
					 now.get(Calendar.SECOND);
			DBUtil.modify(adminId, "lastExportTime", time);
			request.getServletContext().getRequestDispatcher("/excel.jsp").forward(request, response);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
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
