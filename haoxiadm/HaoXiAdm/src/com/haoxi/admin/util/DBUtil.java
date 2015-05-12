package com.haoxi.admin.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.haoxi.admin.bean.TimeContainer;

@SuppressWarnings("unused")
public class DBUtil extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7814273088785148982L;
	private static String driverName = "com.mysql.jdbc.Driver";
	private static String serverDB = "jdbc:mysql://localhost/haoxi";
	private static String userName = "root";
	private static String password = "tiger";
	private static Connection conn;
	private static int SerialUserId = DBUtil.queryLastUserDBId() + 1;

	public static Connection getDBConnection() {
		try {
			Class.forName(driverName);
			conn = DriverManager.getConnection(serverDB, userName, password);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("数据库存在问题,请根据上述提示进行排查。");
		}
		return conn;
	}
	
	public static void modify(String modifyWho, String modifyWhat, String modifyToWhatValue){
//		UPDATE [LOW_PRIORITY] [IGNORE] tbl_name  
//		SET col_name1=expr1 [, col_name2=expr2 ...]
//		update tbname set cols1=1 where cols1=(select * from ( select cols1 from tbname limit n-1,n-1) as tmp);
//		如下面的语句将users表中id等于123的记录的age改为24
//
//		　　UPDATE users SET age = 24 WHERE id = 123;
		try {
			String sql = "update admin set "+modifyWhat+" ='"+modifyToWhatValue+"' where userId = '"+modifyWho+"'";
			Statement stm = getDBConnection().createStatement();
			stm.executeUpdate(sql);
		} catch (Exception e) {
		}
	}

	public static boolean ifPasswordRight(String clientName,
			String clientPassword) {
		boolean isRight = false;
		try {
			Statement stm = getDBConnection().createStatement();
			ResultSet result = stm
					.executeQuery("select password from admin where userName='"
							+ clientName + "'");
			result.next();
			String dbPassword = result.getString("password");
			result.close();
			if (clientPassword.equals(dbPassword))
				isRight = true;
		} catch (Exception e) {
			System.out.println("非法的用户名试图登录！");
		}
		return isRight;
	}

	public static int getAdmId(String admName) {
		int id = 0;
		try {
			Statement stm = getDBConnection().createStatement();
			ResultSet result = stm
					.executeQuery("select userId from admin where userName='"
							+ admName + "'");
			result.next();
			id = Integer.parseInt(result.getString("userId"));
		} catch (Exception e) {
			System.out.println("非法的用户名试图登录！");
		}
		return id;
	}
	
	public static String query(String index, String name) {
		String res = null;
		try {
			Statement stm = getDBConnection().createStatement();
			ResultSet result = stm.executeQuery("select " + index
					+ " from admin where userName='" + name + "'");
			result.next();
			res = result.getString(index);
		} catch (Exception e) {
		}
		return res;
	}
	
	public static String queryAdminById(String index, String id){
		String res = null;
		try {
			Statement stm = getDBConnection().createStatement();
			ResultSet result = stm.executeQuery("select " + index
					+ " from admin where userId='" + id + "'");
			result.next();
			res = result.getString(index);
		} catch (Exception e) {
		}
		return res;
	}
	
	public static String queryAdminByName(String index, String name){
		String res = null;
		try {
			Statement stm = getDBConnection().createStatement();
			ResultSet result = stm.executeQuery("select " + index
					+ " from admin where userName='" + name + "'");
			result.next();
			res = result.getString(index);
		} catch (Exception e) {
		}
		return res;
	}

	public static ResultSet query(String mark) throws SQLException {
		ResultSet res = null;

		Statement stm = getDBConnection().createStatement();
		ResultSet resultOnName = stm
				.executeQuery("select * from user where userName='" + mark
						+ "'");
		if (resultOnName.next()) {
			return resultOnName;
		} else{
			ResultSet resultOnId = stm
					.executeQuery("select * from user where publicId='" + mark
							+ "'");
			if (resultOnId.next()) {
				return resultOnId;
			} else {
				return res;
			}
		}
	}
	
	public static int queryLastUserDBId(){
		int dbLastId = 0;
		ResultSet result = null;
		try{
			Statement stm = getDBConnection().createStatement();
			result = stm.executeQuery("select id from user");
			if(result.last()){
				dbLastId = result.getInt("id");
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return dbLastId;
	}
	
	public static ResultSet querFromTimeToTimeWithoutCondition(String index, String fromWhere,
			TimeContainer fromTime, TimeContainer toTime){
		ResultSet result = null;
		int timeMarkBefore = fromTime.getTimeMark();
		int timeMarkAfter = toTime.getTimeMark();
		try {
			Statement stm = getDBConnection().createStatement();
			result = stm.executeQuery("select " + index + " from " + fromWhere
					+ " where activeTimeMark between '"+timeMarkBefore+"'and '"+timeMarkAfter+"'");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
		
		}
	
	public static ResultSet querFromTimeToTimeWithCondition(String index, String fromWhere, String conditionName,
			String condition, TimeContainer fromTime, TimeContainer toTime){
		ResultSet result = null;
		int timeMarkBefore = fromTime.getTimeMark();
		int timeMarkAfter = toTime.getTimeMark();
		try {
			Statement stm = getDBConnection().createStatement();
			result = stm.executeQuery("select " + index + " from " + fromWhere
					+ " where " + conditionName + "='" + condition + "' and activeTimeMark between '"+timeMarkBefore+"'and '"+timeMarkAfter+"'");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public static ResultSet query(String index, String fromWhere,
			String conditionName, String condition) {
		ResultSet result = null;
		try {
			Statement stm = getDBConnection().createStatement();
			result = stm.executeQuery("select " + index + " from " + fromWhere
					+ " where " + conditionName + "='" + condition + "'");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public static int add(String toWhom, String publicId, String password,
			int id, String admId, String placeCode) throws SQLException {
//				"insert into" + toWhom + "values(" + "?,?,?,?,?,?,?,?,?,?)");
		Statement stm = getDBConnection().createStatement();
		 String time = "";
		 Calendar now = Calendar.getInstance();
		 int monthModify = now.get(Calendar.MONTH) + 1;
		 time = now.get(Calendar.YEAR)+"-"+monthModify+"-"+now.get(Calendar.DATE)+
				 "-"+now.get(Calendar.HOUR_OF_DAY)+"-"+now.get(Calendar.MINUTE)+"-"+
				 now.get(Calendar.SECOND);
		String sql = "insert into " + toWhom
				+ " (publicId, password, id, adminId, createTime, placeCode) values('"
				+ publicId + "','" + password +"','"+ id + "','" + admId + "','" + time +"','"
				+ placeCode + "')";
		int ifSuccess = stm.executeUpdate(sql);
		return ifSuccess;
	}

	public static void generateUser(String admId, String placeCode, int count)
			throws SQLException, ServletException, IOException {
		boolean finish = false;
		String userName = "";
		String password = "";
		String publicId = "";
//		PrintWriter out = response.getWriter();
//		out.flush();
		int id = 0;
		int markId = 1;
		ResultSet result = DBUtil.query("id", "user", "placeCode", placeCode);
		try {
			if (result.last()) {
				markId = markId + Integer.parseInt(result.getString("id"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 要有七位数字
		for (int mark = 0; mark < count; mark++) {
			String tempId = markId + "";
			int shortCount = 7 - tempId.length();
			for (int shortMark = shortCount; shortMark > 0; shortMark--) {
				tempId = "0" + tempId;
			}
			publicId = "hx" + placeCode + tempId;
			password = RandomUtil.genRandomNum(7);
			id = DBUtil.SerialUserId;
			SerialUserId ++;
			String adminId = admId;
			add("user",publicId, password, id, adminId, placeCode);
			markId++;
		}
		finish = true;
		System.out.println("管理员" + admId + "在区域" + placeCode + "下生成了"
				+ count + "个新用户。");
	}

}
