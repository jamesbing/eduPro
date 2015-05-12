package nankai.dym.util;

import java.io.IOException;
import java.util.Calendar;

import nankai.dym.bean.TimeContainer;


public class IOUtil {
	
	public static String getUsualTime(String time){
		String usualTime = null;
		TimeContainer tc = getTime(time);
		usualTime = tc.getYear()+"/"+tc.getMonth()+"/"+tc.getDay()+","+tc.getHour()+":"+tc.getMinute()+":"+tc.getSecond();
		return usualTime;
	}
	
	public static TimeContainer getCurrentTimeContainer(){
		 Calendar now = Calendar.getInstance();
			String Currenttime = "";
		 int monthModify = now.get(Calendar.MONTH) + 1;
		 Currenttime = now.get(Calendar.YEAR)+"-"+monthModify+"-"+now.get(Calendar.DATE)+
				 "-"+now.get(Calendar.HOUR_OF_DAY)+"-"+now.get(Calendar.MINUTE)+"-"+
				 now.get(Calendar.SECOND);
		TimeContainer nowTime = IOUtil.getTime(Currenttime);
		return nowTime;
	}
	
	public static TimeContainer getTime(String time){
		String tempTime = null;
		tempTime = time;
		TimeContainer tc = null;
		if(tempTime != null){
		String data [] = time.split("-");
		int year = Integer.parseInt(data[0]);
		int month = Integer.parseInt(data[1]);
		int day = Integer.parseInt(data[2]);
		int hour = Integer.parseInt(data[3]);
		int minute = Integer.parseInt(data[4]);
		int second = Integer.parseInt(data[5]);
		tc = new TimeContainer(year, month,day,hour,minute,second);
		}else{
			tc = new TimeContainer(2000,1,1,0,0,0);
		}
		return tc;
	}
	
//	public static void writeToExcel(String destination) throws IOException, WriteException{
//		//打开文件   
//	    WritableWorkbook book= Workbook.createWorkbook(new File(destination));   
//		try   
//	    {   
//	    
//	    //生成名为“第一页”的工作表，参数0表示这是第一页   
//	    WritableSheet sheet=book.createSheet("第一页",0);   
//	    //在Label对象的构造子中指名单元格位置是第一列第一行(0,0)   
//	    //以及单元格内容为test   
//	    Label label=new Label(0,0,"测试");   
//	    //将定义好的单元格添加到工作表中   
//	    sheet.addCell(label);    
//	    jxl.write.Number number = new jxl.write.Number(1,0,789.123);   
//	    sheet.addCell(number);   
//	    jxl.write.Label s=new jxl.write.Label(1, 2, "三十三");  
//	    sheet.addCell(s);   
//	    //写入数据并关闭文件   
//	    book.write();   
//	    }  
//	    catch(Exception e)   
//	    {   
//	        System.out.println(e);   
//	    }finally{
//		    book.close(); //最好在finally中关闭，此处仅作为示例不太规范  
//	    }
//	}
}
