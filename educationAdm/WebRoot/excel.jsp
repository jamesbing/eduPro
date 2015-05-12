<%@ page contentType="application/vnd.ms-excel;charset=GBK"%>用户ID	用户名	性别	创建人ID	创建时间	激活时间	地区代码
<%@ page import="java.sql.ResultSet"%><%@ page import="nankai.dym.util.IOUtil"%><%
	ResultSet res = (ResultSet) request.getAttribute("resultSet");
	while (!res.isLast()) {
out.print(res.getString("publicId"));
out.print("\t");
out.print(res.getString("userName"));
out.print("\t");
out.print(res.getString("sex"));
out.print("\t");
out.print(res.getString("adminId"));
out.print("\t");
out.print(IOUtil.getUsualTime(res.getString("createTime")));
out.print("\t");
out.print(IOUtil.getUsualTime(res.getString("activeTime")));
out.print("\t");
out.print(res.getString("placeCode"));
out.print("\n");
res.next();
	}
	/* 	result = result + res.getString("publicId") + "\t" +
	 res.getString("userName")+ "\t" + res.getString("sex") + "\t" + res.getString("adminId") + "\t" + res.getString("createTime") + "\t" + res.getString("activeTime") + "\t" + res.getString("placeCode")+"\n";
	 res.next();
	 }*/
	String result = res.getString("publicId") + "\t"
			+ res.getString("userName") + "\t" + res.getString("sex")
			+ "\t" + res.getString("adminId") + "\t"
			+ IOUtil.getUsualTime(res.getString("createTime")) + "\t"
			+ IOUtil.getUsualTime(res.getString("activeTime")) + "\t"
			+ res.getString("placeCode") + "\n";
	res.next();
	out.print(result);
%>