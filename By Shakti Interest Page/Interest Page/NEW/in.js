<script>
var x;
var id_name = "abc";
function insert(){
var para = document.createElement("p");
x = document.getElementById("display").childElementCount;
para.id=id_name+((x-1)/2);
var titleInput  = document.getElementById("title");
var node = document.createTextNode(titleInput.value );
para.appendChild(node);

var element = document.getElementById("display");

element.appendChild(para);
document.getElementById("display").innerHTML+="<input type='submit' id='"+id_name+"' style='font-size:11px;float:right;top:-43px;margin-right:5px;position:relative;background-color:#a3a375;' value='Remove' onclick='delet(this.id)' /> ";
document.getElementById(id_name).id = para.id;
 document.getElementById(para.id).style.border = "thick solid white";
 document.getElementById(para.id).style.padding = "0px 5px";
}
</script>

<script>
function delet(clicked_id){
var parent = document.getElementById("display");
var child = document.getElementById(clicked_id);
parent.removeChild(child);
var parent = document.getElementById("display");
var child = document.getElementById(clicked_id);
parent.removeChild(child);
}

</script>