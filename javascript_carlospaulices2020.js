    /*redirect to old blog version - Carlos Paulo, 29 de Julho de 2020*/
    	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
	function newURL(pageurl){
		var s=pageurl.length;
		var pos=pageurl.indexOf("cpaulof2";);
		var novo=pageurl.substring(0,pos)+"old";+pageurl.substring(pos,s);
		return novo
 	}
 	
	function ifBefore2020Redirect(){
		var pageurl=document.location.href;
		var s=pageurl.length; 
  		var pos=pageurl.indexOf("/201";)
        	if(pos>0){window.location.href = newURL(pageurl);}
	}
	
	function ifMobileRedirectToo(){
		var pageurl=document.location.href;
		var s=pageurl.length; 
  		var pos=pageurl.indexOf("?m=")
		if(pos>0){
	    		var novo=pageurl.substring(0,pos);
	    		window.location.href =novo
	    		sleep(2000)
	    	}    
    	}

function fixfooter(){
	var htmlclr="<div class='clear'></div>"
	var html="<div class='widget Attribution' data-version='1' id='Attribution1'><div class='widget-content' style='text-align: center;'>\n"
	html+="<hr>A versão anterior deste blog encontra-se disponível em <a href='https://oldcpaulof2.blogspot.com/'>https://oldcpaulof2.blogspot.com/</a>.<br/>"
	html+="Todos os links para textos <b><i>anteriores a 2020</i></b> serão redireccionados para lá.<hr>"
	html+="Textos de Carlos Paulo A. Freitas.<br><i>Respeite os direitos de autor.</i><br>"
	
	html+=" Imagens de temas por <a href='http://www.istockphoto.com/portfolio/Barcin?platform=blogger' target='_blank'>Barcin</a>.<br> Com tecnologia do <a href='https://www.blogger.com' target='_blank'>Blogger</a>, e algumas modificações pelo autor do blog.\n"
	html+="</div>\n"
	html+=htmlclr
	html+="<span class='widget-item-control'>\n"
	html+="<span class='item-control blog-admin'>"
	html+="<a class='quickedit' href='//www.blogger.com/rearrange?blogID=2119950238996429386&widgetType=Attribution&widgetId=Attribution1&action=editWidget&sectionId=footer-3' onclick='return _WidgetManager._PopupConfig(document.getElementById(\"Attribution1\"));' rel='nofollow' target='configAttribution1' title='Editar'>\n"
	html+="<img alt='' height='18' src='https://resources.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>\n"
	html+="</a>\n"
	html+="</span>\n"
	html+="</span>\n"
	html+=htmlclr
	html+="</div>\n"
	document.getElementById('footer-3').innerHTML=html
}
/*************************************************************************************************************************/

 //ifMobileRedirectToo()
  ifBefore2020Redirect()
  
var _scr2020tempo
for(var i=1;i<320;i++){
   _scr2020tempo=20*i
   setTimeout(function(){fixfooter()},_scr2020tempo)
}


