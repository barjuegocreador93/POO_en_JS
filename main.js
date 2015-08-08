
function diap(clase,num_dia)
{
    this.class=clase;
    this.numcl=num_dia;
    this.elem=[];

    this.nameClass=function()
    {
        return "."+this.class+this.numcl+"";
    };

    this.newdiap=function(clase,num,html)
    {
        this.class=clase;
        this.numcl=num;
        $(html).append("<div class="+clase+num+"></div>");
    }

    this.addelem=function(html,text,cl)
    {
        $(this.nameClass()).append("<"+html+" class="+cl+"></"+html+">");
        $(this.nameClass()+" "+html).append(text);
    };

    this.addimg=function(src_img)
    {
        $(this.nameClass()).append("<img src="+src_img+" />");
    };

    this.addvideo=function(src,width,heigth)
    {
        $(this.nameClass()).append("<iframe width="+width+" height="+heigth+" src="+src+" frameborder='0' allowfullscreen></iframe>");
    }

    this.main=function()
    {
        var x=this.numcl+1;
        var sig="."+this.class+x+"";
        $(this.nameClass()).click(function()
        {
            $(this).hide();
            $(sig).fadeIn();
        });
    };
}

function dps(clase,num_t_dia)
{
    this.class=clase;
    this.numtd=num_t_dia;
    this.dips=[];

    this.maker=function()
    {
        for(var i=1;i<=this.numtd;i++)
            {
                var x=new diap();
                x.newdiap(this.class,i,"body");
                this.dips.push(x);
            }
    };

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

    };

    this.idps=function(index,tipo_ele,s1,s2,s3,s4)
    {
        if(tipo_ele==="html")
            {
                this.dips[index].addelem(s1,s2,s3);
            }else if(tipo_ele==="img")
                {
                    this.dips[index].addimg(s1);
                }
            else if(tipo_ele==="video")
                {
                    this.dips[index].addvideo(s1,s2,s3);
                }
    };


}


