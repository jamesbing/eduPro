<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0023)http://www.ttxs100.com/ -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>管理员管理系统</title>
	<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	overflow: hidden;
}

.STYLE3 {
	color: #528311;
	font-size: 12px;
}

.STYLE4 {
	color: #42870a;
	font-size: 12px;
}
-->
</style>
</head>

<body>
	<table width="100%" height="100%" border="0" cellpadding="0"
		cellspacing="0">
		<tr>
			<td bgcolor="#e5f6cf">&nbsp;</td>
		</tr>
		<tr>
			<td height="608" background="images/login_03.gif"><table
					width="862" border="0" align="center" cellpadding="0"
					cellspacing="0">
					<tr>
						<td height="266" background="images/login_04.gif">&nbsp;</td>
					</tr>
					<form id="login" method="post" action="login">
						<tr>
							<td height="95"><table width="100%" border="0"
									cellspacing="0" cellpadding="0">
									<tr>
										<td width="424" height="95" background="images/login_06.gif">&nbsp;</td>
										<td width="183" background="images/login_07.gif"><table
												width="100%" border="0" cellspacing="0" cellpadding="0">
												
													<%
													String string = null;
													string = (String)request.getAttribute("errorMsg");
													if(string != null)
													out.print("<font size=0.5 color=red>"+string+"</font>");
													%>
												<tr>
		
													<td width="21%" height="30"><div align="center">
															<span class="STYLE3">用户名</span>
														</div></td>
													<td width="79%" height="30"><input type="text"
														name="userName"
														style="height:18px; width:130px; border:solid 1px #cadcb2; font-size:12px; color:#81b432;">
													</td>
												</tr>
												<tr>
													<td height="30"><div align="center">
															<span class="STYLE3">密码</span>
														</div></td>
													<td height="30"><input type="password" name="password"
														style="height:18px; width:130px; border:solid 1px #cadcb2; font-size:12px; color:#81b432;">
													</td>
												</tr>
												<tr>
													<td height="30">&nbsp;</td>
													<td height="30">
													<input type="submit" value=""
														style="width:42px;height:20px;background-image:url('images/login.png');
												border: none; cursor: pointer;" "/>
													<input type="reset" value=""
														style="width:42px;height:20px;background-image:url('images/reset.png');
												border: none; cursor: pointer;" "/>
													</td>
													<td height="30">
													</td>
												</tr>
											</table></td>
										<td width="255" background="images/login_08.gif">&nbsp;</td>
									</tr>
								</table></td>
					</form>
					</tr>
					<tr>
						<td height="247" valign="top" background="images/login_09.gif"><table
								width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="22%" height="30">&nbsp;</td>
									<td width="56%">&nbsp;</td>
									<td width="22%">&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td height="30"><table width="100%" border="0"
											cellspacing="0" cellpadding="0">
											<tr>
												<td width="44%" height="20">&nbsp;</td>
												<td width="56%" class="STYLE4">好习网管理系统2014.10A</td>
											</tr>
										</table></td>
									<td>&nbsp;</td>
								</tr>
							</table></td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td bgcolor="#a2d962">&nbsp;</td>
		</tr>
	</table>

	<map name="Map">
		<area shape="rect" coords="3,3,36,19" href="#">
			<area shape="rect" coords="40,3,78,18" href="#">
	</map>
</body>
</html>