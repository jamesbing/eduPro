package nankai.dym.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.UnavailableException;
import javax.servlet.http.HttpServlet;

/**
 * <p>;Title: 中文问题</p>;
 * <p>;Description: 中文问题</p>;
 * <p>;Copyright: Copyright (c) 2002 writeonce</p>;
 * <p>;Company: </p>;
 * @author writeonce
 * @version 1.0
 */

public class EncodingFilter extends HttpServlet implements Filter {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private FilterConfig filterConfig;
	protected String encoding = null;
	protected boolean ignore = true;
	
	public void init(FilterConfig filterConfig) throws ServletException{
		this.setFilterConfig(filterConfig);
	}
	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
		throws IOException, ServletException{
		request.setCharacterEncoding("GBK");
		response.setCharacterEncoding("GBK");
		chain.doFilter(request, response);
	}
	
	public void destroy(){
		
	}

	public FilterConfig getFilterConfig() {
		return filterConfig;
	}

	public void setFilterConfig(FilterConfig filterConfig) {
		this.filterConfig = filterConfig;
	}
}