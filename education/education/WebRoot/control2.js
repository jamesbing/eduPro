function show_help()
{
	//parent.frames[1].location.pathname("/help_CTA.html");
	//parent.frames[1].location.href="help_CTA.html";
	window.open("help_CTA.html","output1","");
//	parent.frames[1].document.open("help_CBR");
//	parent.frames[1]=open("help_CBR");
	//newWindow=open("help_CTA.html","New_Window","width=700,height=700,scrollbars=yes,resizable=1");   
//	content="lkjljlkjl";
//	Upper = "<HTML>\n<HEAD>\n<TITLE>OUTPUT</TITLE>\n</HEAD>\n<BODY bgcolor="red">\n";
//	Upper="zhaokezhaoshihuaidan";
//	parent.frames[1].document.write(Upper);
//	parent.frames[1].document.close();
	//newWindow.document.close();
}
function missrate(cachesize,assoc,blocksize)
{
	switch(assoc)
	{
		case "1":
			if(cachesize==1)
			{
				if(blocksize==16)
				{
					Missrate=0.1505;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.1334;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.1376;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.1664;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.2201;
					return Missrate;
				}
			}
			else if(cachesize==2)
			{
				if(blocksize==16)
				{
					Missrate=0.12;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.098;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.1;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.12;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.16;
					return Missrate;
				}
			}
			else if(cachesize==4)
			{
				if(blocksize==16)
				{
					Missrate=0.0857;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.0724;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.07;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0778;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0951;
					return Missrate;
				}
			}
			else if(cachesize==8)
			{
				if(blocksize==16)
				{
					Missrate=0.062;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.046;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.048;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.053;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.064;
					return Missrate;
				}
			}
			else if(cachesize==16)
			{
				if(blocksize==16)
				{
					Missrate=0.0394;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.0287;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0264;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0277;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0329;
					return Missrate;
				}
			}
			else if(cachesize==32)
			{
				if(blocksize==16)
				{
					Missrate=0.03;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.02;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.018;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.019;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.022;
					return Missrate;
				}
			}
			else if(cachesize==64)
			{
				if(blocksize==16)
				{
					Missrate=0.0204;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.0135;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0106;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0102;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0115;
					return Missrate;
				}
			}
			else if(cachesize==128)
			{
				if(blocksize==16)
				{
					Missrate=0.0157;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.01;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0079;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0075;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0082;
					return Missrate;
				}
			}
			else if(cachesize==256)
			{
				if(blocksize==16)
				{
					Missrate=0.0109;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.007;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0051;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0049;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0049;
					return Missrate;
				}
			}
			break;
		case "2":
			if(cachesize==1)
			{
				if(blocksize==16)
				{
					Missrate=0.1188;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.105;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.1086;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.1313;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.1737;
					return Missrate;
				}
			}
			else if(cachesize==2)
			{
				if(blocksize==16)
				{
					Missrate=0.093;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.076;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0775;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.093;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.124;
					return Missrate;
				}
			}
			else if(cachesize==4)
			{
				if(blocksize==16)
				{
					Missrate=0.0674;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.057;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0551;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0612;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0748;
					return Missrate;
				}
			}
			else if(cachesize==8)
			{
				if(blocksize==16)
				{
					Missrate=0.0512;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.038;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0396;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0437;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0528;
					return Missrate;
				}
			}
			else if(cachesize==16)
			{
				if(blocksize==16)
				{
					Missrate=0.0302;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.022;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0202;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0212;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0252;
					return Missrate;
				}
			}
			else if(cachesize==32)
			{
				if(blocksize==16)
				{
					Missrate=0.021;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.014;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0125;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0133;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0154;
					return Missrate;
				}
			}
			else if(cachesize==64)
			{
				if(blocksize==16)
				{
					Missrate=0.0151;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.01;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0078;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0075;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0085;
					return Missrate;
				}
			}
			else if(cachesize==128)
			{
				if(blocksize==16)
				{
					Missrate=0.0109;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.007;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0055;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0052;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0057;
					return Missrate;
				}
			}
			else if(cachesize==256)
			{
				if(blocksize==16)
				{
					Missrate=0.0077;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.005;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0036;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0034;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0034;
					return Missrate;
				}
			}
			break;
		case "4":
			if(cachesize==1)
			{
				if(blocksize==16)
				{
					Missrate=0.1075;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.095;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0982;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.1188;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.1572;
					return Missrate;
				}
			}
			else if(cachesize==2)
			{
				if(blocksize==16)
				{
					Missrate=0.0783;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.064;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0653;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0783;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.1044;
					return Missrate;
				}
			}
			else if(cachesize==4)
			{
				if(blocksize==16)
				{
					Missrate=0.058;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.049;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0473;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0526;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0643;
					return Missrate;
				}
			}
			else if(cachesize==8)
			{
				if(blocksize==16)
				{
					Missrate=0.0471;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.035;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0365;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0403;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0486;
					return Missrate;
				}
			}
			else if(cachesize==16)
			{
				if(blocksize==16)
				{
					Missrate=0.0274;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.02;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0183;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0193;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0229;
					return Missrate;
				}
			}
			else if(cachesize==32)
			{
				if(blocksize==16)
				{
					Missrate=0.0195;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.013;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0116;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0123;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0142;
					return Missrate;
				}
			}
			else if(cachesize==64)
			{
				if(blocksize==16)
				{
					Missrate=0.0136;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.009;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.007;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0068;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0076;
					return Missrate;
				}
			}
			else if(cachesize==128)
			{
				if(blocksize==16)
				{
					Missrate=0.0094;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.006;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0047;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0045;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0049;
					return Missrate;
				}
			}
			else if(cachesize==256)
			{
				if(blocksize==16)
				{
					Missrate=0.0062;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.004;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0029;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0028;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0028;
					return Missrate;
				}
			}
			break;
		case "8":
			if(cachesize==1)
			{
				if(blocksize==16)
				{
					Missrate=0.984;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.087;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.09;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.1088;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.1439;
					return Missrate;
				}
			}
			else if(cachesize==2)
			{
				if(blocksize==16)
				{
					Missrate=0.0661;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.054;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0551;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0661;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0881;
					return Missrate;
				}
			}
			else if(cachesize==4)
			{
				if(blocksize==16)
				{
					Missrate=0.0461;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.039;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0377;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0419;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0512;
					return Missrate;
				}
			}
			else if(cachesize==8)
			{
				if(blocksize==16)
				{
					Missrate=0.039;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.029;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0302;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0334;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0403;
					return Missrate;
				}
			}
			else if(cachesize==16)
			{
				if(blocksize==16)
				{
					Missrate=0.0247;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.018;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0165;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0173;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0206;
					return Missrate;
				}
			}
			else if(cachesize==32)
			{
				if(blocksize==16)
				{
					Missrate=0.0195;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.013;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0116;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0123;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0142;
					return Missrate;
				}
			}
			else if(cachesize==64)
			{
				if(blocksize==16)
				{
					Missrate=0.0136;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.009;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.007;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0068;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0076;
					return Missrate;
				}
			}
			else if(cachesize==128)
			{
				if(blocksize==16)
				{
					Missrate=0.0094;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.006;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0047;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0045;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0049;
					return Missrate;
				}
			}
			else if(cachesize==256)
			{
				if(blocksize==16)
				{
					Missrate=0.0062;
					return Missrate;
				}
				else if(blocksize==32)
				{
					Missrate=0.004;
					return Missrate;
				}
				else if(blocksize==64)
				{
					Missrate=0.0029;
					return Missrate;
				}
				else if(blocksize==128)
				{
					Missrate=0.0028;
					return Missrate;
				}
				else if(blocksize==256)
				{
					Missrate=0.0028;
					return Missrate;
				}
			}
			break;
		default:
	}
}
function WB(pctwrites,pctdirty,misspen,hittime,Missrate,Hitrate)
{
	 	temp="<tr bgcolor=#D5DAFB><td colspan=6 height=20>\n\
		<div align=center><font size=5><u>Average Memory Access Time Calculations</u></font></div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=20 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads * HitRate * HitTime = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Hitrate+" * "+hittime+" = </p></td>\n\
		<td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Hitrate*hittime)+"</div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads*MissRate*((MissPenalty+HitTime)+(%Dirty*MissPenalty))  = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Missrate+" *  (("+misspen+" + "+hittime+")+("+pctdirty+"% * "+misspen+")) = </p></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Missrate*(Number(misspen)+Number(hittime)+Number(pctdirty)/100*Number(misspen)))+"</div></td></tr>\n\
		<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes * HitRate * HitTime = </p>\n\
		<p align=right>"+pctwrites+"% * "+Hitrate+" * "+hittime+" = </p></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Hitrate*hittime)+"</div></td></tr>";
		return temp;
}
function WT(pctwrites,pctdirty,misspen,hittime,memw,Missrate,Hitrate)
{
		temp="<tr bgcolor=#D5DAFB><td colspan=6 height=20>\n\
		<div align=center><font size=5><u>Average Memory Access Time Calculations</u></font></div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=20 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads * HitRate * HitTime = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Hitrate+" * "+hittime+" = </p></td>\n\
		<td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Hitrate*hittime)+"</div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads * MissRate * ( MissPenalty + HitTime ) = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Missrate+" * ( "+misspen+" + "+hittime+" ) = </p></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Missrate*(Number(misspen)+Number(hittime)))+"</div></td></tr>\n\
		<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes * HitRate * MemWriteTime = </p>\n\
		<p align=right>"+pctwrites+"% * "+Hitrate+" * "+memw+" = </p>\n\
		</div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Hitrate*memw)+"</div></td></tr>";
		return temp;

}
function NWA(pctwrites,Missrate,misspen)
{
		temp="<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes * MissRate * MissPenalty = </p>\n\
		<p align=right>"+pctwrites+"% * "+Missrate+" * "+misspen+" = </p></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Missrate*misspen)+"</div></td></tr>";
		return temp;
}
function MOA(pctwrites,Missrate,misspen,hittime,pctdirty)
{
	temp="<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes*MissRate*((MissPenalty+HitTime)+(%Dirty*MissPenalty))= </p>\n\
		<p align=right>"+pctwrites+"% * "+Missrate+" * (( "+misspen+" + "+hittime+") + ("+pctdirty+"% * "+misspen+")) = </p></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Missrate*(Number(misspen)+Number(hittime)+Number(pctdirty/100)*Number(misspen)))+"</div></td></tr>";
		return temp;
}
function W1(pctwrites,pctdirty,misspen,hittime,memw,Missrate,Hitrate,apolicy)
{
	temp="<tr bgcolor=#D5DAFB><td colspan=6 height=20>\n\
		<div align=center><font size=5><u>Average Memory Access Time Calculations</u></font></div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=20 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads * HitRate * HitTime = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Hitrate+" * "+hittime+" = </p></td>\n\
		<td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Hitrate*hittime)+"</div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads*MissRate*((MissPenalty+HitTime)+(%Dirty*MissPenalty))  = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Missrate+" *  (("+misspen+" + "+hittime+")+("+pctdirty+"% * "+misspen+")) = </p></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Missrate*(Number(misspen)+Number(hittime)+Number(pctdirty)/100*Number(misspen)))+"</div></td></tr>\n\
		<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes * HitRate * HitTime = </p>\n\
		<p align=right>"+pctwrites+"% * "+Hitrate+" * "+hittime+" = </p></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Hitrate*hittime)+"</div></td></tr>";
	if(apolicy==1)
	{
		temp+="<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes * MissRate * MissPenalty = </p>\n\
		<p align=right>"+pctwrites+"% * "+Missrate+" * "+misspen+" = </p></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Missrate*misspen)+"</div></td></tr>";
		return temp;
	}
	else
	{
		temp+="<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes*MissRate*((MissPenalty+HitTime)+(%Dirty*MissPenalty))= </p>\n\
		<p align=right>"+pctwrites+"% * "+Missrate+" * (( "+misspen+" + "+hittime+") + ("+pctdirty+"% * "+misspen+")) = </p></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Missrate*(Number(misspen)+Number(hittime)+Number(pctdirty/100)*Number(misspen)))+"</div></td></tr>";
		return temp;
	}
}
function W2(pctwrites,pctdirty,misspen,hittime,memw,Missrate,Hitrate,apolicy)
{
	temp="<tr bgcolor=#D5DAFB><td colspan=6 height=20>\n\
		<div align=center><font size=5><u>Average Memory Access Time Calculations</u></font></div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=20 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads * HitRate * HitTime = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Hitrate+" * "+hittime+" = </p></td>\n\
		<td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Hitrate*hittime)+"</div></td></tr>\n\
		<tr><td width=16% height=20 bgcolor=#D5DAFB>\n\
		<div align=right><b>Read Miss Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<p align=right>%Reads * MissRate * ( MissPenalty + HitTime ) = </p>\n\
		<p align=right>"+(100-pctwrites)+"% * "+Missrate+" * ( "+misspen+" + "+hittime+" ) = </p></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+((1-pctwrites/100)*Missrate*(Number(misspen)+Number(hittime)))+"</div></td></tr>\n\
		<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=right><b>Write Hit Contribution :</b></div></td>\n\
		<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
		<div align=right>\n\
		<p align=right>%Writes * HitRate * MemWriteTime = </p>\n\
		<p align=right>"+pctwrites+"% * "+Hitrate+" * "+memw+" = </p>\n\
		</div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+(pctwrites/100*Hitrate*memw)+"</div></td></tr>";
	if(apolicy==1)
	{
		temp+="<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
			<div align=right><b>Write Miss Contribution :</b></div></td>\n\
			<td colspan=4 height=40 bgcolor=#EEF0FD>\n\
			<div align=right>\n\
			<p align=right>%Writes * MissRate * MemWriteTime = </p>\n\
			<p align=right>"+pctwrites+"% * "+Missrate+" * "+memw+" = </p></div></td>\n\
			<td width=16% height=40 bgcolor=#D5DAFB>\n\
			<div align=left>"+(pctwrites/100*Missrate*memw)+"</div></td></tr>";
		return temp;
	}
	else
	{
		temp+="<tr><td width=16% height=40 bgcolor=#D5DAFB>\n\
			<div align=right><b>Write Miss Contribution :</b></div></td>\n\
			<td colspan=4 height=4 bgcolor=#EEF0FD>\n\
			<div align=right>\n\
			<p align=right>%Writes * MissRate * (MissPenalty+MemWriteTime) = </p>\n\
			<p align=right>"+pctwrites+"% * "+Missrate+" * ( "+misspen+" + "+memw+" ) = </p></div></td>\n\
			<td width=16% height=40 bgcolor=#D5DAFB>\n\
			<div align=left>"+(pctwrites/100*Missrate*(Number(misspen)+Number(memw)))+"</div></td></tr>";
		return temp;
	}
}
function ana(form)
{
	sum=0;
	cachesize=form.cachesize.value;
	assoc=form.assoc.value;
	blocksize=form.blocksize.value;
	words=form.blocksize.value/4;
	pctwrites=form.pctwrites.value;
	pctdirty=form.pctdirty.value;
	misspen=form.misspen.value;
	hittime=form.hittime.value;
	memw=form.memw.value;
	apolicy=form.apolicy.value;
	wpolicy=form.wpolicy.value;
	Missrate=missrate(cachesize,assoc,blocksize);
	Hitrate=1-Missrate;
	parent.frames[1].document.open();	
	Upper="<HTML>\n<HEAD>\n<TITLE>OUTPUT</TITLE>\n</HEAD>\n<BODY bgcolor=#CCFFFF>";
	var Middle,Middle1,Middle2;
	Middle="<div align=center><table width=96% border=1 height=480 bgcolor=#CCFFFF>\n\
	<tr bgcolor=#B4D6F8><td colspan=6 height=13>\n\
	<div align=center><font size=5><u>Cache Time Analysis</u></font>\n\
	</div></td></tr>\n\
	<tr><td width=16% height=20 bgcolor=#B4D6F8>\n\
	<div align=right><b>Cache Specification :</b></div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Cache Size = "+cachesize+" KB</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Associativity = "+assoc+"</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Words / Block = "+words+"</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Hit Rate = "+Hitrate+"</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Miss Rate = "+Missrate+"</div></td></tr>\n\
	<tr bgcolor=#FFFFCC><td width=16% height=20 bgcolor=#B4D6F8>\n\
	<div align=right><b>Parameters :</b></div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>% Writes = "+pctwrites+"%</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>% Dirty = "+pctdirty+"%</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Hit Time = "+hittime+" </div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Mem Write = "+memw+"</div></td>\n\
	<td width=16% height=20 bgcolor=#D5E8FB>\n\
	<div align=center>Miss Penalty = "+misspen+"</div></td></tr>\n\
	<tr><td height=20 bgcolor=#B4D6F8>\n\
	<div align=right><b>Write Policies :</b></div></td>";
	if(wpolicy==1)
	{
		Middle+="<td height=20 bgcolor=#D5E8FB>\n<div align=center> Write Back </div></td>";
	}
	else
	{
		Middle+="<td height=20 bgcolor=#D5E8FB>\n<div align=center> Write Through </div></td>";
	}
	if(apolicy==1)
	{
		Middle+="<td height=20 bgcolor=#D5E8FB>\n<div align=center> No Write Allocate </div></td>";
	}
	else
	{
		Middle+="<td height=20 bgcolor=#D5E8FB>\n<div align=center> Allocate on Write Miss </div></td>";
	}
	Middle+="<td width=16% height=20 bgcolor=#D5E8FB>\n\
		<div align=center>-</div></td>\n\
		<td width=16% height=20 bgcolor=#D5E8FB>\n\
		<div align=center>-</div></td>\n\
		<td width=16% height=20 bgcolor=#D5E8FB>\n\
		<div align=center>-</div></td></tr>";
	if(wpolicy==1)
	{
		Middle+=W1(pctwrites,pctdirty,misspen,hittime,memw,Missrate,Hitrate,apolicy);
		sum+=((1-pctwrites/100)*Hitrate*hittime)+((1-pctwrites/100)*Missrate*(Number(misspen)+
		Number(hittime)+Number(pctdirty)/100*Number(misspen)))+(pctwrites/100*Hitrate*hittime);
		if(apolicy==1)
		{
			sum+=pctwrites/100*Missrate*misspen;
		}
		else
		{
			sum+=pctwrites/100*Missrate*(Number(misspen)+Number(hittime)+Number(pctdirty/100)*Number(misspen));
		}
	}
	else
	{
		Middle+=W2(pctwrites,pctdirty,misspen,hittime,memw,Missrate,Hitrate,apolicy);
		sum+=((1-pctwrites/100)*Hitrate*hittime)+((1-pctwrites/100)*Missrate*(Number(misspen)+Number(hittime)))+
		(pctwrites/100*Hitrate*memw);
		if(apolicy==1)
		{
			sum+=pctwrites/100*Missrate*memw;
		}
		else
		{
			sum+=pctwrites/100*Missrate*(Number(misspen)+Number(memw));
		}
	}
	 /*if(form.wpolicy.value==1)
	 {
		 Middle1=WB(pctwrites,pctdirty,misspen,hittime,Missrate,Hitrate);
		 sum+=((1-pctwrites/100)*Hitrate*hittime)+((1-pctwrites/100)*Missrate*(Number(misspen)+
		 Number(hittime)+Number(pctdirty)/100*Number(misspen)))+(pctwrites/100*Hitrate*hittime);
	 }
	 else
	 {
		 Middle1=WT(pctwrites,pctdirty,misspen,hittime,memw,Missrate,Hitrate);
		 sum+=((1-pctwrites/100)*Hitrate*hittime)+((1-pctwrites/100)*Missrate*(Number(misspen)+Number(hittime)))+
		 (pctwrites/100*Hitrate*memw);
	 }
	 if(form.apolicy.value==1)
	 {
		 Middle2=NWA(pctwrites,Missrate,misspen);
		 sum+=pctwrites/100*Missrate*misspen;
	 }
	 else
	 {
		 Middle2=MOA(pctwrites,Missrate,misspen,hittime,pctdirty);
		 sum+=pctwrites/100*Missrate*(Number(misspen)+Number(hittime)+Number(pctdirty/100)*Number(misspen));
	 }*/
	 Middle+="<tr><td height=40 colspan=5 bgcolor=#D5DAFB>\n\
		<div align=right><b>Total Average Memory Access Time ( Avg. clocks per memory access) = </b></div></td>\n\
		<td width=16% height=40 bgcolor=#D5DAFB>\n\
		<div align=left>"+sum+"</div></td></tr></table></div>";
	 Footer="</BODY></HTML>";
	 parent.frames[1].document.open();
	 parent.frames[1].document.write(Upper);
	 parent.frames[1].document.write(Middle);
	 //parent.frames[1].document.write(Middle1);
	 //parent.frames[1].document.write(Middle2);
	 parent.frames[1].document.write(Footer);
	 parent.frames[1].document.close();
}
