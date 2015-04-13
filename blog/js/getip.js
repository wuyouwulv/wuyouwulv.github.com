/*
需要在 html 页面中有一句：
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
以获得ip及地理位置信息
*/
var ip = returnCitySN["cip"]; //ip地址
var id = returnCitySN["cid"]; //身份证编号前6位
var name = returnCitySN["cname"]; //所属地

var more_info = "https://www.baidu.com/s?wd=" + name;
var welcome = ip + "的用户";

document.write("<p>" + welcome + "</p><br />");
document.write('<a href="' + more_info + '" target="_blank">查找<span style="color:orange;">' + name + '</span>附近有趣的事</a>');
