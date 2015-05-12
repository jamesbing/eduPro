package com.haoxi.admin.bean;

import java.util.Calendar;

import com.haoxi.admin.util.IOUtil;

public class TimeContainer {
	private int year;
	private int month;
	private int day;
	private int hour;
	private int minute;
	private int second;
	
	public TimeContainer(int year, int month, int day, int hour, int minute, int second){
		this.year = year;
		this.month = month;
		this.day = day;
		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}
	
	public TimeContainer(){
		
	}
	
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public int getHour() {
		return hour;
	}
	public void setHour(int hour) {
		this.hour = hour;
	}
	public int getMinute() {
		return minute;
	}
	public void setMinute(int minute) {
		this.minute = minute;
	}
	public int getSecond() {
		return second;
	}
	public void setSecond(int second) {
		this.second = second;
	}
	
	public int getTimeMark(){
		return second*1 + minute*10 + hour*100 + day*1 + month*10 + year*100;
	}
}
