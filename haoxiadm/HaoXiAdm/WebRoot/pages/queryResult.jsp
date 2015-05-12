<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0037)http://2school.wygk.cn/admin/left.htm -->
<HTML><HEAD><TITLE>The administrator system of HaoXiWang</TITLE>
<LINK href="syscome.files/Admin.css" type=text/css rel=stylesheet>
<SCRIPT language=javascript src="syscome.files/Admin.js"></SCRIPT>
<STYLE type=text/css>
.STYLE1 {
	FONT-WEIGHT: bold;
	COLOR: #0099ff
}
</STYLE>


<META content="MSHTML 6.00.2900.5726" name=GENERATOR>


</HEAD>
<BODY>
	<BR>
	<TABLE class=tableborder cellSpacing=1 cellPadding=3 width="95%"
		align=center border=0>
		<TBODY>
			<TR>
				<TH height=24><font color="red">【查询结果】</font>
				</TD>
			</TR>
			<TR>
				<TD class=forumrow><font color="red">信息列表</font>
				</TD>
			</TR>

		</TBODY>
	</TABLE>
	<BR>
	<TABLE cellSpacing=1 cellPadding=3 width="95%" align=center
		bgColor=#6ab6b6 border=0>
			<TBODY>
			<%
				int mark = (Integer)request.getAttribute("markExist");
				if(mark==0){
				%>
				<TR>
					<TD class=forumrow width="30%" height=24><font color=red>您所查询的用户不存在，请检查输入的用户名或序列号是否正确。</font></TD>
				</TR>
				<%}else{%>
					
				<TR>
					<TD class=forumrow width="30%" height=24><font color=red>用户名:</font><font color=yellow><%=request.getAttribute("userName")%></font></TD>
				</TR>
				<TR>	
					<TD class=forumrow width="30%" height=24><font color=red>用户Id:</font><font color=yellow><%=request.getAttribute("publicId")%></font></TD>
				</TR>
				<TR>
					<TD class=forumrow width="30%" height=24><font color=red>创建时间:</font><font color=yellow><%=request.getAttribute("createTime")%></font></TD>
				</TR>
				<TR>
					<TD class=forumrow width="30%" height=24><font color=red>用户状态:</font><font color=yellow><%=request.getAttribute("activeStatus")%></font></TD>
				</TR>
				<TR>	
					<TD class=forumrow width="30%" height=24><font color=red>激活时间: </font><font color=yellow><%=request.getAttribute("activeTime")%></font></TD>
				</TR>
				
				<%}
			 %>
			</TBODY>

	</TABLE>
	<BR>
	<TABLE class=tableborder cellSpacing=1 cellPadding=3 width="95%"
		align=center border=0>
		<TBODY>
			<TR>
				<TH colSpan=2 height=22></TH>
			</TR>
			<TR>
				<TD class=forumrow width="50%"><SPAN class=STYLE1>The Administrator System of HaoXiWang
						V2014.10.15 </SPAN>
				</TD>
				<TD class=forumrowhighlight width="50%"><FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT> <FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT>
				</TD>
			</TR>
			<TR>
				<TD class=forumrow width="50%"></TD>
				<TD class=forumrowhighlight width="50%"><FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT> <FONT color=red><B></B>
				</FONT><FONT color=red><B></B>
				</FONT>
				</TD>
			</TR>
		</TBODY>
	</TABLE>
	<BR>
	<TABLE cellSpacing=0 cellPadding=0 width="95%" align=center border=0>
		<TBODY>
			<TR>
				<TD align=middle>Copyright HaoXi (c) 2014 <A title=href=
					"http://www.haoxihaoxi.com/" target=_blank><FONT
						face="Verdana, arial, helvetica, sans-serif" size=1><B>www.haoxihaoxi<FONT
								color=#cc0000>.com</FONT> </B> </FONT>
				</A> All Rights Reserved.</TD>
			</TR>
		</TBODY>
	</TABLE>
</BODY>
</HTML>
