<head><link rel="manifest" href="7.webmanifest"></head>
$('.accompressor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'accompressor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.accompressor').addClass('red');}});});
$('.alternator').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'alternator', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.alternator').addClass('red');}});});	
$('.battery').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'battery', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.battery').addClass('red');}});});		
$('.bbumper').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'bbumper', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.bbumper').addClass('red');}});});	
$('.blaxle').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blaxle', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blaxle').addClass('red');}});});	
$('.blcaliper').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blcaliper', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blcaliper').addClass('red');}});});	
$('.blcarrier').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blcarrier', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blcarrier').addClass('red');}});});	
$('.blcoilspring').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blcoilspring', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blcoilspring').addClass('red');}});});	
$('.blrotor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blrotor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blrotor').addClass('red');}});});	
$('.blshock').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blshock', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blshock').addClass('red');}});});	
$('.bltire').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'bltire', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.bltire').addClass('red');}});});	
$('.blwheel').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'blwheel', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.blwheel').addClass('red');}});});	
$('.brakemastercylinder').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brakemastercylinder', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brakemastercylinder').addClass('red');}});});	
$('.braxle').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'braxle', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.braxle').addClass('red');}});});	
$('.brcaliper').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brcaliper', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brcaliper').addClass('red');}});});	
$('.brcoilspring').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brcoilspring', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brcoilspring').addClass('red');}});});	
$('.brrotor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brrotor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brrotor').addClass('red');}});});	
$('.brshock').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brshock', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brshock').addClass('red');}});});	
$('.brtire').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brtire', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brtire').addClass('red');}});});	
$('.brwheel').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'brwheel', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.brwheel').addClass('red');}});});	
$('.crossmember').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'crossmember', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.crossmember').addClass('red');}});});	
$('.differential').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'differential', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.differential').addClass('red');}});});	
$('.driveline').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'driveline', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.driveline').addClass('red');}});});	
$('.engine').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'engine', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.engine').addClass('red');}});});	
$('.fbumper').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'fbumper', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.fbumper').addClass('red');}});});	
$('.flcaliper').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flcaliper', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flcaliper').addClass('red');}});});	
$('.flcarrier').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flcarrier', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flcarrier').addClass('red');}});});	
$('.flheadlamp').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flheadlamp', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flheadlamp').addClass('red');}});});	
$('.flhub').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flhub', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flhub').addClass('red');}});});	
$('.fllowercontrolarm').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'fllowercontrolarm', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.fllowercontrolarm').addClass('red');}});});	
$('.flrotor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flrotor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flrotor').addClass('red');}});});	
$('.flshock').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flshock', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flshock').addClass('red');}});});	
$('.flspindle').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flspindle', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flspindle').addClass('red');}});});	
$('.fltire').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'fltire', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.fltire').addClass('red');}});});	
$('.fluppercontrolarm').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'fluppercontrolarm', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.fluppercontrolarm').addClass('red');}});});	
$('.flwheel').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'flwheel', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.flwheel').addClass('red');}});});	
$('.frcaliper').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frcaliper', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frcaliper').addClass('red');}});});	
$('.frcarrier').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frcarrier', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frcarrier').addClass('red');}});});	
$('.frheadlamp').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frheadlamp', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frheadlamp').addClass('red');}});});	
$('.frhub').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frhub', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frhub').addClass('red');}});});	
$('.frlowercontrolarm').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frlowercontrolarm', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frlowercontrolarm').addClass('red');}});});	
$('.frontsway').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frontsway', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frontsway').addClass('red');}});});	
$('.frrotor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frrotor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frrotor').addClass('red');}});});	
$('.frshock').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frshock', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frshock').addClass('red');}});});	
$('.frspindle').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frspindle', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frspindle').addClass('red');}});});	
$('.frtire').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frtire', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frtire').addClass('red');}});});	
$('.fruppercontrolarm').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'fruppercontrolarm', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.fruppercontrolarm').addClass('red');}});});	
$('.frwheel').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'frwheel', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.frwheel').addClass('red');}});});	
$('.gastank').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'gastank', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.gastank').addClass('red');}});});	
$('.hood').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'hood', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.hood').addClass('red');}});});	
$('.lcat').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lcat', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lcat').addClass('red');}});});	
$('.ldoor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'ldoor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.ldoor').addClass('red');}});});	
$('.lexhaustmanifold').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lexhaustmanifold', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lexhaustmanifold').addClass('red');}});});	
$('.lfender').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lfender', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lfender').addClass('red');}});});	
$('.lkicker').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lkicker', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lkicker').addClass('red');}});});	
$('.lmirror').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lmirror', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lmirror').addClass('red');}});});	
$('.lquarter').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lquarter', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lquarter').addClass('red');}});});	
$('.ltaillight').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'ltaillight', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.ltaillight').addClass('red');}});});	
$('.lttop').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lttop', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lttop').addClass('red');}});});	
$('.lwindow').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'lwindow', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.lwindow').addClass('red');}});});	
$('.muffler').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'muffler', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.muffler').addClass('red');}});});	
$('.panhardbar').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'panhardbar', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.panhardbar').addClass('red');}});});	
$('.panhardsupport').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'panhardsupport', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.panhardsupport').addClass('red');}});});	
$('.powersteeringpump').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'powersteeringpump', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.powersteeringpump').addClass('red');}});});	
$('.radiator').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'radiator', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.radiator').addClass('red');}});});	
$('.rcat').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rcat', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rcat').addClass('red');}});});	
$('.rdoor').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rdoor', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rdoor').addClass('red');}});});	
$('.rearsway').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rearsway', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rearsway').addClass('red');}});});	
$('.rexhaustmanifold').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rexhaustmanifold', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rexhaustmanifold').addClass('red');}});});	
$('.rfender').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rfender', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rfender').addClass('red');}});});	
$('.rkicker').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rkicker', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rkicker').addClass('red');}});});	
$('.rmirror').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rmirror', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rmirror').addClass('red');}});});	
$('.rquarter').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rquarter', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rquarter').addClass('red');}});});	
$('.rtaillight').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rtaillight', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rtaillight').addClass('red');}});});	
$('.rttop').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rttop', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rttop').addClass('red');}});});	
$('.rwindow').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'rwindow', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.rwindow').addClass('red');}});});	
$('.spoiler').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'spoiler', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.spoiler').addClass('red');}});});	
$('.steeringrack').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'steeringrack', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.steeringrack').addClass('red');}});});	
$('.tailpanel').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'tailpanel', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.tailpanel').addClass('red');}});});	
$('.torquearm').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'torquearm', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.torquearm').addClass('red');}});});	
$('.transmission').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'transmission', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.transmission').addClass('red');}});});	
$('.waterpump').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'waterpump', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.waterpump').addClass('red');}});});	
$('.ypipe').one('dblclick', function(){$.ajax({url: 'ajax.php',type: 'POST',data: {selectornamevariable:'ypipe', VIN:'<?php echo $_POST['VIN']; ?>'},dataType: 'JSON',success: function(result){$('#dialogue').append(result[0].selectornamevariable+"<br>");$('.ypipe').addClass('red');}});});	
