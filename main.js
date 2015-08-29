
function diap(clase,num_dia)
{
    //Constructor
    this.class=clase;//propiedad 1: nombre principal de la clase de la diapositiva
    this.numcl=num_dia;//propiedad 2: nombre numerico de la diapositiva


    //metodos:
    this.nameClass=function()
    {
        return "."+this.class+this.numcl+"";
    };//Devulve el nombre de la clase

    this.newdiap=function(clase,num,html)
    {
        this.class=clase;
        this.numcl=num;
        $(html).append("<div class="+clase+num+"></div>");
    };//Crea una nueva diapositiva

    this.addelem=function(html,text,html2,cl)
    {
        $(this.nameClass()+" "+html2).append("<"+html+" class="+cl+"></"+html+">");
        if(cl!="undefined")$(this.nameClass()+" "+html+"."+cl).append(text);
        else $(this.nameClass()+" "+html).append(text);
    };//Agrega un elemento html a la diapositiva

    this.addimg=function(src_img)
    {
        $(this.nameClass()).append("<img src="+src_img+" />");
    };//Agrega una imagen a la diapositiva

    this.adda=function(href, html2, text)
    {
         $(this.nameClass()+" "+html2).append("<a href="+href+">"+text+"</a>");
    }
    
    this.addvideo=function(src,width,heigth,html)
    {
        $(this.nameClass()+" "+html).append("<iframe width="+width+" height="+heigth+" src="+src+" frameborder='0' allowfullscreen></iframe>");
    };//Agrega un video de youtube a la diapositiva

    this.main=function()
    {
        var x=this.numcl+1;
        var sig="."+this.class+x+"";
        $(this.nameClass()).click(function()
        {
            $(this).hide();
            $(sig).fadeIn();
        });
    };//Permite moverte a la siguinte diapositiva
}

function dps(clase,num_t_dia)//Objeto que agrupa diapositivas
{
    //Constructor
    this.class=clase;//porpiedad 1: nombre de la clase de diapostivas en familia
    this.numtd=num_t_dia;//porpiedad 2: numero de diapostivas de la familia
    this.dips=[];//propiedad 3: vector para guardar las diapositivas creadas de la familia

    //metodos:
    this.maker=function()
    {
        for(var i=1;i<=this.numtd;i++)
            {
                var x=new diap();//Crear una isatncia del objeto diap()
                x.newdiap(this.class,i,"body");
                this.dips.push(x);
            }
    };//Metodo que permite crear diapositivas

    this.main=function()
    {
        for(var i=1;i<this.dips.length;i++)
            {
                $(this.dips[i].nameClass()).hide();
            }
        for(var i=0;i<this.dips.length;i++)
            {
                this.dips[i].main();
            }

    };//permite animar las diapositivas

    this.idps=function(index,tipo_ele,s1,s2,s3,s4)
    {
        if(index < this.numtd && index >= 0){
        if(tipo_ele==="html")
            {
                this.dips[index].addelem(s1,s2,s3,s4);
            }else if(tipo_ele==="img")
                {
                    this.dips[index].addimg(s1);
                }
            else if(tipo_ele==="video")
                {
                    this.dips[index].addvideo(s1,s2,s3,s4);
                }else if(tipo_ele==="a")
                {
                    this.dips[index].adda(s1,s2,s3);
                }
            }else $("body").append("<h1>Tienes problemas con las diapositivas, mira su inidice como vetcor!! Diap: '"+index+"'</h1>");
            
    };//permite agregar nuevos objetos a las dipostivas como htmls, img, video.


}


