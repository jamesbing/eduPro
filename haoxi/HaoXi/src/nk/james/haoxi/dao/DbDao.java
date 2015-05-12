package nk.james.haoxi.dao;

/**
 * @author James
 * @time 2014-9-26 ÏÂÎç3:30:38
 */
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Connection;

public class DbDao {
	private Connection conn;

	private String driver;
	private String url;
	private String username;
	private String pass;
	public DbDao(){
		
	}
	
	public DbDao(String driver, String url, String userName, String pass){
		this.driver = driver;
		this.url = url;
		this.username = userName;
		this.pass = pass;
	}
	
	//following are the getter and setter of each parameter
	public String getDriver() {
		return driver;
	}
	public void setDriver(String driver) {
		this.driver = driver;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	
	//get the connection of the DB
	public Connection getConnection() throws Exception{
		if(conn == null){
			Class.forName(this.driver);
			conn = DriverManager.getConnection(url,username,this.pass);
		}
		return conn;
	}
	
	//insert a record into the database
	public boolean insert(String sql, Object...args) throws Exception{
		PreparedStatement pstmt = getConnection().prepareStatement(sql);
		for(int i = 0; i < args.length; i++){
			pstmt.setObject(i+1, args[i]);
		}
		if(pstmt.executeUpdate()!=1){
			return false;
		}
		return true;
	}
	
	//execute query
	public ResultSet query(String sql, Object...args) throws Exception{
		PreparedStatement pstmt = getConnection().prepareStatement(sql);
		for(int i = 0; i < args.length; i++){
			pstmt.setObject(i+1, args[i]);
		}
		return pstmt.executeQuery();
	}
	
	//modify database
	public void modify(String sql, Object...args) throws Exception{
		PreparedStatement pstmt = getConnection().prepareStatement(sql);
		for(int i = 0; i < args.length; i++){
			pstmt.setObject(i + 1, args[i]);
		}
		pstmt.executeUpdate();
		pstmt.close();  
	}
	
	//close the connection of the using db
	public void closeConn()throws Exception{
		if(conn!=null&&!conn.isClosed()){
			conn.close();
		}
		
	}
}
