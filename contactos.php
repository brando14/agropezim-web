<!DOCTYPE html>
<html lang="en">
  <head>
   
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Agropezim Group C.A. </title>
	
	<!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/estilos.css"   rel="stylesheet">

    <!-- normalize CSS -->
    <link href="css/normalize.css" rel="stylesheet">
    
    <!-- para el carrusel de productos CSS -->
    <link rel="stylesheet" href="css/tinycarousel.css" type="text/css" media="screen"/>

    <!-- para la animacion CSS -->
    <link href="css/camera.css"  rel="stylesheet" id="camera-css"  type="text/css" media="all">

 
    <!-- jQuery -->
   
    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
      <!-- mover carrusel desde JavaScript -->
    <script src="js/jquery.tinycarousel.min.js"></script>
       
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script src="js/jquery.quicksand.js" type="text/javascript"></script>
   <script src="js/jquery.easing.js" type="text/javascript"></script

    <!-- para las animaciones -->
    <!-- -->
    <script src="js/jquery.min.js"></script>
    <script src="js/camera.min.js"></script>
    <script src='js/jquery.mobile.customized.min.js'  type='text/javascript'></script>
    <script src='js/jquery.easing.1.3.js' type='text/javascript'></script> 
    
	<!-- Add fancyBox -->
	<link rel="stylesheet" href="js/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
    <script type="text/javascript" src="js/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
	
	<!--<link rel="stylesheet" href="js/fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
    <script type="text/javascript" src="js/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
-->

    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
<body class="home" >
    <!--<h1>Hello, world!</h1> -->
<!-- <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation"> -->
  <div class="container"  id="cabecera" >
 
        <div class="container" id="containerCentral">
            <!-- Brand and toggle get grouped for better mobile display -->
             <!---->
             <div class="navbar-header">
               <a class="navbar-brand" href="index.html" ><img src="images/logo_agropezim.png" class="header" id="logo"   />
                </a>  <!--importante el data-target debe apuntar al menu a expandis u ocultar-->     
				 <button type="button" class="navbar-toggle" onclick="estirarContainer()" data-toggle="collapse" data-target="#caja-iconos" style="margin-top:60px;"><img src="images/menu.jpg"  />
				</button> 
            </div>
 
		    <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="caja-iconos" >
 
                <ul class="nav navbar-nav navbar-right" style="margin-top:50px; text-align:center" id="caja-iconos">
                    <!-- -->
                    <li class="boton_menu " >
                        <a href="nosotros.html" ><img src="images/nosotros.jpg" class="hidden-xs btn_nosotros  "  />
                        <label class="visible-xs" align="center"   ><h2> <span class="label label-default  "> Nosotros </span></h2></label>
						</a>
                    </li>
                    <li class="boton_menu "  >
                        <a href="clientes.html" ><img src="images/clientes.jpg" class="hidden-xs btn_clientes clientes "  />
						<label class="visible-xs" align="center"  ><h2> <span class="label label-default "> Clientes</span></h2> </label>
						</a>
                    </li>
                    <li class="boton_menu ">
                         <a href="productos.html" ><img src="images/productos.jpg" class="hidden-xs btn_productos"  />
                         <label class="visible-xs" align="center" onclick="location.href='productos.html';"><h2> <span class="label label-default"> Productos</span></h2> </label>
						 </a>
                    </li>
					<li class="boton_menu ">
                         <a href="servicios.html" ><img src="images/servicios.jpg"class="hidden-xs btn_servicios" />
						 <label class="visible-xs " align="center" onclick="location.href='servicios.html';"><h2> <span class="label label-default"> Servicios</span></h2> </label>
						 </a>
                    </li>
					<li class="boton_menu ">
                         <a href="noticias.html" ><img src="images/noticias.jpg"class="hidden-xs btn_noticias" />
						 <label class="visible-xs " align="center" onclick="location.href='noticias.html';"><h2> <span class="label label-default"> Noticias</span></h2> </label>
						 </a>
                    </li>
					<li class="boton_menu ">
                         <a href="contactos.php" ><img src="images/contactos.jpg"class="hidden-xs btn_contacto contactos colorear" style="width:30px;" />
						 <label class="visible-xs colorear" align="center" onclick="location.href='contactos.php';"  ><h2> <span class="label label-default"> Contactos</span></h2> </label>
						 </a>
                    </li>
                </ul>
           </div>  
            <!--  primera linea naranja-->   
           <hr class="hr_arriba" /> 
		  
			 					  <section class="formulario">
							<!-- Aqui va el codigo del formulario -->
							  <br><br> Complete el siguiente formulario con sus datos y haganos llegar su solicitud y nos pondremos en contacto con usted tan pronto como sea posible. 
							 <form action="" method="post"  enctype="multipart/form-data" >
									 <input type="hidden" name="action" value="submit"> 
									 <label for="nombre">Nombre:</label>
									 <input id="nombre" type="text" name="nombre" placeholder="Nombre y Apellido" required="" />
									 <label for="phone">Telefono:</label>
									 <input id="phone" type="text" name="phone" placeholder="ejemplo 04241234567" required="" /> 
									 <label for="email">Email:</label>
									 <input id="email" type="email" name="email" placeholder="ejemplo@correo.com" required="" />
									 <label for="mensaje">Mensaje:</label>
									 <textarea id="mensaje" name="mensaje" placeholder="Mensaje" required=""></textarea>
									 <center><input type="submit" value="Enviar Solicitud" class="myButton" align="center" > </center>  
							 </form>
					  </section>
			
			</div>
			<br>
        <!-- /.container -->
 
	<!--  tercera linea naranja-->  
	<hr class="hr_arriba" />  
	<!-- footer-->
	<div class="pata">

		<p class="descripcion_central" ><br>  Agropezim Group C.A. RIF: J-404095969 Venezuela, San Felipe - Estado Yaracuy. <br>Todos los Derechos Reservados 2014</p>
	
	</div>
 
</div>
    <script>
		 window.onload = function () {
			showhome();
		}
		
		function showhome(){
				  $(".header").animate({width: 350}, 1000);
				  $(".contactos").animate({width:94},1000);
		}
		
		/*$('html').on('keydown' , function(event) {
			if(! $(event.target).is('input')) {
				console.log(event.which);
			   //event.preventDefault();
			   if(event.which == 8) {
				 location.href='index.html';
				return false;
			 }
			}
		});*/
    </script>
</div>
 
  </body>
</html>