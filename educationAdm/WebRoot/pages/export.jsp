<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0037)http://2school.wygk.cn/admin/left.htm -->
<HTML><HEAD><TITLE>好习网后台系统</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
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
				<TH height=24><font color="red">【数据导出】</font>
				</TD>
			</TR>
			<TR>
				<TD class=forumrow><font color="red">好习网新已激活用户数据导出，请正确填写相关参数</font>
				</TD>
			</TR>

		</TBODY>
	</TABLE>
	<BR>
	<TABLE cellSpacing=1 cellPadding=3 width="95%" align=center
		bgColor=#6ab6b6 border=0>
		<form id="addUser" name="addUser" method="post" action="../exportToExcel">
			<TBODY>
				<TR>
					<TH colSpan=2 height=24>【请在下面输入】
					<td></TD>
				</TR>
				<TR>
					<TD class=forumrow width="30%" height=24>要导出的地区（如山东，则填写sd，若要将所有数据导出，请保持默认数据不变）：</TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="text" name="placeCode" value="all"></TD>
				</TR>
				<TR>
					<TD class=forumrow width="30%" height=24>从哪一天开始导出（若要将上次导出与现在之间的所有用户导出，请保持默认数据不变）：</TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="text" name="year" value="last">年<input
						type="text" name="month" value = "last">月<input
						type="text" name="day" value = "last">日</TD>
				</TR>
				<TR>
				
				<TR>
					<TD class=forumrow width="30%" height=24></TD>
					<TD class=forumrowhighlight width="70%" height=24><input
						type="submit" name="submit" value="导出">&nbsp&nbsp <input
						type="reset" name="reset" value="重置"></TD>
				</TR>
			</TBODY>
		</form>

	</TABLE>
	<BR>
	<TABLE class=tableborder cellSpacing=1 cellPadding=3 width="95%"
		align=center border=0>
		<TBODY>
			<TR>
				<TH colSpan=2 height=22></TH>
			</TR>
			<TR>
				<TD class=forumrow width="50%"><SPAN class=STYLE1>好习网后台管理员系统
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
