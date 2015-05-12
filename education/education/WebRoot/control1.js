function show_help()
{
//	parent.frames[1].document.open("help_CBR");
//	parent.frames[1]=open("help_CBR");
	parent.frames[1].location.href="help_CBR.html";
}
function RndNum(n){
	temp=Math.round(Math.random()*10000)%n;
	return temp;
}
function inLRU(cache,msaddr,length,sizeb,assoc)
{
	var i,j,tempr,hit=n=0;
	while(n<length)
	{
		if(assoc==1)
			tempr=0;
		else{tempr=msaddr.value[n]%assoc;}
		//parent.frames[1].document.write(' '+sizeb/assoc+' ');
		//if hit
		for(i=0;i<sizeb/assoc;i++)	
		{
			if(msaddr.value[n]==cache.addr[tempr][i])
			{
				hit=1;
				cache.color[tempr][i]=msaddr.color[n]=3;
				cache.time[tempr][i]=0;
				for(j=0;j<sizeb/assoc;j++){
					if(cache.color[tempr][j]!=0)
						cache.time[tempr][j]++;
				}
				break;
			}
		}
		//not hit,if there is a free block,then find one to store and mark the time it hasn't been used
		if(hit==0)
		{
			for(i=0;i<sizeb/assoc;i++)	
			{
				if(cache.color[tempr][i]==0)
				{
					cache.color[tempr][i]=msaddr.color[n]=1;
					cache.addr[tempr][i]=msaddr.value[n];
					for(j=0;j<=i;j++)
						cache.time[tempr][j]++;
					break;
				}
			}
			//if not,replace rhe block in LRU rule.
			if(i==sizeb/assoc)
			{
				j=0;
				for(i=1;i<sizeb/assoc;i++)
				{
					if(cache.time[tempr][j]<cache.time[tempr][i])
						j=i;
				}
				msaddr.repla[n]=cache.addr[tempr][j];
				cache.addr[tempr][j]=msaddr.value[n];
				cache.color[tempr][j]=msaddr.color[n]=2;
				cache.time[tempr][j]=0;
				for(i=0;i<sizeb/assoc;i++)
						cache.time[tempr][i]++;
			}
		}
		hit=0;
		n++;
	}
}
function inLRU1(cache,msaddr1,length1,sizeb,assoc)
{
	var i,j,tempr,hit=n=0;
	while(n<length1)
	{
		if(assoc==1)
			tempr=0;
		else{tempr=msaddr1.value[n]%assoc;}
		//parent.frames[1].document.write(' '+sizeb/assoc+' ');
		//if hit
		for(i=0;i<sizeb/assoc;i++)	
		{
			if(msaddr1.value[n]==cache.addr[tempr][i])
			{
				hit=1;
				cache.color[tempr][i]=msaddr1.color[n]=6;
				cache.time[tempr][i]=0;
				for(j=0;j<sizeb/assoc;j++){
					if(cache.color[tempr][j]!=0)
						cache.time[tempr][j]++;
				}
				break;
			}
		}
		//not hit,if there is a free block,then find one to store and mark the time it hasn't been used
		if(hit==0)
		{
			for(i=0;i<sizeb/assoc;i++)	
			{
				if(cache.color[tempr][i]==0)
				{
					cache.color[tempr][i]=msaddr1.color[n]=4;
					cache.addr[tempr][i]=msaddr1.value[n];
					for(j=0;j<=i;j++)
						cache.time[tempr][j]++;
					break;
				}
			}
			//if not,replace rhe block in LRU rule.
			if(i==sizeb/assoc)
			{
				j=0;
				for(i=1;i<sizeb/assoc;i++)
				{
					if(cache.time[tempr][j]<cache.time[tempr][i])
						j=i;
				}
				msaddr1.repla[n]=cache.addr[tempr][j];
				cache.addr[tempr][j]=msaddr1.value[n];
				cache.color[tempr][j]=msaddr1.color[n]=5;
				cache.time[tempr][j]=0;
				for(i=0;i<sizeb/assoc;i++)
						cache.time[tempr][i]++;
			}
		}
		hit=0;
		n++;
	}
}
function inFIFO(cache,msaddr,length,sizeb,assoc)
{
	var i,j,tempr,hit=n=0;
	while(n<length)
	{
		if(assoc==1)
			tempr=0;
		else{tempr=msaddr.value[n]%assoc;}
		//if hit
		for(i=0;i<sizeb/assoc;i++)	
		{
			if(msaddr.value[n]==cache.addr[tempr][i])
			{
				hit=1;
				cache.color[tempr][i]=msaddr.color[n]=3;
				//cache.time[tempr][i]=0;
				/*for(j=0;j<sizeb/assoc;j++){
					if(cache.color[tempr][j]!=0)
						cache.time[tempr][j]++;
				}*/
				break;
			}
		}
		if(hit==0)//not hit,if there is a free block,then find one to store and mark the time it hasn't been used
		{			
			for(i=0;i<sizeb/assoc;i++)	
			{
				if(cache.color[tempr][i]==0)
				{
					cache.color[tempr][i]=msaddr.color[n]=1;
					cache.addr[tempr][i]=msaddr.value[n];
					for(j=0;j<=i;j++)
						cache.time[tempr][j]++;
					break;
				}
			}
			//if not,replace rhe block in FIFO rule.
			if(i==sizeb/assoc)
			{
				j=0;
				for(i=1;i<sizeb/assoc;i++)
				{
					if(cache.time[tempr][j]<cache.time[tempr][i])
						j=i;
				}
				cache.color[tempr][j]=msaddr.color[n]=2;
				msaddr.repla[n]=cache.addr[tempr][j];
				cache.addr[tempr][j]=msaddr.value[n];
				cache.time[tempr][j]=0;
				for(i=0;i<sizeb/assoc;i++)
					cache.time[tempr][i]++;
			}
		}
		hit=0;
		n++;
	}
}
function inFIFO1(cache,msaddr1,length1,sizeb,assoc)
{
	var i,j,tempr,hit=n=0;
	while(n<length1)
	{
		if(assoc==1)
			tempr=0;
		else{tempr=msaddr1.value[n]%assoc;}
		//if hit
		for(i=0;i<sizeb/assoc;i++)	
		{
			if(msaddr1.value[n]==cache.addr[tempr][i])
			{
				hit=1;
				cache.color[tempr][i]=msaddr1.color[n]=6;
				//cache.time[tempr][i]=0;
				/*for(j=0;j<sizeb/assoc;j++){
					if(cache.color[tempr][j]!=0)
						cache.time[tempr][j]++;
				}*/
				break;
			}
		}
		if(hit==0)//not hit,if there is a free block,then find one to store and mark the time it hasn't been used
		{			
			for(i=0;i<sizeb/assoc;i++)	
			{
				if(cache.color[tempr][i]==0)
				{
					cache.color[tempr][i]=msaddr1.color[n]=4;
					cache.addr[tempr][i]=msaddr1.value[n];
					for(j=0;j<=i;j++)
						cache.time[tempr][j]++;
					break;
				}
			}
			//if not,replace rhe block in FIFO rule.
			if(i==sizeb/assoc)
			{
				j=0;
				for(i=1;i<sizeb/assoc;i++)
				{
					if(cache.time[tempr][j]<cache.time[tempr][i])
						j=i;
				}
				cache.color[tempr][j]=msaddr1.color[n]=5;
				msaddr1.repla[n]=cache.addr[tempr][j];
				cache.addr[tempr][j]=msaddr1.value[n];
				cache.time[tempr][j]=0;
				for(i=0;i<sizeb/assoc;i++)
					cache.time[tempr][i]++;
			}
		}
		hit=0;
		n++;
	}
}
function inRAND(cache,msaddr,length,sizeb,assoc)
{
	var i,j,tempr,hit=n=0;
	while(n<length)
	{
		if(assoc==1)
			tempr=0;
		else{tempr=msaddr.value[n]%assoc;}
		//if hit
		for(i=0;i<sizeb/assoc;i++)	
		{
			if(msaddr.value[n]==cache.addr[tempr][i])
			{
				hit=1;
				cache.color[tempr][i]=msaddr.color[n]=3;
				/*cache.time[tempr][i]=0;
				for(j=0;j<=i;j++)
					cache.time[tempr][j]++;*/
				break;
			}
		}
		if(hit==0)//not hit,if there is a free block,then find one to store and mark the time it hasn't been used
		{
			for(i=0;i<sizeb/assoc;i++)	
			{
				if(cache.color[tempr][i]==0)
				{
					cache.color[tempr][i]=msaddr.color[n]=1;
					cache.addr[tempr][i]=msaddr.value[n];
					/*for(j=0;j<=i;j++)
						cache.time[tempr][j]++;*/
					break;
				}
			}
			//if not,replace rhe block in RAND rule.
			if(i==sizeb/assoc)
			{
				j=RndNum(i);
				/*for(i=1;i<sizeb/assoc;i++)
					{
					if(cache.time[tempr][j]<cache.time[tempr][i])
						j=i;
				}*/
				cache.color[tempr][j]=msaddr.color[n]=2;
				msaddr.repla[n]=cache.addr[tempr][j];
				cache.addr[tempr][j]=msaddr.value[n];
				//cache.time[tempr][j]=0;
				/*for(i=0;i<=sizeb/assoc;i++)
						cache.time[tempr][i]++;*/
			
			}
		}
		hit=0;
		n++;
	}
}
function inRAND1(cache,msaddr1,length1,sizeb,assoc)
{
	var i,j,tempr,hit=n=0;
	while(n<length1)
	{
		if(assoc==1)
			tempr=0;
		else{tempr=msaddr1.value[n]%assoc;}
		//if hit
		for(i=0;i<sizeb/assoc;i++)	
		{
			if(msaddr1.value[n]==cache.addr[tempr][i])
			{
				hit=1;
				cache.color[tempr][i]=msaddr.color[n]=6;
				/*cache.time[tempr][i]=0;
				for(j=0;j<=i;j++)
					cache.time[tempr][j]++;*/
				break;
			}
		}
		if(hit==0)//not hit,if there is a free block,then find one to store and mark the time it hasn't been used
		{
			for(i=0;i<sizeb/assoc;i++)	
			{
				if(cache.color[tempr][i]==0)
				{
					cache.color[tempr][i]=msaddr1.color[n]=4;
					cache.addr[tempr][i]=msaddr1.value[n];
					/*for(j=0;j<=i;j++)
						cache.time[tempr][j]++;*/
					break;
				}
			}
			//if not,replace rhe block in RAND rule.
			if(i==sizeb/assoc)
			{
				j=RndNum(i);
				/*for(i=1;i<sizeb/assoc;i++)
					{
					if(cache.time[tempr][j]<cache.time[tempr][i])
						j=i;
				}*/
				cache.color[tempr][j]=msaddr1.color[n]=5;
				msaddr1.repla[n]=cache.addr[tempr][j];
				cache.addr[tempr][j]=msaddr1.value[n];
				//cache.time[tempr][j]=0;
				/*for(i=0;i<=sizeb/assoc;i++)
						cache.time[tempr][i]++;*/
			
			}
		}
		hit=0;
		n++;
	}
}
function drawChart(cache,trace,sizeb,assoc,polic,usehex,cycles,time,shotags,multi)
{
	var i,j,colspan,rowspan,cir,rpolic;
	var data='';
	if(sizeb/assoc>=128)
	{	colspan=16;}
	else if(sizeb/assoc>=32)
	{	colspan=8;}
	else
	{	colspan=sizeb/assoc;}
	rowspan=(sizeb/assoc)/colspan;
	
	
	var height=rowspan*assoc+1;
	
	var color=0;
	
	var toMiss=(trace.comMiss)+(trace.conMiss);
	var missrate=(toMiss/trace.value.length*100).toFixed(2);
	var hitrate=(100-missrate).toFixed(2);
	if(isNaN(missrate)==true)
	{
		hitrate=0;
		missrate=0;
	}
	if(cycles==1)
	{
		cir='';
	}
	else
	{
		 cir='-Cycle #'+time.toString(); 
	}
	if(polic==1)
		{rpolic=' LRU ';}
	else if(polic==2)
		{rpolic=' FIFO ';}
	else {rpolic=' RAND ';}
	
	var task='';
	if(multi==1)
	{
		if(time%2==1)
			task=' , - Multi-tasking:  Task A ';
		else if(time%2==0)
			task=' , - Multi-tasking:  Task B ';
	}
	var title='';
	if(assoc==1)
	{
		title='Fully associative cache';
	}
	else if(sizeb==assoc)
	{
		title='Direct-mapped cache';
	}
	else
	{	title=sizeb+' Block, '+assoc+'-way set-associative  cache';}
	var tag='';
	if(shotags==1)
	{
		tag=' - tags shown in red';
	}
	data+='<div align="left"><p><b>Cache Contents:  '+rpolic+' replacement policy; '+cir+task+'</b></p></div>';
	data+='<div align="center">\n\
		<table border="1" height='+height+' cellpadding="0"\
		cellspacing="0" bgcolor="#BBFFFF" bordercolor="#0000CC">';
	data+='<tr><td width="5%" rowspan="1" bgcolor="#BBFFFF" bordercolor="#0000CC">\n\
		<p><b>Set#</b></p></td>\n\
		<td colspan='+colspan+' bordercolor="#0000CC" bgcolor="#BBFFFF">\n\
		<div align="center"><b> '+title+tag+'</b></div></td></tr>';
		
//------------------------------------------------------------------------------------draw the cache
	var addrtemp;
	
	var n=col=row=i=j=0;
	while(n<assoc)
	{
		data+='<tr><td rowspan='+rowspan+' width="5%" bgcolor="#CCFFFF">\n\
				<div align="center">'+n+'</div></td>';
		for(row=0;row<rowspan;row++)
		{
			
			for(col=0;col<colspan;col++)
			{
				if(cache.color[n][j]==0)
				{
					color='#E0E6E9';
					cache.addr[n][j]='-';
				}
				else if(cache.color[n][j]==1)
				{
					color='#9999FF';
				}
				else if(cache.color[n][j]==2)
				{
					if(assoc==1)
					{
						color='#FFFF99';
					}
					else
					{	color='#FF9999"';}
				}
				else if(cache.color[n][j]==3)
				{	color='#99FF99';}
				else if(cache.color[n][j]==4)
				{
					color='pink';
				}
				else if(cache.color[n][j]==5)
				{
					if(assoc==1)
					{
						color='yellow';
					}	
					else
					{	color='red';}
				}
				else if(cache.color[n][j]==6)
				{	color='green';}
				
				if(shotags==1&&cache.color[n][j]!=0)
				{
					var tagval=Math.floor(cache.addr[n][j]/assoc).toString(2);
					var len = tagval.toString().length;
    				while(len < 8) {
       					 tagval = '0' + tagval;
        						len++;
    				}
					cache.tag[n][j]=' - '+tagval;//.toString(2);
				}
				else
					cache.tag[n][j]='';
				if(usehex==1)
				{
					addrtemp = cache.addr[n][j].toString(16).toLocaleUpperCase();
				}
				else
					addrtemp = cache.addr[n][j];
				
				data+='<td width='+(95/colspan).toFixed(2)+'% bgcolor='+color+'>\
				<div align="center">'+addrtemp+'<font size="2" color="#990033">'+cache.tag[n][j]+'</font></div></td>';
				if((j+1)%colspan==0)
				{	
					if(j!=colspan-1)
						data+='</tr>\n<tr>';
					else
						data+='</tr>';
				}
				if(j==sizeb/assoc-1)
					j=-1;
				j++;
			}
		}
		n++
	}
		{	
		}
	if(multi==0)
	{
		data+='</table></div>\n\
			<div align="center"></div><div align="center">\n\
			<table width="90%" border="1" height="20" cellpadding="0" cellspacing="0" bgcolor="#CCFFFF" 		bordercolor="#CCFFFF" bordercolorlight="#CCFFFF" bordercolordark="#0000CC">\n\
  			<tr>\n\
    		<td width="20%" bgcolor="#CCFFFF" bordercolor="#0000FF">\n\
      		<div align="center"><b>COLOR KEY:</b></div>\n\
   			</td> \n\
    		<td width="20%" bgcolor="#9999FF" bordercolor="#9999FF"> \n\
     		<div align="center">Compulsory Miss</div> \n\
    		</td> \n\
    		<td width="20%" bgcolor="#FFFF99" bordercolor="#FFFFCC">\n\
      		<div align="center">Capacity Miss</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor=#FF9999" bordercolor="#FFFFCC">\n\
      		<div align="center">Conflict Miss</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor="#99FF99" bordercolor="#0000FF">\n\
      		<div align="center">Cache Hit</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor="#E0E6E9" bordercolor="#0000FF">\n\
      		<div align="center">Unused</div>\n\
    		</td>\n\
  			</tr>\n</table>\n';
		data+='<div align="left"><p><b>Cache Query Results:  '+cir+task;
		data+='<table width="100%" border="1" bgcolor="#CCFFFF"> \n\
			<tr><td width="35%" height="33%" bgcolor="#9999FF"> \n\
			<div align="right"><b>Compulsory Misses :</b></div></td> \n\
			<td width="15%" height="33%" bgcolor="#99FFFF"><div align="center"><b>'+trace.comMiss+'</b></td> \n\
			<td width="35%" height="33%" bgcolor="#CCDDFF"><div align="right"><b>Total Cache Queries :</b></div></td>\n\
			<td width="15%" height="33%" bgcolor="#99FFFF">\n\
			<div align="center" bgcolor="#99FFFF"><b>'+trace.value.length+'</b></div></td></tr>\n\
			<tr>\n\
			<td width="35%" bgcolor="#FFFF99">\n\
			<div align="right"><b>Capacity Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+trace.capMiss+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"><div align="right"><b> Total Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+toMiss+'</b></div></td></tr>\n\
			<tr>\n\
			<td width="35%" bgcolor=#FF9999"><div align="right"><b>Conflict Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+trace.conMiss+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"> <div align="right"><b>Miss Rate :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"> <div align="center"><b>'+missrate+' %</b></div></td></tr>\n\
			<tr><td width="35%" bgcolor="#99FF99"><div align="right"><b>Cache Hits</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"> <div align="center"><b>'+trace.caHit+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"><div align="right"><b>Hit Rate :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+hitrate+' %</b></div></td></tr>\n\
			</table></div>';
	}
	else if(time%2==0)
	{
		data+='</table></div>\n\
			<div align="center"></div><div align="center">\n\
			<table width="90%" border="1" height="20" cellpadding="0" cellspacing="0" bgcolor="#CCFFFF" 		bordercolor="#CCFFFF" bordercolorlight="#CCFFFF" bordercolordark="#0000CC">\n\
  			<tr>\n\
    		<td width="20%" bgcolor="#CCFFFF" bordercolor="#0000FF">\n\
      		<div align="center"><b>COLOR KEY:</b></div>\n\
   			</td> \n\
    		<td width="20%" bgcolor=pink bordercolor="#9999FF"> \n\
     		<div align="center">Compulsory Miss</div> \n\
    		</td> \n\
    		<td width="20%" bgcolor=yellow bordercolor="#FFFFCC">\n\
      		<div align="center">Capacity Miss</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor=red bordercolor="#FFFFCC">\n\
      		<div align="center">Conflict Miss</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor=green bordercolor="#0000FF">\n\
      		<div align="center">Cache Hit</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor="#E0E6E9" bordercolor="#0000FF">\n\
      		<div align="center">Unused</div>\n\
    		</td>\n\
  			</tr>\n</table>\n';
		data+='<div align="left"><p><b>Cache Query Results:  '+cir+task;
		data+='<table width="100%" border="1" bgcolor="#CCFFFF"> \n\
			<tr><td width="35%" height="33%" bgcolor="pink"> \n\
			<div align="right"><b>Compulsory Misses :</b></div></td> \n\
			<td width="15%" height="33%" bgcolor="#99FFFF"><div align="center"><b>'+trace.comMiss+'</b></td> \n\
			<td width="35%" height="33%" bgcolor="#CCDDFF"><div align="right"><b>Total Cache Queries :</b></div></td>\n\
			<td width="15%" height="33%" bgcolor="#99FFFF">\n\
			<div align="center" bgcolor="#99FFFF"><b>'+trace.value.length+'</b></div></td></tr>\n\
			<tr>\n\
			<td width="35%" bgcolor=yellow>\n\
			<div align="right"><b>Capacity Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+trace.capMiss+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"><div align="right"><b> Total Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+toMiss+'</b></div></td></tr>\n\
			<tr>\n\
			<td width="35%" bgcolor=red><div align="right"><b>Conflict Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+trace.conMiss+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"> <div align="right"><b>Miss Rate :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"> <div align="center"><b>'+missrate+' %</b></div></td></tr>\n\
			<tr><td width="35%" bgcolor=green><div align="right"><b>Cache Hits</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"> <div align="center"><b>'+trace.caHit+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"><div align="right"><b>Hit Rate :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+hitrate+' %</b></div></td></tr>\n\
			</table></div>';
	}
	else
	{
		data+='</table></div>\n\
			<div align="center"></div><div align="center">\n\
			<table width="90%" border="1" height="20" cellpadding="0" cellspacing="0" bgcolor="#CCFFFF" 		bordercolor="#CCFFFF" bordercolorlight="#CCFFFF" bordercolordark="#0000CC">\n\
  			<tr>\n\
    		<td width="20%" bgcolor="#CCFFFF" bordercolor="#0000FF">\n\
      		<div align="center"><b>COLOR KEY:</b></div>\n\
   			</td> \n\
    		<td width="20%" bgcolor="#9999FF" bordercolor="#9999FF"> \n\
     		<div align="center">Compulsory Miss</div> \n\
    		</td> \n\
    		<td width="20%" bgcolor="#FFFF99" bordercolor="#FFFFCC">\n\
      		<div align="center">Capacity Miss</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor=#FF9999" bordercolor="#FFFFCC">\n\
      		<div align="center">Conflict Miss</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor="#99FF99" bordercolor="#0000FF">\n\
      		<div align="center">Cache Hit</div>\n\
    		</td>\n\
    		<td width="20%" bgcolor="#E0E6E9" bordercolor="#0000FF">\n\
      		<div align="center">Unused</div>\n\
    		</td>\n\
  			</tr>\n</table>\n';
		data+='<div align="left"><p><b>Cache Query Results:  '+cir+task;
		data+='<table width="100%" border="1" bgcolor="#CCFFFF"> \n\
			<tr><td width="35%" height="33%" bgcolor="#9999FF"> \n\
			<div align="right"><b>Compulsory Misses :</b></div></td> \n\
			<td width="15%" height="33%" bgcolor="#99FFFF"><div align="center"><b>'+trace.comMiss+'</b></td> \n\
			<td width="35%" height="33%" bgcolor="#CCDDFF"><div align="right"><b>Total Cache Queries :</b></div></td>\n\
			<td width="15%" height="33%" bgcolor="#99FFFF">\n\
			<div align="center" bgcolor="#99FFFF"><b>'+trace.value.length+'</b></div></td></tr>\n\
			<tr>\n\
			<td width="35%" bgcolor="#FFFF99">\n\
			<div align="right"><b>Capacity Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+trace.capMiss+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"><div align="right"><b> Total Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+toMiss+'</b></div></td></tr>\n\
			<tr>\n\
			<td width="35%" bgcolor=#FF9999"><div align="right"><b>Conflict Misses :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+trace.conMiss+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"> <div align="right"><b>Miss Rate :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"> <div align="center"><b>'+missrate+' %</b></div></td></tr>\n\
			<tr><td width="35%" bgcolor="#99FF99"><div align="right"><b>Cache Hits</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"> <div align="center"><b>'+trace.caHit+'</b></div></td>\n\
			<td width="35%" bgcolor="#CCDDFF"><div align="right"><b>Hit Rate :</b></div></td>\n\
			<td width="15%" bgcolor="#99FFFF"><div align="center"><b>'+hitrate+' %</b></div></td></tr>\n\
			</table></div>';
	}
	
	data+='<hr size="1">';
	return data;
}
function drawTrace(trace,assoc,usehex)
{
	var color,repla,i,time=trace.value.length;	
	var data='<div align="left"><p><b>Cache Query Sequence Trace</b></p></div><div align="center">\n\
	<table width="100%" border="1" height="20"><tr>\n\
	<td colspan="16" height="20" bgcolor="#BBFFFF">\n\
	<div align="center">Cache Query Sequence Trace <font color="#0000FF">\n\
	<font size ="-1">  Address data replaced on miss shown in blue subscript</font</font></div></td></tr>';
	if(time!=0)
		data+='<tr>\n';
	
	for(i=0;i<time;i++)
	{
		if(i!=0&&i%16==0)
			data+='</tr><tr>\n';
		if(trace.color[i]==1)
		{
			color='#9999FF';
		}
		else if(trace.color[i]==2)
		{
				if(assoc==1)
				{
					color='#FFFF99';
				}
				else
				{	color='#FF9999"';}
		}
		else if(trace.color[i]==3)
		{	color='#99FF99';}
		else if(trace.color[i]==4)
		{
			color='pink';
		}
		else if(trace.color[i]==5)
		{
				if(assoc==1)
				{
					color='yellow';
				}
				else
				{	color='red';}
		}
		else if(trace.color[i]==6)
		{	color='green';}
		
		if(usehex==1)
		{
			trace.value[i]=trace.value[i].toString(16).toLocaleUpperCase();
			if(typeof(trace.repla[i]) == 'undefined')
				repla = '';
			else
				repla = '   -'+trace.repla[i].toString(16).toLocaleUpperCase();
		}
		else
		{
			if(typeof(trace.repla[i]) == 'undefined')
				repla = '';
			else
				repla = '   -'+trace.repla[i].toString();
		}
		/*if (typeof(trace.repla[i]) == 'undefined')
		{
			repla=' ';
		}
		else if(usehex==1)
		{
			trace.value[i]=trace.value[i].toString(16).toLocaleUpperCase();
			repla='   -'+trace.repla[i].toString(16).toLocaleUpperCase();
		}
		else
		{
			repla='   -'+trace.repla[i].toString();
		}*/
		data+='<td height="20" width="40" bgcolor='+color+' ><div><p align="center"><font color="#000000">'+(trace.value[i])+'</font><font color="#0000FF"><font size="-1">'+repla+'</font></font></p></div></td>';
	}
	return data;
}
function test(b)
{a=5;
b.value[0]=a;}
function show_result(form)
{
	var i,j,k,length=length1=0,time;
	var Upper=Middle=Fotter='';
	var sizeb=Number(form.sizeb.value);
	var assoc=Number(form.assoc.value);
	var long=Number(form.long.value);
	var instring=form.instring.value;
	var instring1=form.instring1.value;
	var polic=Number(form.polic.value);
	var cycles=Number(form.cycles.value);
	rand=form.rand.checked;
	multi=form.multi.checked;
	repeat=form.repeat.checked;
	limit=form.limit.checked;
	shotags=form.shotags.checked;
	usehex=form.usehex.checked;
	var Max=sizeb*4;
	//Create an array structure to stand cache
	var cache=new Object();
	cache.addr=new Array();
	cache.time=new Array();
	cache.color=new Array();
	cache.tag=new Array();
	
	for(i=0;i<assoc;i++)
	{
		cache.addr[i]=new Array();
		cache.time[i]=new Array();
		cache.color[i]=new Array();
		for(j=0;j<sizeb/assoc;j++)
		{
			cache.color[i][j]=0;
			cache.time[i][j]=0;
		}
		cache.tag[i]=new Array(); //cache.tag[i][j]=cache.addr[i][j]/assoc
	}
	
	//create an array to stand main memory
	var msaddr=new Object();
	msaddr.value=new Array();
	msaddr.color=new Array();
	msaddr.repla=new Array();
	//create another array to stand 2nd main memory
	var msaddr1=new Object();
	msaddr1.value=new Array();
	msaddr1.color=new Array();
	msaddr1.repla=new Array();
	
	var trace=new Object();
	trace.value=new Array();
	trace.color=new Array();
	trace.repla=new Array();
	trace.comMiss=0;
	trace.capMiss=0;
	trace.conMiss=0;
	trace.caHit=0;
	//leave room for multi-task error
	if(multi==1&&repeat==0)
	{
		window.open("multi_error.html","output","");
		return;
	}
	if(sizeb<assoc)
	{
		window.open("input_error.html","output","");
		//parent.frames[1].location.href="input_error.html";
		return ;
	}
	if(rand==1)
	{
		length=long;
		for(i=0;i<long;i++)
		{
			msaddr.value[i]=RndNum(Max);
			//msaddr.color[i]=0;
			/*if(usehex==1)
			{
				temp=RndNum(Max);
				msaddr.value[i]=parseInt(temp,10).toString(16);
			}*/
		}
		
	}
	else
	{
		if(instring!='')
		{
			instring = instring.replace(/^\s*/, "");
			instring = instring.replace(/\s*$/, "");
			msaddr.value=instring.split(/\s+/g);
		//parent.frames[1].document.write(instring);
		
		length=msaddr.value.length;
		for(i=0;i<msaddr.value.length;i++)
		{
			msaddr.value[i]=Number(msaddr.value[i]);
		}
		}
	}
	if(rand==0&&limit==1&&length>long)
		length=long;
	//test(msaddr);
	if(multi==1)
	{
		var mark=0;
		if(rand==1)
		{
			length1=long;
			for(i=0;i<long;i++)
			{
				msaddr1.value[i]=RndNum(Max);
				//msaddr.color[i]=0;
				/*if(usehex==1)
				{
					temp=RndNum(Max);
					msaddr.value[i]=parseInt(temp,10).toString(16);
				}*/
			}
		
		}
		else
		{
			if(instring1!='')
			{
				instring1 = instring1.replace(/^\s*/, "");
				instring1 = instring1.replace(/\s*$/, "");
				msaddr1.value=instring1.split(/\s+/g);
				//parent.frames[1].document.write(instring);
		
				length1=msaddr1.value.length;
				for(i=0;i<msaddr1.value.length;i++)
				{
					msaddr1.value[i]=Number(msaddr1.value[i]);
				}
			}
		}
		Upper="<HTML>\n<HEAD>\n<TITLE>OUTPUT</TITLE>\n</HEAD>\n<BODY bgcolor=#ffffcc>\n";
		parent.frames[1].document.write(Upper);
		for(i=0;i<cycles;i++)
		{
			if(i%2==0)//TASK A
			{
				if(polic==1)
				{
					inLRU(cache,msaddr,length,sizeb,assoc);
				}
				else if(polic==2)
				{
					inFIFO(cache,msaddr,length,sizeb,assoc);
				}
				else if(polic==3)
				{
					inRAND(cache,msaddr,length,sizeb,assoc);
				}
				time=i+1;
				for(j=mark,k=0;k<length;k++,j++)
				{
					trace.value[j]=msaddr.value[k];
					trace.color[j]=msaddr.color[k];
					if(trace.color[j]==1)
						trace.comMiss++;
					else if(trace.color[j]==2)
					{
						if(assoc==1)
							trace.capMiss++;
						else
							trace.conMiss++;
					}
					else if(trace.color[j]==3)
						trace.caHit++;
					trace.repla[j]=msaddr.repla[k];
					mark++;
				}
				
				Middle+=drawChart(cache,trace,sizeb,assoc,polic,usehex,cycles,time,shotags,multi);
			}
			else //TASK B
			{
				if(polic==1)
				{
					inLRU1(cache,msaddr1,length1,sizeb,assoc);
				}
				else if(polic==2)
				{
					inFIFO1(cache,msaddr1,length1,sizeb,assoc);
				}
				else if(polic==3)
				{
					inRAND1(cache,msaddr1,length1,sizeb,assoc);
				}
				time=i+1;
				for(j=mark,k=0;k<length1;k++,j++)
				{
					trace.value[j]=msaddr1.value[k];
					trace.color[j]=msaddr1.color[k];
					if(trace.color[j]==4)
						trace.comMiss++;
					else if(trace.color[j]==5)
					{
						if(assoc==1)
							trace.capMiss++;
						else
							trace.conMiss++;
					}
					else if(trace.color[j]==6)
						trace.caHit++;
					trace.repla[j]=msaddr1.repla[k];
					mark++;
				}
				Middle+=drawChart(cache,trace,sizeb,assoc,polic,usehex,cycles,time,shotags,multi);
			}
		}
		Middle+=drawTrace(trace,assoc,usehex);
		parent.frames[1].document.write(Middle);
		
		Footer="</BODY></HTML>";
		parent.frames[1].document.write(Footer);
		parent.frames[1].document.close();
		return ;
	}
	else
	{
		if(repeat==0)
			cycles=1;
		Upper="<HTML>\n<HEAD>\n<TITLE>OUTPUT</TITLE>\n</HEAD>\n<BODY bgcolor=#ffffcc>\n";
		parent.frames[1].document.write(Upper);
		for(i=0;i<cycles;i++)
		{
			if(polic==1)
			{
				inLRU(cache,msaddr,length,sizeb,assoc);
			}
			else if(polic==2)
			{
				inFIFO(cache,msaddr,length,sizeb,assoc);
			}
			else if(polic==3)
			{
				inRAND(cache,msaddr,length,sizeb,assoc);
			}
			time=i+1;
			for(j=i*length,k=0;k<length;k++,j++)
			{
				trace.value[j]=msaddr.value[k];
				trace.color[j]=msaddr.color[k];
				if(trace.color[j]==1)
					trace.comMiss++;
				else if(trace.color[j]==2)
				{
					if(assoc==1)
						trace.capMiss++;
					else
						trace.conMiss++;
				}
				else if(trace.color[j]==3)
					trace.caHit++;
				trace.repla[j]=msaddr.repla[k];
			}
			
			
			Middle+=drawChart(cache,trace,sizeb,assoc,polic,usehex,cycles,time,shotags,multi);
		}
		/*for(j=0;j<length*cycles;j++)
			{
				
				parent.frames[1].document.write(trace.value[j]);
				parent.frames[1].document.write(' ');
				
				parent.frames[1].document.write(trace.color[j]);
				parent.frames[1].document.write(' ');
				parent.frames[1].document.write(trace.repla[j]);
				parent.frames[1].document.write(' <br> ');
			}*/
		Middle+=drawTrace(trace,assoc,usehex);
		parent.frames[1].document.write(Middle);
		
		Footer="</BODY></HTML>";
		parent.frames[1].document.write(Footer);
		parent.frames[1].document.close();
		return ;
	}
	/*Upper="<HTML>\n<HEAD>\n<TITLE>OUTPUT</TITLE>\n</HEAD>\n<BODY bgcolor=#ffffcc>\n";
	Footer="</BODY></HTML>";
	parent.frames[1].document.write(Upper);
	parent.frames[1].document.write(msaddr.value.length);
	parent.frames[1].document.write("  ");
	parent.frames[1].document.write(msaddr.value[1]);
	parent.frames[1].document.write(Footer);
	parent.frames[1].document.close();*/
	
	
}