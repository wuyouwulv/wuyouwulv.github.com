/*
��Ҫ�� html ҳ������һ�䣺
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
�Ի��ip������λ����Ϣ
*/
var ip = returnCitySN["cip"]; //ip��ַ
var id = returnCitySN["cid"]; //���֤���ǰ6λ
var name = returnCitySN["cname"]; //������

var more_info = "https://www.baidu.com/s?wd=" + name;
var welcome = ip + "���û�";

document.write("<p>" + welcome + "</p><br />");
document.write('<a href="' + more_info + '" target="_blank">����<span style="color:orange;">' + name + '</span>������Ȥ����</a>');
